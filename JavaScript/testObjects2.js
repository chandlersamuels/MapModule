
var testObjects =
	{
		"1-slippy-discrete": {
		    "vizualizationConfiguration": {
		        "slippy": {
		            "defaultLatitude": 37.4316,
		            "defaultLongitude": -78.6569,
		            "zoomLevel": 6,
		            "tileType": "Open Street Maps",
		            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
		        },
		        "geographyBoundariesFlag": true,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
		            "geoJsonUrl": "Maps/4StateMap/shentelfourstates.geojson"
		        },
		        "discretes": [{
								"continousFlag":false
		            "colorScheme": "Paired",
		            "latColumn": "LatitudeLocation",
		            "longColumn": "LongitudeLocation",
		            "categoryFlag": true,
		            "magnitudeFlag": false,
		            "displayOptions": "none",
		            "attributeColumns": {
		                "category": "Make",
		                "magnitude": "Price",
		                "label": "VIN",
		                "additional": [
		                    "Make",
		                    "Model"
		                ]
		            }
		        }]
		    },
		    "dataDiscrete": [[{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Toyota",
		        "Model": "WRX STI",
		        "Year": "5107",
		        "Price": "1938",
		        "LatitudeLocation": 40.2732 ,
						"LongitudeLocation": -76.8867
		    }, {
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Subaru",
		        "Model": "WRX STI",
		        "Year": "2107",
		        "Price": "6938",
		        "LatitudeLocation": 40.0000 ,
						"LongitudeLocation": -76.7000
		    }]]
		},
		"1-slippy-discrete-two": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "slippy",
						"defaultMapFace": "discrete",
		        "slippy": {
		            "defaultLatitude": 37.4316,
		            "defaultLongitude": -78.6569,
		            "zoomLevel": 6,
		            "tileType": "Open Street Maps",
		            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
		        },
		        "geographyBoundariesFlag": true,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
		            "geoJsonUrl": "Maps/USbyState/USMap.geojson"
		        },
		        "discretes": [{
		            "colorScheme": "Paired",
		            "latColumn": "lat",
		            "longColumn": "long",
		            "categoryFlag": true,
		            "magnitudeFlag": true,
		            "displayOptions": "none",
		            "attributeColumns": {
		                "category": "Type",
		                "magnitude": "Revenue",
		                "label": "Ticket",
		                "additional": [
		                    "Ticket",
		                    "Type"
		                ]
		            }
		        }]
		    },
		    "data": [
                        {"Ticket":"498716","Type":"Network","long":-80.402131,"lat":37.130387,"Revenue":1111},
                        {"Ticket":"498717","Type":"Network","long":-80.576964,"lat":37.146625,"Revenue":1111},
                        {"Ticket":"498718","Type":"Network","long":-80.424182,"lat":37.135182,"Revenue":1111},
                        {"Ticket":"498719","Type":"Cable","long":-79.075052,"lat":37.275092,"Revenue":1111},
                        {"Ticket":"498720","Type":"Network-Res DSL","long":-78.752936,"lat":38.820019,"Revenue":1111},
                        {"Ticket":"498721","Type":"VOIP-Res-ShenTel Cable","long":-80.478879,"lat":39.015119,"Revenue":1111},
                        {"Ticket":"498722","Type":"Prospect Account","long":-81.236414,"lat":36.899211,"Revenue":1111},
                        {"Ticket":"498723","Type":"VOIP-Res-ShenTel Cable","long":-79.381601,"lat":39.401738,"Revenue":1111},
                        {"Ticket":"498726","Type":"Network - Business Cust","long":-80.417739,"lat":37.131102,"Revenue":1111},
                        {"Ticket":"498727","Type":"Prospect Account","long":-79.270755,"lat":37.296991,"Revenue":1111},
                        {"Ticket":"498728","Type":"Network-Res DSL","long":-78.594149,"lat":38.808933,"Revenue":13111},
                        {"Ticket":"498731","Type":"Network","long":-78.833646,"lat":37.363566,"Revenue":11211},
                        {"Ticket":"500806","Type":"VOIP-Res-ShenTel Cable","long":-79.620919,"lat":37.002124,"Revenue":11111}
                     ]
		},
		"2-slippy-area": {
		    "vizualizationConfiguration": {
		        "slippy": {
		            "defaultLatitude": 37.4316,
		            "defaultLongitude": -78.6569,
		            "zoomLevel": 4,
		            "tileType": "Open Street Maps",
		            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
		        },
		        "geographyBoundariesFlag": true,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "blah/blah/blah/USStates.topojson",
								"geoJsonUrl": "Maps/USbyState/USMap.geojson"
		        },
		        "discretes": [],
		        "sumAreas": {
		            "colorScheme": "Greens",
		            "colorRange": 3,
								"PopupInfoName": "NAME",
							  "PopupInfoName": "Sales",
		            "colorSchemeAdditional": {
		                "colorSchemeSplitFlag": true,
		                "breakpoint": 0,
		                "positiveColorScheme": "Greens",
		                "negativeColorScheme": "Reds"
		            },
		            "mapField": "STUSPS",
		            "mapColumns": [
		                "State",
		                "County"
		            ],
		            "valueColumn": "Sales",
		            "attributeColumns": []
		        }
		    },
		    "dataArea": [
		        {
		            "State": "AL",
		            "Sales": -10
		        },
		        {
		            "State": "FL",
		            "Sales": 5
		        },
		        {
		            "State": "IL",
		            "Sales": -20
		        },
						{
							 "State": "PA",
							 "Sales": 40
					 },
					 {
							"State": "TX",
							"Sales": 23
					}
		    ]
		},
		"3-svg-area": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "svg",
						"defaultMapFace": "sumByArea",
		        "svg": {
							"jsonType":"GeometryCollection"
						},
		        "slippy": {},
		        "geographyBoundariesFlag": true,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
		            "geoJsonUrl": "blah/blah/blah/USStates.geojson"
		        },
		        "discretes": [],
		        "sumAreas": {
		            "colorScheme": "Greens",
		            "colorRange": 9,
		            "colorSchemeAdditional": {
		                "colorSchemeSplitFlag": false,
		                "breakpoint": 0,
		                "positiveColorScheme": "Greens",
		                "negativeColorScheme": "Reds"
		            },
		            "mapField": "STUSPS",
		            "mapColumns": [
		                "State",
		                "County"
		            ],
		            "valueColumn": "Sales",
		            "attributeColumns": []
		        }
		    },
		    "data": [
					{
							"State": "AL",
							"Sales": "300"
					},
					{
							"State": "PA",
							"Sales": "-150"
					},
					{
							"State": "TX",
							"Sales": "105"
					},
		        {
		            "State": "MD",
		            "Sales": "670"
		        },
		        {
		            "State": "FL",
		            "Sales": "-450"
		        },
		        {
		            "State": "IL",
		            "Sales": "-530"
		        }
		    ]
		},
		"4-svg-discrete": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "svg",
						"defaultMapFace": "discrete",
		        "slippy": {
		            "defaultLatitude": 37.4316,
		            "defaultLongitude": -78.6569,
		            "zoomLevel": 6,
		            "tileType": "Open Street Maps",
		            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
		        },
		        "geographyBoundariesFlag": true,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
		            "geoJsonUrl": "Maps/4StateMap/shentelfourstates.geojson"
		        },
		        "discretes": [{
								"minBubbleSize": 3,
								"maxBubbleSize": 15,
		            "colorScheme": "Green",
		            "latColumn": "LatitudeLocation",
		            "longColumn": "LongitudeLocation",
		            "categoryFlag": true,
		            "magnitudeFlag": true,
		            "displayOptions": "none",
		            "attributeColumns": {
		                "category": "Make",
		                "magnitude": "Price",
		                "label": "VIN",
		                "additional": [
		                    "Make",
		                    "Model"
		                ]
		            }
		        }]
		    },
		    "data": [[{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Toyota",
		        "Model": "WRX STI",
		        "Year": "5107",
		        "Price": "212345",
		        "LatitudeLocation": 40.0150 ,
						"LongitudeLocation": -105.2705
		    },
				{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Lexus",
		        "Model": "WRX STI",
		        "Year": "5107",
		        "Price": "50723",
		        "LatitudeLocation": 40.0150 ,
						"LongitudeLocation": -104.2705
		    },
				{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Subaru",
		        "Model": "WRX STI",
		        "Year": "2107",
		        "Price": "37123",
		        "LatitudeLocation": 40.0150 ,
						"LongitudeLocation": -76.7000
		    }]]
		}
	};
