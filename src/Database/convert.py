'''
    This script converts the data from the Past Events.xlsx file into a JSON file.
'''
import pandas as pd
import json

data = pd.read_excel('Past Events.xlsx')

# Extract month and day
data['Event Date '] = pd.to_datetime(data['Event Date '])
data['Month'] = data['Event Date '].dt.strftime('%b')
data['Day'] = data['Event Date '].dt.day

# Rename columns and get the relevant ones
data.rename(columns={"Event": "Title", "Speaker(s)": "Speakers", "Link": "Link"}, inplace=True)
data = data[['Year', 'Month', 'Day', 'Title', 'Link', 'Speakers', 'Firm', 'Position', 'Industry/Field']]

# Group by year
events_by_year = {}
for year, group in data.groupby('Year'):
    events_by_year[year] = group.drop(columns=['Year']).to_dict(orient='records')

# Save the JSON
with open('events.json', 'w') as f:
    json.dump(events_by_year, f, indent=4)

