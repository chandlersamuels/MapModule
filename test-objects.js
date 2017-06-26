
var testObjects =
	{
		"1-slippy-discrete": {
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
		            "topoJsonUrl": "blah/blah/blah/USStates.topojson",
		            "geoJsonUrl": "Maps/4StateMap/shentelfourstates.geojson"
		        },
		        "discretes": [{
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
		    "data": [{
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
		    }]
		},
		"2-slippy-area": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "slippy",
						"defaultMapFace": "sumByArea",
		        "slippy": {
		            "defaultLatitude": "",
		            "defaultLongitude": "",
		            "zoomLevel": 6,
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
		    "data": [
		        {
		            "State": "AL",
		            "Sales": -10
		        },
		        {
		            "State": "FL",
		            "Sales": -5
		        },
		        {
		            "State": "IL",
		            "Sales": 20
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
		    "vizualizationConifugration": {
		        "defaultMapType": "svg",
		        "svg": {},
		        "slippy": {},
		        "geographyBoundariesFlag": true,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "blah/blah/blah/USStates.topojson",
		            "geoJsonUrl": "blah/blah/blah/USStates.geojson"
		        },
		        "discretes": [],
		        "sumAreas": {
		            "colorScheme": "Paired",
		            "colorRange": 9,
		            "colorSchemeAdditional": {
		                "colorSchemeSplitFlag": false,
		                "breakpoint": 0,
		                "positiveColorScheme": "Greens",
		                "negativeColorScheme": "Reds"
		            },
		            "mapField": "STATEFS",
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
		            "State": "MD",
		            "Sales": "549957.88"
		        },
		        {
		            "State": "FL",
		            "Sales": "211563.2"
		        },
		        {
		            "State": "IL",
		            "Sales": "186942.95"
		        }
		    ]
		}
	};
