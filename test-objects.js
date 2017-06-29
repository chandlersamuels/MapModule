
var testObjects =
	{
		"1-slippy-discrete": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "slippy",
						"defaultMapFace": "aggregate",
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
							"State": "NY",
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
		    "data": [{
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
		    }]
		}
	};
