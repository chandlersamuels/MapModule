
var testObjects =
	{
		"1-slippy-discrete": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "jusa",
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
								"continousFlag": true,
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
		    "discreteData": [[{
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
		        "slippy": {
		            "defaultLatitude": 37.4316,
		            "defaultLongitude": -78.6569,
		            "zoomLevel": 6,
		            "tileType": "Open Street Maps",
		            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
		        },
		        "geographyBoundariesFlag": false,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
		            "geoJsonUrl": "Maps/USbyState/USMap.geojson"
		        },
		        "discretes": [{
								"continuousFlag": false,
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
		        },
						{
								"continuousFlag": false,
								"colorScheme": "Blue",
								"latColumn": "lat",
								"longColumn": "long",
								"categoryFlag": false,
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
							}
						]
		    },
		    "discreteData": [[
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
                     ],
										 [
											{"Ticket":"498716","Type":"Network","long":-81.402131,"lat":38.130387,"Revenue":2111},
											{"Ticket":"498717","Type":"Network","long":-81.576964,"lat":38.146625,"Revenue":2111},
											{"Ticket":"498718","Type":"Network","long":-81.424182,"lat":38.135182,"Revenue":2111},
											{"Ticket":"498719","Type":"Cable","long":-70.075052,"lat":38.275092,"Revenue":2111},
											{"Ticket":"498720","Type":"Network-Res DSL","long":-81.752936,"lat":37.820019,"Revenue":2111},
											{"Ticket":"498721","Type":"VOIP-Res-ShenTel Cable","long":-81.478879,"lat":38.015119,"Revenue":2111},
											{"Ticket":"498722","Type":"Prospect Account","long":-81.236414,"lat":36.899211,"Revenue":2111},
											{"Ticket":"498723","Type":"VOIP-Res-ShenTel Cable","long":-81.381601,"lat":39.401738,"Revenue":2111},
											{"Ticket":"498726","Type":"Network - Business Cust","long":-80.417739,"lat":37.131102,"Revenue":2111},
											{"Ticket":"498727","Type":"Prospect Account","long":-81.270755,"lat":37.296991,"Revenue":2111},
											{"Ticket":"498728","Type":"Network-Res DSL","long":-81.594149,"lat":38.808933,"Revenue":23111},
											{"Ticket":"498731","Type":"Network","long":-81.833646,"lat":37.363566,"Revenue":21211},
											{"Ticket":"500806","Type":"VOIP-Res-ShenTel Cable","long":-81.620919,"lat":37.002124,"Revenue":21111}
										]]
		},
		"2-slippy-area": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "slippy",
						"defaultMapFace": "sumByArea",
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
		            "colorScheme": "Greys",
		            "colorRange": 3,
								"PopupInfoName": "NAME",
							  "PopupInfoName": "Sales",
		            "colorSchemeAdditional": {
		                "colorSchemeSplitFlag": true,
		                "breakpoint": 0,
		                "positiveColorScheme": "Dark2",
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
		            "Sales": 5
		        },
		        {
		            "State": "IL",
		            "Sales": -20
		        },
						{
							 "State": "PA",
							 "Sales": -40
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
		            "colorRange": 3,
								"popupTextDescription":" Total Sales: ",
		            "colorSchemeAdditional": {
		                "colorSchemeSplitFlag": true,
		                "breakpoint": 0,
		                "positiveColorScheme": "PRGn",
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
							"Sales": "1300"
					},
					{
							"State": "PA",
							"Sales": "-1210"
					},
					{
							"State": "TX",
							"Sales": "-36"
					},
		        {
		            "State": "MD",
		            "Sales": "70"
		        },
		        {
		            "State": "FL",
		            "Sales": "450"
		        },
		        {
		            "State": "IL",
		            "Sales": "530"
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
		            "categoryFlag": false,
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
		        },
						{
								"minBubbleSize": 3,
								"maxBubbleSize": 15,
		            "colorScheme": "Red",
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
		        }
					]
		    },
		    "discreteData": [[{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Toyota",
		        "Model": "WRX STI",
		        "Year": "5107",
		        "Price": "212345",
		        "LatitudeLocation": 30.0150 ,
						"LongitudeLocation": -105.2705
		    },
				{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Lexus",
		        "Model": "WRX STI",
		        "Year": "5107",
		        "Price": "50723",
		        "LatitudeLocation": 32.0150 ,
						"LongitudeLocation": -104.2705
		    },
				{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Subaru",
		        "Model": "WRX STI",
		        "Year": "2107",
		        "Price": "37123",
		        "LatitudeLocation": 36.0150 ,
						"LongitudeLocation": -76.7000
		    }],
				[{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Porsche",
		        "Model": "911",
		        "Year": "5107",
		        "Price": "212345",
		        "LatitudeLocation": 40.0150 ,
						"LongitudeLocation": -105.2705
		    },
				{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Ferarri",
		        "Model": "Enzo",
		        "Year": "5107",
		        "Price": "50723",
		        "LatitudeLocation": 34.2672 ,
						"LongitudeLocation": -97.7431
		    },
				{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Jaguar",
		        "Model": "aborith",
		        "Year": "2107",
		        "Price": "37123",
		        "LatitudeLocation": 41.0150 ,
						"LongitudeLocation": -76.7000
		    },{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Bugatti",
		        "Model": "Veyron",
		        "Year": "2107",
		        "Price": "37123",
		        "LatitudeLocation": 43.0150 ,
						"LongitudeLocation": -76.7000
		    },{
		        "Dealer": "Barbee's Freeway",
		        "VIN": "228388288",
		        "Make": "Koeniseg",
		        "Model": "Veyron",
		        "Year": "2107",
		        "Price": "37123",
		        "LatitudeLocation": 34.2672 ,
						"LongitudeLocation": -97.7431
		    }]
			]
		},

		"5-slippy-area-discrete": {
		    "vizualizationConfiguration": {
		        "defaultMapType": "slippy",
						"defaultMapFace": "sumByArea",
		        "slippy": {
		            "defaultLatitude": 37.4316,
		            "defaultLongitude": -78.6569,
		            "zoomLevel": 4,
		            "tileType": "Open Street Maps",
		            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
		        },
		        "geographyBoundariesFlag": false,
		        "geographyBoundaries": {
		            "mapName": "US Map by State",
		            "topoJsonUrl": "blah/blah/blah/USStates.topojson",
								"geoJsonUrl": "Maps/USbyState/USMap.geojson"
		        },
		       	"discretes": [{
												"continuousFlag": false,
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
						        }],

		        "sumAreas": {
		            "colorScheme": "Greys",
		            "colorRange": 3,
								"PopupInfoName": "NAME",
							  "PopupInfoName": "Sales",
		            "colorSchemeAdditional": {
		                "colorSchemeSplitFlag": false,
		                "breakpoint": 0,
		                "positiveColorScheme": "Dark2",
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

				"discreteData": [[
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
									 ],

		    "data": [
		        {
		            "State": "AL",
		            "Sales": 10
		        },
		        {
		            "State": "FL",
		            "Sales": 5
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

		"6-svg-area-discrete":{
			"vizualizationConfiguration": {
					"defaultMapType": "svg",
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
					"discretes": [{
							"minBubbleSize": 3,
							"maxBubbleSize": 15,
							"colorScheme": "Red",
							"latColumn": "LatitudeLocation",
							"longColumn": "LongitudeLocation",
							"categoryFlag": false,
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
					}],

					"sumAreas": {
							"colorScheme": "Greens",
							"colorRange": 3,
							"popupTextDescription":" Total Sales: ",
							"colorSchemeAdditional": {
									"colorSchemeSplitFlag": true,
									"breakpoint": 0,
									"positiveColorScheme": "PRGn",
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

			"discreteData": [[{
					"Dealer": "Barbee's Freeway",
					"VIN": "228388288",
					"Make": "Toyota",
					"Model": "WRX STI",
					"Year": "5107",
					"Price": "212345",
					"LatitudeLocation": 39.5501 ,
					"LongitudeLocation": -105.7821
			},
			{
					"Dealer": "Barbee's Freeway",
					"VIN": "228388288",
					"Make": "Lexus",
					"Model": "WRX STI",
					"Year": "5107",
					"Price": "50723",
					"LatitudeLocation": 32.7157 ,
					"LongitudeLocation": -117.1611
			},
			{
					"Dealer": "Barbee's Freeway",
					"VIN": "228388288",
					"Make": "Subaru",
					"Model": "WRX STI",
					"Year": "2107",
					"Price": "37123",
					"LatitudeLocation": 45.5231 ,
					"LongitudeLocation": -122.6765
			}]],

			"data": [
				{
						"State": "AL",
						"Sales": "1300"
				},
				{
						"State": "PA",
						"Sales": "-1210"
				},
				{
						"State": "TX",
						"Sales": "-36"
				},
					{
							"State": "MD",
							"Sales": "70"
					},
					{
							"State": "FL",
							"Sales": "450"
					},
					{
							"State": "IL",
							"Sales": "530"
					}
			]

		}

	};
