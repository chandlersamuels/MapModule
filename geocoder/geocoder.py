import requests
import json
import sys

print("Locating...")

with open(sys.argv[1], 'r') as json_data:
    inputFile = json.load(json_data)

status = True
counter = 1
invalidDataEntry = []

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

    if(r.status_code == 200):
        responseData = r.json()


        try:
            addresses['Latitude'] = responseData["result"]["addressMatches"][0]["coordinates"]["y"]
            addresses['Longitude'] = responseData["result"]["addressMatches"][0]["coordinates"]["x"]


        except IndexError:
            invalidDataEntry.append(counter)
            status = False
            addresses['Latitude'] = ""
            addresses['Longitude'] = ""

    else:
        print("Response error code: " + str(r.status_code))

    counter= counter + 1

    #print (addresses)
if(status == True):
    print("All locations Found")
else:
    print("Oops we spotted an error with entry numbers: " + str(invalidDataEntry))


fo = open(sys.argv[2], 'w')
fo.write(str(inputFile))
fo.close()



# for objects in inputFile["addresses"]:
#     r = requests.get('https://geocoding.geo.census.gov/geocoder/locations/address', params = objects)
#     responseData = r.json()
