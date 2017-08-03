import requests
import json
import sys

with open(sys.argv[1], 'r') as json_data:
    inputFile = json.load(json_data)

    status = True

    for addresses in inputFile["addresses"]:
        #create a python object
        parameterObject = {}
        parameterObject["street"] = addresses['street']
        parameterObject["city"] = addresses['city']
        parameterObject["state"] = addresses['state']
        parameterObject["zip"] = addresses['zip']
        parameterObject["benchmark"] = "Public_AR_Census2010"
        parameterObject["format"] = "json"


        r = requests.get('https://geocoding.geo.census.gov/geocoder/locations/address', params = parameterObject)
        responseData = r.json()

        addresses['Latitude'] = responseData["result"]["addressMatches"][0]["coordinates"]["y"]
        addresses['Longitude'] = responseData["result"]["addressMatches"][0]["coordinates"]["x"]

        print(addresses)


# for objects in inputFile["addresses"]:
#     r = requests.get('https://geocoding.geo.census.gov/geocoder/locations/address', params = objects)
#     responseData = r.json()
