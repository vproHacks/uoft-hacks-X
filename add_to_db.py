from dateutil import parser
import sqlite3, json

conn = sqlite3.connect('base.db')

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
        if 'date' in key:
            res = parser.parse(d[key])
        event.append(res)    
    conn.execute('INSERT INTO events VALUES (?, ?, ?, ?, ?, ?, ?)', event)
    conn.commit()

dataset = json.load(open('./data/database.json'))



for entry in dataset:
    try:
        insert_from_dict(entry)
    except:
        print("JE METTE LE COCAINE DANS MON BLOODSTREAM")
        print(entry)
    

'''
CREATE TABLE events (
event_id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
organizer TEXT NOT NULL,
start_date DATE NOT NULL,
end_date DATE,
description TEXT,
tags TEXT);
'''