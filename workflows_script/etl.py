import pandas as pd
import json


def main():
    # Define the URL of the CSV file
    url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFUHODCeW0tq-ZAvJb6PoWxPBntEKaI3inZuOqL99EQAWrPl01Cs0v2jZPvXY8mCRPwi2G4lk1OuB6/pub?gid=125491161&single=true&output=csv'

    # Read the CSV file from the URL into a Pandas DataFrame
    df = pd.read_csv(url)

    # Convert the DataFrame to a list of dictionaries
    df_dict = df.to_dict(orient='records')

    # Open a file for writing
    with open("thailand_national_park.json", "w", encoding='utf-8') as outfile:
        # Write the dictionary to the file in JSON format
        json.dump(df_dict, outfile, ensure_ascii=False)

if __name__ == '__main__':
    main()

