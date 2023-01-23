from flask import Flask, request, redirect, url_for, render_template
from dateutil import parser
import requests, sqlite3, json, cohere, random
from flask_cors import CORS

try:
    secrets = json.load(open("env.json"))
except:
    secrets = json.load(open("../env.json"))

app = Flask(__name__)
app.secret_key = secrets['flaskSecretKey']
CORS(app)

# Database
conn = sqlite3.connect('base.db', check_same_thread=False)

'''
Database Schema:

-> Event ID 
-> Name
-> Organizer
-> Start Date
-> End Date
-> Description
-> Tags
''' 

def into_makeshift(arr):
    res = ''
    for i in range(len(arr) - 1):
        res += arr[i] + '\0'
    return res + arr[-1]

def from_makeshift(s):
    return s.split('\0')

def insert_from_dict(d):
    relevant_keys = 'id name organizer start_date end_date description tags'.split()
    event = []
    for key in relevant_keys:
        if key not in d:
            raise Exception("bruh invalid dict lad")
        res = d[key]
        if key == 'tags':
            res = into_makeshift(d[key])
        elif 'date' in key:
            res = parser.parse(d[key])
        event.append(res)    
    conn.execute('INSERT INTO events VALUES (?, ?, ?, ?, ?, ?, ?)', event)
    conn.commit()

def query_from_tag(query, num):
    res = conn.execute("SELECT * FROM events WHERE tags=?", [query])
    results = res.fetchall()[:num]
    return results


# Co:here
COHERE_API = secrets['cohereAPI']
COHERE_MODEL = secrets['cohereModel']

co = cohere.Client(COHERE_API)

@app.route('/query_events', methods=['POST', 'GET'])
def query_events():
    if request.method == 'POST':
        data = dict(request.json)
        query = data['query']
    return ''

@app.route('/create_event', methods=['POST', 'GET'])
def create_event():
    if request.method == 'POST':
        data = dict(request.json)
        insert_from_dict(data)
        return json.dumps({'status': 'GOOD'})
    return 'E'


# implement cohere backend
@app.route('/cohere', methods=['POST', 'GET'])
def cohere():
    if request.method == 'POST':
        data = dict(request.json)
        prompt = data['prompt']
        print(prompt)
        response = co.classify(
            inputs = [prompt],
            model = COHERE_MODEL)
        resp = response.classifications[0]
        result = resp.prediction
        # 2 closest recommendations to include alongside base events
        closest = sorted(resp.labels.items(), key = lambda x: x[1].confidence, reverse = True)[1:3]
        # assume that it got it right, or else we're fucked
        # query 3 related to the tag needed
        normal_reccs = query_from_tag(result, 3)
        abnormal_reccs = [query_from_tag(closest[i][0], 1)[0] for i in range(2)]
        print(normal_reccs)
        return json.dumps({"status": "GOOD", "normal": normal_reccs, "abnormal": abnormal_reccs})
    return '...'


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        return redirect(url_for('cohere_test'), code=307)
    return render_template('index.html')


@app.route('/cohere-test', methods=['POST', 'GET'])
def cohere_test():
    if request.method == 'POST':
        prompt = request.form.get('prompt')
        response = co.classify(
            inputs = [prompt],
            model = COHERE_MODEL)
        resp = response.classifications[0]
        result = resp.prediction
        # 2 closest recommendations to include alongside base events
        closest = sorted(resp.labels.items(), key = lambda x: x[1].confidence, reverse = True)[1:3]
        # assume that it got it right, or else we're fucked
        # query 3 related to the tag needed
        normal_reccs = query_from_tag(result, 3)
        abnormal_reccs = [query_from_tag(closest[i][0], 1)[0] for i in range(2)]
        reccs = normal_reccs + abnormal_reccs
        return render_template('cohere.html', reccs = normal_reccs + abnormal_reccs)
    return '...'


@app.route('/zesty/<string:prompt>', methods=['POST', 'GET'])
def zesty(prompt):
    response = co.classify(
        inputs = [prompt],
        model = COHERE_MODEL)
    resp = response.classifications[0]
    result = resp.prediction
    # 2 closest recommendations to include alongside base events
    closest = sorted(resp.labels.items(), key = lambda x: x[1].confidence, reverse = True)[1:3]
    # assume that it got it right, or else we're fucked
    # query 3 related to the tag needed
    print(closest)
    normal_reccs = query_from_tag(result, 3)
    abnormal_reccs = []
    for i in range(2):
        try: abnormal_reccs.append(query_from_tag(closest[i][0], 1)[0])
        except: continue
    reccs = normal_reccs + abnormal_reccs
    return render_template('cohere.html', reccs = normal_reccs + abnormal_reccs)


@app.route('/get-events', methods=['POST', 'GET'])
def get_events():
    if request.method == 'GET':
        result = conn.execute('SELECT * FROM events')
        res = random.choices(result.fetchall(), k=4)

        relevant_keys = list(zip((1, 3, 4, 5),'name start_date end_date description'.split()))
        res_d = {}
        for i, x in enumerate(['one', 'two', 'three', 'four']):
            res_d[x] = dict()
            for j, key in relevant_keys:
                res_d[x][key] = res[i][j]
        
        return json.dumps({'events': res_d})
    return '...'

if __name__ == '__main__':
    response = co.classify(inputs = ["I love coding."], model = COHERE_MODEL)
    resp = response.classifications[0]
    result = resp.prediction
    print(result)

    closest = sorted(resp.labels.items(), key = lambda x: x[1].confidence, reverse = True)[1:3]
    print(closest)

    normal_reccs = query_from_tag(result, 3)
    print(normal_reccs)

    abnormal_reccs = [query_from_tag(closest[i][0], 1)[0] for i in range(2)]
    print(abnormal_reccs)