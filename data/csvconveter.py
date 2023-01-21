import json
import csv

with open('data\data.json', 'r', encoding='utf-8') as json_file:
    json_data = json.load(json_file)

with open('training.csv', 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['text', 'label']) 
    for row in json_data:
        csv_writer.writerow([row['text'], row['label']])
