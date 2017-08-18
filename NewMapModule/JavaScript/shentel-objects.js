
var testObjects =
	{
		"1-store-door-swings": {
    "vizualizationConfiguration": {
        "defaultMapType": "slippy",
        "defaultMapFace": "discrete",
        "slippy": {
            "defaultLatitude": 38.881778, //default to altoona pennsylvania
            "defaultLongitude": -78.505843,
            "zoomLevel": 7,
            "tileType": "Open Street Maps",
            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        },
        "geographyBoundariesFlag": false,
        "geographyBoundaries": {
            "mapName": "US Map by State",
            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
            "geoJsonUrl": "Maps/4StateMap/shentelfourstates.geojson"
        },
						"legend": {
							"legendFlag": false,
							"legendTitle": "Door Swings",
							"legend2Title": "Door Swings",
							"legendPosition": "bottomright",
							"legend2Position": "bottomright"
						},        "discretes": [{
            "continousFlag": false,
            "colorScheme": "green",
            "latColumn": "LATITUDE",
            "longColumn": "LONGITUDE",
						"shapeForm": "circle",
            "categoryFlag": false,
            "magnitudeFlag": true,
            "displayOptions": "none",
            "attributeColumns": {
                "category": "STORE",
                "magnitude": "SWINGS",
                "label": "STORE",
                "additional": [
                    "ADDRESS",
                    "CITY",
                    "ZIP",
                    "STATE"
                ]
            }
        }]
    },
    "discreteData":[{
        "columns": [
						{
								"field": "z",
								"title": "Swings",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "SWINGS",
								"type": "character"
						},
            {
                "field": "g",
                "title": "Store",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "STORE",
                "type": "character"
            },
            {
                "field": "s", //this will help index in the feild below
                "title": "Address",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "ADDRESS",//label of the point
                "type": "character"
            },
            {
                "field": "al",
                "title": "City",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "CITY",
                "type": "character"
            },
            {
                "field": "am",
                "title": "Zip",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "ZIP",
                "type": "character"
            },
            {
                "field": "an",
                "title": "State",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "STATE",
                "type": "character"
            },
            {
                "field": "bg",
                "title": "Latitude",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "LATITUDE",
                "type": "character"
            },
            {
                "field": "bf",
                "title": "Longitude",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "LONGITUDE",
                "type": "character"
            }
        ],
        "rows": [
    {
        "z": 4538,
        "g": "Wesel Boulevard",
        "s": "1580 Wesel Blvd",
        "al": "Hagerstown",
        "am": "21740",
        "an": "MD",
        "bf": 39.63304,
        "bg": -77.75875,
        "geoCodeStatus": "Success"
    },
    {
        "z": 6890,
        "g": "Loudoun Street",
        "s": "1921 S. Loudoun St",
        "al": "Winchester",
        "am": "22601",
        "an": "VA",
        "bf": 39.165314,
        "bg": -78.17172,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2586,
        "g": "Silver Creek",
        "s": "6391 Carlisle Pike Suite 106",
        "al": "Mechanicsburg",
        "am": "17050",
        "an": "PA",
        "bf": 40.246735,
        "bg": -77.00373,
        "geoCodeStatus": "Success"
    },
    {
        "z": 1558,
        "g": "WS BKLY Cranberry Creek",
        "s": "316b Beckley Plz",
        "al": "Beckley",
        "am": "",
        "an": "WV",
        "bf": 37.81188,
        "bg": -81.183426,
        "geoCodeStatus": "Success"
    },
    {
        "z": 3275,
        "g": "SO CRBG New River",
        "s": "782 New River Road Unit 706",
        "al": "Christiansburg",
        "am": "",
        "an": "VA",
        "bf": 37.165386,
        "bg": -80.427270,
    },
    {
        "z": 2132,
        "g": "CP YORK West Manchester",
        "s": "645 Town Center Dr",
        "al": "York",
        "am": "17408",
        "an": "PA",
        "bf": 39.969598,
        "bg": -76.769338,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 4324,
        "g": "Foxcroft Avenue",
        "s": "775 Foxcroft Ave",
        "al": "Martinsburg",
        "am": "25401",
        "an": "WV",
        "bf": 39.461693,
        "bg": -77.98725,
        "geoCodeStatus": "Success"
    },
    {
        "z": 3025,
        "g": "WS CLBG Newpointe Center",
        "s": "474 Emily Drive",
        "al": "Clarksburg",
        "am": "",
        "an": "WV",
        "bf": 39.263197,
        "bg": -80.288069,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 3507,
        "g": "WS BRPT Meadowbrook Mall",
        "s": "2425 Meadowbrook Rd",
        "al": "Bridgeport",
        "am": "",
        "an": "WV",
        "bf": 39.313345,
        "bg": -80.272198,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 4663,
        "g": "Maugans Avenue",
        "s": "18634 Maugans Ave",
        "al": "Hagerstown",
        "am": "21740",
        "an": "MD",
        "bf": 39.686695,
        "bg": -77.723175,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2376,
        "g": "Crossroads Center",
        "s": "351 Loucks Road",
        "al": "York",
        "am": "17404",
        "an": "PA",
        "bf": 39.983467,
        "bg": -76.740204,
        "geoCodeStatus": "Success"
    },
    {
        "z": 4365,
        "g": "Gateway Avenue",
        "s": "450 Gateway Ave",
        "al": "Chambersburg",
        "am": "17201",
        "an": "PA",
        "bf": 39.935486,
        "bg": -77.633023,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 4241,
        "g": "Galleria Mall",
        "s": "2899 Whiteford Rd",
        "al": "York",
        "am": "",
        "an": "PA",
        "bf": 39.986897,
        "bg": -76.67707,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2099,
        "g": "WS STAL Saint Albans",
        "s": "1443 Maccorkle AveWV",
        "al": "St Albans",
        "am": "25177",
        "an": "WV",
        "bf": 38.387684,
        "bg": -81.821075,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2394,
        "g": "WS HNTN 3rd Avenue",
        "s": "1443 MacCorkle Ave",
        "al": "Saint Albans",
        "am": "",
        "an": "WV",
        "bf": 38.387684,
        "bg": -81.821075,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2113,
        "g": "SO LNBG Wards Road",
        "s": "5508 Fort Ave Suite A",
        "al": "Lynchburg",
        "am": "",
        "an": "VA",
        "bf": 37.375298,
        "bg": -79.18722,
        "geoCodeStatus": "Success"
    },
    {
        "z": 995,
        "g": "Newberry Commons",
        "s": "30 Newberry Commons",
        "al": "Etters",
        "am": "17319",
        "an": "PA",
        "bf": 40.157702,
        "bg": -76.821685,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 1820,
        "g": "Cedar Crest",
        "s": "1784 Quentin Road",
        "al": "Lebanon",
        "am": "17042",
        "an": "PA",
        "bf": 40.31207,
        "bg": -76.42478,
        "geoCodeStatus": "Success"
    },
    {
        "z": 3994,
        "g": "SO CHVL Seminole Trail",
        "s": "1240-B Seminole Trail",
        "al": "CHARLOTESVILLE",
        "am": "",
        "an": "VA",
        "bf": 38.070683,
        "bg": -78.48404,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2585,
        "g": "WS CHTN River Walk",
        "s": "21 River Walk Mall",
        "al": "Charleston",
        "am": "",
        "an": "WV",
        "bf": 38.363827,
        "bg": -81.713615,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2155,
        "g": "WS BKHN Buckhannon Main",
        "s": "47 E. Main Street",
        "al": "Buckhannon",
        "am": "",
        "an": "WV",
        "bf": 38.99418,
        "bg": -80.22821,
        "geoCodeStatus": "Success"
    },
    {
        "z": 1830,
        "g": "WS MGTN Suncrest Centre",
        "s": "1060 Suncrest Towne Centre Dr.",
        "al": "Morgantown",
        "am": "",
        "an": "WV",
        "bf": 39.652463,
        "bg": -79.943133,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 2781,
        "g": "WS CHTN Southridge Center",
        "s": "2820 Mountaineer Rd",
        "al": "Charleston",
        "am": "",
        "an": "WV",
        "bf": 38.320835,
        "bg": -81.711494,
        "geoCodeStatus": "Success"
    },
    {
        "z": 3941,
        "g": "WS CHTN Charleston Center",
        "s": "2045 Charleston Town Center",
        "al": "Charleston",
        "am": "",
        "an": "WV",
        "bf": 38.35278,
        "bg": -81.638119,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 2905,
        "g": "WS BLFD Mercer Mall",
        "s": "US HWY 460 RT 25, Space 207 Mercer Mall",
        "al": "Bluefield",
        "am": "",
        "an": "WV",
        "bf": 37.295593,
        "bg": -81.168517,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 3804,
        "g": "SO WNBR Waynesboro Main",
        "s": "2704 West  Main Street",
        "al": "Waynesboro",
        "am": "",
        "an": "VA",
        "bf": 38.080704,
        "bg": -78.92536,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2945,
        "g": "SO DNVL Coleman Marketplace",
        "s": "2704 West  Main Street",
        "al": "Waynesboro",
        "am": "",
        "an": "VA",
        "bf": 38.080405,
        "bg": -78.925805,
    },
    {
        "z": 4438,
        "g": "Woodstock Main",
        "s": "920 S Main St",
        "al": "Woodstock",
        "am": "22664",
        "an": "VA",
        "bf": 38.86756,
        "bg": -78.51746,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2987,
        "g": "WS BKLY Beckley Plaza",
        "s": "316 Beckley Plaza",
        "al": "Beckley",
        "am": "",
        "an": "WV",
        "bf": 37.811886,
        "bg": -81.183426,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2937,
        "g": "Colonial Commons",
        "s": "3905 Union Deposit Rd",
        "al": "Harrisburg",
        "am": "17110",
        "an": "PA",
        "bf": 40.278366,
        "bg": -76.82483,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2142,
        "g": "WS WTHL Middletown Mall",
        "s": "9640 Mall Loop Rd",
        "al": "White Hall",
        "am": "26554",
        "an": "WV",
        "bf": 39.427744,
        "bg": -80.185809,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 1897,
        "g": "WS BRVL Thundering Herd",
        "s": "2064 Thundering Herd Dr",
        "al": "Barboursville",
        "am": "",
        "an": "WV",
        "bf": 38.420844,
        "bg": -82.284795,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 2124,
        "g": "SO RNKE Bonsack Square",
        "s": "3940 Valley Gateway Blvd Suite 3",
        "al": "Roanoke",
        "am": "",
        "an": "VA",
        "bf": 37.314262,
        "bg": -79.879902,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 787,
        "g": "SO CVTN Riverbend",
        "s": "319 Thacker Avenue",
        "al": "Covington",
        "am": "",
        "an": "VA",
        "bf": 37.768906,
        "bg": -79.989978,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 7523,
        "g": "QS HSBG Harrisonburg Crossi",
        "s": "215 Burgess Rd",
        "al": "Harrisonburg",
        "am": "22801",
        "an": "VA",
        "bf": 38.432805,
        "bg": -78.853609,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 1729,
        "g": "WS LWBG Gateway Boulevard",
        "s": "259 Gateway Dr",
        "al": "Lewisburg",
        "am": "17837",
        "an": "WV",
        "bf": 37.811046,
        "bg": -80.433542,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 2444,
        "g": "WS HRCN Teays Valley",
        "s": "4120 WV-34",
        "al": "Hurricane",
        "am": "25526",
        "an": "WV",
        "bf": 38.431606,
        "bg": -82.023997,
        "geoCodeStatus": "Failure"
    },
    {
        "z": 3242,
        "g": "SO STNT Staunton 250",
        "s": "1028 Richmond Road, Suite 103",
        "al": "Staunton",
        "am": "",
        "an": "VA",
        "bf": 38.136696,
        "bg": -79.04565,
        "geoCodeStatus": "Success"
    },
    {
        "z": 2994,
        "g": "SO RNKE Roanoke Mall",
        "s": "4822 Valley View Blvd NW",
        "al": "Roanoke",
        "am": "",
        "an": "VA",
        "bf": 37.305031,
        "bg": -79.962287,
        "geoCodeStatus": "Failure"
    }
        ]
    }]
}

};
