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

		},

		"2-slippy-area-new": {
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
						"legend": {
							"legendFlag": true,
							"legendTitle": "Total Sales",
							"legend2Title": "Total Sales",
							"legendPosition": "bottomleft",
							"legend2Position": "bottomright"
						},
            "discretes": [],
            "sumAreas": {
                "colorScheme": "Greens",
                "colorRange": 3,
                "PopupInfoName": "NAME",
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
                "valueColumn": "Count",
                "attributeColumns": []
            }
        },
        "dataConfiguration": {
            "columns": [{
                "id": 1,
                "columnType": " total sales",
                "dbColumnName": "WOBILLINGSTATE",
                "dbColumnTitle": " Billing State: ",
                "title": "Count",//Make Title
                "filter": {},
                "target": "",
                "targetOperand": "",
                "tolerance": "",
                "numberFormat": "1,234",
                "dbColumnNameSummed": "",
                "endOfPivotColumn": true
            }],
            "anchorColumn": {
                "title": " Billing State (Order)",
                "frequency": "Daily",
                "dbColumnName": "WOBILLINGSTATE",
                "dbColumnTitle": " Billing State (Order)",
                "filter": {"filter": ""},
                "filterOwnerUserId": "",
                "showAll": true
            },
            "collector": "Sales Transactions Current",
            "snapshotConfig": {
                "type": "specific one",
                "snapshotId": 19801
            }
        },
        "data": {"pivot": [{ //...data.pivot[0].data[0][1]
            "id": 1,
            "data": [
                [
                    "2017-06-25T23:59:59",
                    "NJ",
                    "-56",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MN",
                    "-129",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WV",
                    "-16",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NUL",
                    "532",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "OK",
                    "11",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AK",
                    "4",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "SD",
                    "1",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "CA",
                    "478",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ND",
                    "23",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AL",
                    "114",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WY",
                    "4",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WI",
                    "63",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "VA",
                    "67",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MA",
                    "40",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NM",
                    "10",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AR",
                    "6",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MD",
                    "1542",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "OH",
                    "290",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "TN",
                    "25",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NE",
                    "14",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MI",
                    "72",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "GA",
                    "125",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ON",
                    "8",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "IL",
                    "639",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "KS",
                    "14",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "UT",
                    "9",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ME",
                    "28",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NH",
                    "2",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MB",
                    "1",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "DC",
                    "278",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NY",
                    "135",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "CO",
                    "42",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "IA",
                    "412",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "DE",
                    "12",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "SC",
                    "10",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MT",
                    "5",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "RI",
                    "8",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "QC",
                    "2",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MO",
                    "29",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NV",
                    "21",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "IN",
                    "31",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "VT",
                    "2",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "LA",
                    "12",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "TX",
                    "193",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "FL",
                    "571",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WA",
                    "16",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "HI",
                    "6",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MS",
                    "8",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "CT",
                    "16",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ID",
                    "1",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "PA",
                    "219",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "KY",
                    "42",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "OR",
                    "3",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AZ",
                    "68",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NC",
                    "108",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AB",
                    "5",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "BC",
                    "3",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "SK",
                    "1",
                    19801,
                    "A",
                    0
                ]
            ],
            "statistics": {
                "total": "6582",
                "minimum": "1",
                "maximum": "1542",
                "nbritems": "58",
                "average": "113.48",
                "median": "18.5"
            }
        }]}
    },

		"3-svg-area-new": {
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
					"legend": {
						"legendFlag" : true,
						"legendText": "Total Sales",
						"legendText2": "Total Sales",
						"legendPosition": "right",
						"legendPosition2": "bottomright"
					},
					"discretes": [],
					"sumAreas": {
							"colorScheme": "Greens",
							"colorRange": 6,
							"popupTextDescription":" Total Sales: ",
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
        "dataConfiguration": {
            "columns": [{
                "id": 1,
                "columnType": " total sales",
                "dbColumnName": "WOBILLINGSTATE",
                "dbColumnTitle": " Billing State: ",
                "title": "Count",//Make Title
                "filter": {},
                "target": "",
                "targetOperand": "",
                "tolerance": "",
                "numberFormat": "1,234",
                "dbColumnNameSummed": "",
                "endOfPivotColumn": true
            }],
            "anchorColumn": {
                "title": " Billing State (Order)",
                "frequency": "Daily",
                "dbColumnName": "WOBILLINGSTATE",
                "dbColumnTitle": " Billing State (Order)",
                "filter": {"filter": ""},
                "filterOwnerUserId": "",
                "showAll": true
            },
            "collector": "Sales Transactions Current",
            "snapshotConfig": {
                "type": "specific one",
                "snapshotId": 19801
            }
        },
        "data": {"pivot": [{ //...data.pivot[0].data[0][1]
            "id": 1,
            "data": [
                [
                    "2017-06-25T23:59:59",
                    "NJ",
                    "-56",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MN",
                    "-129",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WV",
                    "-16",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NUL",
                    "532",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "OK",
                    "11",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AK",
                    "4",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "SD",
                    "1",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "CA",
                    "478",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ND",
                    "23",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AL",
                    "114",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WY",
                    "4",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WI",
                    "63",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "VA",
                    "67",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MA",
                    "40",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NM",
                    "10",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AR",
                    "6",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MD",
                    "1542",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "OH",
                    "290",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "TN",
                    "25",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NE",
                    "14",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MI",
                    "72",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "GA",
                    "125",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ON",
                    "8",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "IL",
                    "639",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "KS",
                    "14",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "UT",
                    "9",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ME",
                    "28",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NH",
                    "2",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MB",
                    "1",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "DC",
                    "278",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NY",
                    "135",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "CO",
                    "42",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "IA",
                    "412",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "DE",
                    "12",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "SC",
                    "10",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MT",
                    "5",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "RI",
                    "8",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "QC",
                    "2",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MO",
                    "29",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NV",
                    "21",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "IN",
                    "31",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "VT",
                    "2",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "LA",
                    "12",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "TX",
                    "193",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "FL",
                    "571",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "WA",
                    "16",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "HI",
                    "6",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "MS",
                    "8",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "CT",
                    "16",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "ID",
                    "1",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "PA",
                    "219",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "KY",
                    "42",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "OR",
                    "3",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AZ",
                    "68",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "NC",
                    "108",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "AB",
                    "5",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "BC",
                    "3",
                    19801,
                    "A",
                    0
                ],
                [
                    "2017-06-25T23:59:59",
                    "SK",
                    "1",
                    19801,
                    "A",
                    0
                ]
            ],
            "statistics": {
                "total": "6582",
                "minimum": "1",
                "maximum": "1542",
                "nbritems": "58",
                "average": "113.48",
                "median": "18.5"
            }
        }]}
    },


		// "7-test-object":{
		// 	"vizualizationConfiguration": {
		// 			"defaultMapType": "", //Can only be either svg or slippy
		// 			"svg": {
		// 				"jsonType":"GeometryCollection"
		// 			},
		// 			"slippy": {
		// 				"defaultLatitude": , //example: 32.3123
		// 				"defaultLongitude": , //example: -78.8231
		// 				"zoomLevel": , //level 3 to 7
		// 				"tileType": "Open Street Maps",
		// 				"tileUrl": "" //open street maps tile URL
		// 			},
		// 			"geographyBoundariesFlag": , //true or false to put a geographic boundry on the canvas for slippy
		// 			"geographyBoundaries": {
		// 					"mapName": "", //Any Map title works here
		// 					"topoJsonUrl": "", //accurate path to topojson
		// 					"geoJsonUrl": "" //accurate path to GeoJsonURL
		// 					//example Maps/USbyState/USMap.geojson or Maps/USbyState/USMap.topojson
		// 			},
		//
		// 			"discretes": [{ //If no discretes are desired just use "discretes": [],
		// 					"minBubbleSize": , //recommended 3
		// 					"maxBubbleSize": , //recommended 15
		// 					"colorScheme": "", //colorBrewer scale example: Red
		// 					"latColumn": "", //use key in dataobject that represents LatitudeLocation
		// 					"longColumn": "", //use key in dataobject that represents LatitudeLocation
		// 					"categoryFlag": , //true or false to color bubbles differently based on attribute
		// 					"magnitudeFlag": , //true or false to resize bubbles differently based on attribute
		// 					"displayOptions": "none", //random???
		// 					"attributeColumns": {
		// 							"category": "Make", //Use attribute you want to use to color the bubbles Example: A car's Make
		// 							"magnitude": "Price", // Use attribute you want to use to resize the bubbles to give a sense of scale.
		// 							"label": "VIN", //attribute to title the popup window
		// 							"additional": [
		// 									//include additional attributes you might want to add like
		// 									// "make",
		// 									//"model"
		// 							]
		// 					}
		// 			}],
		//
		// 			"sumAreas": {
		// 					"colorScheme": "", //colorbrewer color scale
		// 					"colorRange": , //recommend 3, 6, 9
		// 					"popupTextDescription":" ",// popupTextDescription
		// 					"colorSchemeAdditional": {
		// 							"colorSchemeSplitFlag": , // true or false - used to demonstrate varying data Example: net rgu
		// 							"breakpoint": , //value you want to split the graph to use colorSchemeSplitFlag
		// 							"positiveColorScheme": "", //colorbrewer color schemes
		// 							"negativeColorScheme": "" //colorbrewer color schemes
		// 					},
		// 					"mapField": "STUSPS", //***IMPORTANT*** USBYSTATE MAP uses STUSPS
		// 					"mapColumns": [
		// 						//used to identify data in the data object
		// 							// "State",
		// 							// "County"
		// 					],
		// 					"valueColumn": "", //attribute you want to use to color the geographic areas
		// 					"attributeColumns": []
		// 			}
		// 	},
		//
		// }
		"1-slippy-discrete-new": {
    "vizualizationConfiguration": {
        "defaultMapType": "slippy",
        "defaultMapFace": "discrete",
        "slippy": {
            "defaultLatitude": 40.558034, //default to altoona pennsylvania
            "defaultLongitude": -78.478437,
            "zoomLevel": 10,
            "tileType": "Open Street Maps",
            "tileUrl": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        },
        "geographyBoundariesFlag": false,
        "geographyBoundaries": {
            "mapName": "US Map by State",
            "topoJsonUrl": "Maps/USbyState/USMap.topojson",
            "geoJsonUrl": "Maps/4StateMap/shentelfourstates.geojson"
        },
				"legend":{
					"legendFlag" : true,
					"legendTitle" : "Service Type",
					"legendPosition" : "bottomleft"
				},
        "discretes": [{
            "continousFlag": false,
            "colorScheme": "Red",
            "latColumn": "OLAT",
            "longColumn": "OLON",
						"shapeForm": "rectangle",
            "categoryFlag": true,
            "magnitudeFlag": true,
            "displayOptions": "none",
            "attributeColumns": {
                "category": "OMODELTYPE",
                "magnitude": "OREVENUE",
                "label": "OSUBSCRIBERNAME",
                "additional": [
										"OSUBSCRIBERID",
                    "OBILLLINE1ST",
                    "OBILLCITY",
                    "OBILLSTATE",
                    "OSERVICEPLANDESC"
                ]
            }
        }]
    },
    "discreteData":[{
        "columns": [
						{
								"field": "z",
								"title": "Handset Revenue",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OREVENUE",
								"type": "character"
						},
            {
                "field": "g",
                "title": "Subscriber ID",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OSUBSCRIBERID",
                "type": "character"
            },
            {
                "field": "s", //this will help index in the feild below
                "title": "Subscriber Name",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OSUBSCRIBERNAME",//label of the point
                "type": "character"
            },
            {
                "field": "al",
                "title": "Bill Line 1st",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OBILLLINE1ST",
                "type": "character"
            },
            {
                "field": "am",
                "title": "Bill Line 2nd",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OBILLLINE2ND",
                "type": "character"
            },
            {
                "field": "an",
                "title": "Bill City",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OBILLCITY",
                "type": "character"
            },
            {
                "field": "ao",
                "title": "Bill State",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OBILLSTATE",
                "type": "character"
            },
            {
                "field": "ap",
                "title": "Bill ZipCode",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OBILLZIPCODE",
                "type": "character"
            },
            {
                "field": "aw",
                "title": "Model Type",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OMODELTYPE",
                "type": "character"
            },
            {
                "field": "bd",
                "title": "Service Plan",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OSERVICEPLAN",
                "type": "character"
            },
            {
                "field": "be",
                "title": "Service Plan Desc",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OSERVICEPLANDESC",
                "type": "character"
            },
            {
                "field": "bf",
                "title": "Latitude",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OLAT",
                "type": "character"
            },
            {
                "field": "bg",
                "title": "Longitude",
                "level": "Customer Delta Monthly - Official",
                "dbColumn": "OLON",
                "type": "character"
            }
        ],
        "rows": [
            {
								"z": "500",
                "g": "00665717121",
                "s": "CHRISTIAN HORTON",//name
                "al": "684 SICKLES CORNER BACK RD",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "Boost ZTE N9519", //
                "bd": "BSFLH30",
                "be": "$30 Unl Talk/Txt/1GB 4GLTEData",
                "bf": "-78.262605",
                "bg": "40.561890"
            },
            {
								"z": "800",
                "g": "15563518121",
                "s": "NICOLE ALTMANSOFER",
                "al": "4120 BEALE AVE",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "BST LG Tribute HD",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.422441",
                "bg": "40.484896"
            },
            {
								"z": "100",
                "g": "22517218121",
                "s": "MARCELL ELLIS",
                "al": "1411 23RD ST",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "BST Alcatel DAWN",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.41599",
                "bg": "40.510609"
            },
            {
								"z": "230",
                "g": "29511608121",
                "s": "MARQUIS ESTERLY",
                "al": "106 E BEECH CT",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "BST Samsung Galaxy J3",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.39806",
                "bg": "40.528610"
            },
            {
								"z": "300",
                "g": "29961018121",
                "s": "SHAWN BROWN",
                "al": "911 GREEN AVE",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "Boost ZTE Warp Elite",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.398161",
                "bg": "40.517328"
            },
            {
								"z": "650",
                "g": "55584118121",
                "s": "MACKENZIE JOHNSON",
                "al": "1910 15TH AVE",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "VMU LG Tribute HD",
                "bd": "VMU551LTE",
                "be": "$45 UNL w/ 10GB HiSpeed Data",
                "bf": "-78.412366",
                "bg": "40.513813"
            },
            {
								"z": "500",
                "g": "70293526121",
                "s": "CHARLES DAUGHENBAUGH",
                "al": "1904 11TH ST APT 2",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "BST Alcatel Touch Elevate",
                "bd": "BSC2LH35",
                "be": "$35 2.5GB GrowData/$30 ReBoost",
                "bf": "-78.4059",
                "bg": "40.522017"
            },
            {
								"z": "300",
                "g": "79266518121",
                "s": "JOSEPH ICKES",
                "al": "911 GREEN AVE APT 1010",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "Boost LG K3",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.398161",
                "bg": "40.517328"
            },
            {
								"z": "800",
                "g": "87851218121",
                "s": "MARY ANN SILVIAS",
                "al": "507 N 5TH ST",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "BST LG Tribute HD",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.384458",
                "bg": "40.536916"
            },
            {
								"z": "800",
                "g": "87877707121",
                "s": "DALTON SNYDER",
                "al": "411 22ND AVE FL 1",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "Boost Nokia Lumia",
                "bd": "BSFLH50",
                "be": "$50 Unl Talk/Txt/Data",
                "bf": "-78.404652",
                "bg": "40.527002"
            },
            {
								"z": "800",
                "g": "97700718121",
                "s": "MIRANDA SPARKMAN",
                "al": "517 N 3RD ST",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "VMU ZTE MAX XL",
                "bd": "VMU550LTE",
                "be": "$35 UNL w/ 5GB HiSpeed Data",
                "bf": "-78.386492",
                "bg": "40.535148"
            },
            {
								"z": "800",
                "g": "97756518121",
                "s": "CALEB STEVENS",
                "al": "1807 N 11TH AVE",
                "am": "",
                "an": "ALTOONA",
                "ao": "PA",
                "ap": "16601",
                "aw": "BST Sam Galaxy J3 Emerge",
                "bd": "BOFLH35",
                "be": "$35 Unl Talk/Txt/3GB 4GLTEData",
                "bf": "-78.380485",
                "bg": "40.552666"
            }
        ]
    }]
},
"8-svg-discrete-new": {
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
				"colorScheme": "Red",
				"latColumn": "OLAT",
				"longColumn": "OLON",
				"categoryFlag": true,
				"magnitudeFlag": true,
				"shapeForm" : "rectangle",
				"displayOptions": "none",
				"attributeColumns": {
						"category": "OMODELTYPE",
						"magnitude": "OREVENUE",
						"label": "OSUBSCRIBERNAME",
						"additional": [
							"OSUBSCRIBERID",
							"OBILLLINE1ST",
							"OBILLCITY",
							"OBILLSTATE",
							"OSERVICEPLANDESC"
						]
				}
		}],

},
"discreteData":[{
		"columns": [
				{
						"field": "z",
						"title": "Handset Revenue",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OREVENUE",
						"type": "character"
				},
				{
						"field": "g",
						"title": "Subscriber ID",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERID",
						"type": "character"
				},
				{
						"field": "s", //this will help index in the feild below
						"title": "Subscriber Name",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERNAME",//label of the point
						"type": "character"
				},
				{
						"field": "al",
						"title": "Bill Line 1st",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE1ST",
						"type": "character"
				},
				{
						"field": "am",
						"title": "Bill Line 2nd",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE2ND",
						"type": "character"
				},
				{
						"field": "an",
						"title": "Bill City",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLCITY",
						"type": "character"
				},
				{
						"field": "ao",
						"title": "Bill State",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLSTATE",
						"type": "character"
				},
				{
						"field": "ap",
						"title": "Bill ZipCode",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLZIPCODE",
						"type": "character"
				},
				{
						"field": "aw",
						"title": "Model Type",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OMODELTYPE",
						"type": "character"
				},
				{
						"field": "bd",
						"title": "Service Plan",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLAN",
						"type": "character"
				},
				{
						"field": "be",
						"title": "Service Plan Desc",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLANDESC",
						"type": "character"
				},
				{
						"field": "bf",
						"title": "Latitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLAT",
						"type": "character"
				},
				{
						"field": "bg",
						"title": "Longitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLON",
						"type": "character"
				}
		],
		"rows": [
				{
						"z": "500",
						"g": "00665717121",
						"s": "CHRISTIAN HORTON",//name
						"al": "684 SICKLES CORNER BACK RD",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE N9519", //
						"bd": "BSFLH30",
						"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
						"bf": "-78.262605",
						"bg": "40.561890"
				},
				{
						"z": "800",
						"g": "15563518121",
						"s": "NICOLE ALTMANSOFER",
						"al": "4120 BEALE AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.422441",
						"bg": "40.484896"
				},
				{
						"z": "100",
						"g": "22517218121",
						"s": "MARCELL ELLIS",
						"al": "1411 23RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel DAWN",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.41599",
						"bg": "40.510609"
				},
				{
						"z": "230",
						"g": "29511608121",
						"s": "MARQUIS ESTERLY",
						"al": "106 E BEECH CT",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Samsung Galaxy J3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.39806",
						"bg": "40.528610"
				},
				{
						"z": "300",
						"g": "29961018121",
						"s": "SHAWN BROWN",
						"al": "911 GREEN AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE Warp Elite",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "650",
						"g": "55584118121",
						"s": "MACKENZIE JOHNSON",
						"al": "1910 15TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU LG Tribute HD",
						"bd": "VMU551LTE",
						"be": "$45 UNL w/ 10GB HiSpeed Data",
						"bf": "-78.412366",
						"bg": "40.513813"
				},
				{
						"z": "500",
						"g": "70293526121",
						"s": "CHARLES DAUGHENBAUGH",
						"al": "1904 11TH ST APT 2",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel Touch Elevate",
						"bd": "BSC2LH35",
						"be": "$35 2.5GB GrowData/$30 ReBoost",
						"bf": "-78.4059",
						"bg": "40.522017"
				},
				{
						"z": "300",
						"g": "79266518121",
						"s": "JOSEPH ICKES",
						"al": "911 GREEN AVE APT 1010",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost LG K3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "800",
						"g": "87851218121",
						"s": "MARY ANN SILVIAS",
						"al": "507 N 5TH ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.384458",
						"bg": "40.536916"
				},
				{
						"z": "800",
						"g": "87877707121",
						"s": "DALTON SNYDER",
						"al": "411 22ND AVE FL 1",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost Nokia Lumia",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.404652",
						"bg": "40.527002"
				},
				{
						"z": "800",
						"g": "97700718121",
						"s": "MIRANDA SPARKMAN",
						"al": "517 N 3RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU ZTE MAX XL",
						"bd": "VMU550LTE",
						"be": "$35 UNL w/ 5GB HiSpeed Data",
						"bf": "-78.386492",
						"bg": "40.535148"
				},
				{
						"z": "800",
						"g": "97756518121",
						"s": "CALEB STEVENS",
						"al": "1807 N 11TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Sam Galaxy J3 Emerge",
						"bd": "BOFLH35",
						"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
						"bf": "-78.380485",
						"bg": "40.552666"
				}
		]
}]
},

"9-svg-discrete-new": {
	"vizualizationConfiguration": {
			"defaultMapType": "svg",
			"svg":{
				"jsonType":"GeometryCollection"
			},
			"defaultMapFace": "discrete",
			"slippy": {},
			"geographyBoundariesFlag": true,
			"geographyBoundaries": {
					"mapName": "US Map by State",
					"topoJsonUrl": "Maps/USbyState/USMap.topojson",
					"geoJsonUrl": "Maps/4StateMap/shentelfourstates.geojson"
			},
			"legend": {
				"legendFlag" : true,
				"legendText": "Total Sales",
				"legendText2": "Total Sales",
				"legendPosition": "topright",
				"legendPosition2": "bottomright"
			},
		"discretes": [{
				"minBubbleSize": 3,
				"maxBubbleSize": 15,
				"colorScheme": "Red",
				"latColumn": "OLAT",
				"longColumn": "OLON",
				"categoryFlag": true,
				"magnitudeFlag": true,
				"displayOptions": "none",
				"attributeColumns": {
						"category": "OMODELTYPE",
						"magnitude": "OREVENUE",
						"label": "OSUBSCRIBERNAME",
						"additional": [
							"OSUBSCRIBERID",
							"OBILLLINE1ST",
							"OBILLCITY",
							"OBILLSTATE",
							"OSERVICEPLANDESC"
						]
				}
		}],
		"sumAreas":{
			"colorScheme": "Greens",
			"colorRange": 3,
			"popupTextDescription":" Total Sales: ",
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

"dataConfiguration": {
		"columns": [{
				"id": 1,
				"columnType": " total sales",
				"dbColumnName": "WOBILLINGSTATE",
				"dbColumnTitle": " Billing State: ",
				"title": "Count",//Make Title
				"filter": {},
				"target": "",
				"targetOperand": "",
				"tolerance": "",
				"numberFormat": "1,234",
				"dbColumnNameSummed": "",
				"endOfPivotColumn": true
		}],
		"anchorColumn": {
				"title": " Billing State (Order)",
				"frequency": "Daily",
				"dbColumnName": "WOBILLINGSTATE",
				"dbColumnTitle": " Billing State (Order)",
				"filter": {"filter": ""},
				"filterOwnerUserId": "",
				"showAll": true
		},
		"collector": "Sales Transactions Current",
		"snapshotConfig": {
				"type": "specific one",
				"snapshotId": 19801
		}
},

"data": {"pivot": [{ //...data.pivot[0].data[0][1]
		"id": 1,
		"data": [
				[
						"2017-06-25T23:59:59",
						"NJ",
						"-56",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MN",
						"129",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"WV",
						"16",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NUL",
						"532",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"OK",
						"11",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"AK",
						"4",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"SD",
						"1",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"CA",
						"478",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"ND",
						"23",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"AL",
						"114",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"WY",
						"4",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"WI",
						"63",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"VA",
						"67",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MA",
						"40",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NM",
						"10",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"AR",
						"6",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MD",
						"1542",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"OH",
						"290",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"TN",
						"25",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NE",
						"14",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MI",
						"72",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"GA",
						"125",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"ON",
						"8",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"IL",
						"639",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"KS",
						"14",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"UT",
						"9",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"ME",
						"28",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NH",
						"2",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MB",
						"1",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"DC",
						"278",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NY",
						"135",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"CO",
						"42",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"IA",
						"412",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"DE",
						"12",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"SC",
						"10",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MT",
						"5",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"RI",
						"8",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"QC",
						"2",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MO",
						"29",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NV",
						"21",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"IN",
						"31",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"VT",
						"2",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"LA",
						"12",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"TX",
						"193",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"FL",
						"571",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"WA",
						"16",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"HI",
						"6",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"MS",
						"8",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"CT",
						"16",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"ID",
						"1",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"PA",
						"-219",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"KY",
						"42",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"OR",
						"-3",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"AZ",
						"68",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"NC",
						"108",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"AB",
						"5",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"BC",
						"3",
						19801,
						"A",
						0
				],
				[
						"2017-06-25T23:59:59",
						"SK",
						"1",
						19801,
						"A",
						0
				]
		],
		"statistics": {
				"total": "6582",
				"minimum": "1",
				"maximum": "1542",
				"nbritems": "58",
				"average": "113.48",
				"median": "18.5"
		}
}]},
"discreteData":[{
		"columns": [
				{
						"field": "z",
						"title": "Handset Revenue",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OREVENUE",
						"type": "character"
				},
				{
						"field": "g",
						"title": "Subscriber ID",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERID",
						"type": "character"
				},
				{
						"field": "s", //this will help index in the feild below
						"title": "Subscriber Name",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERNAME",//label of the point
						"type": "character"
				},
				{
						"field": "al",
						"title": "Bill Line 1st",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE1ST",
						"type": "character"
				},
				{
						"field": "am",
						"title": "Bill Line 2nd",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE2ND",
						"type": "character"
				},
				{
						"field": "an",
						"title": "Bill City",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLCITY",
						"type": "character"
				},
				{
						"field": "ao",
						"title": "Bill State",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLSTATE",
						"type": "character"
				},
				{
						"field": "ap",
						"title": "Bill ZipCode",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLZIPCODE",
						"type": "character"
				},
				{
						"field": "aw",
						"title": "Model Type",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OMODELTYPE",
						"type": "character"
				},
				{
						"field": "bd",
						"title": "Service Plan",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLAN",
						"type": "character"
				},
				{
						"field": "be",
						"title": "Service Plan Desc",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLANDESC",
						"type": "character"
				},
				{
						"field": "bf",
						"title": "Latitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLAT",
						"type": "character"
				},
				{
						"field": "bg",
						"title": "Longitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLON",
						"type": "character"
				}
		],
		"rows": [
				{
						"z": "500",
						"g": "00665717121",
						"s": "CHRISTIAN HORTON",//name
						"al": "684 SICKLES CORNER BACK RD",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE N9519", //
						"bd": "BSFLH30",
						"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
						"bf": "-78.262605",
						"bg": "40.561890"
				},
				{
						"z": "800",
						"g": "15563518121",
						"s": "NICOLE ALTMANSOFER",
						"al": "4120 BEALE AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.422441",
						"bg": "40.484896"
				},
				{
						"z": "100",
						"g": "22517218121",
						"s": "MARCELL ELLIS",
						"al": "1411 23RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel DAWN",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.41599",
						"bg": "40.510609"
				},
				{
						"z": "230",
						"g": "29511608121",
						"s": "MARQUIS ESTERLY",
						"al": "106 E BEECH CT",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Samsung Galaxy J3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.39806",
						"bg": "40.528610"
				},
				{
						"z": "300",
						"g": "29961018121",
						"s": "SHAWN BROWN",
						"al": "911 GREEN AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE Warp Elite",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "650",
						"g": "55584118121",
						"s": "MACKENZIE JOHNSON",
						"al": "1910 15TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU LG Tribute HD",
						"bd": "VMU551LTE",
						"be": "$45 UNL w/ 10GB HiSpeed Data",
						"bf": "-78.412366",
						"bg": "40.513813"
				},
				{
						"z": "500",
						"g": "70293526121",
						"s": "CHARLES DAUGHENBAUGH",
						"al": "1904 11TH ST APT 2",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel Touch Elevate",
						"bd": "BSC2LH35",
						"be": "$35 2.5GB GrowData/$30 ReBoost",
						"bf": "-78.4059",
						"bg": "40.522017"
				},
				{
						"z": "300",
						"g": "79266518121",
						"s": "JOSEPH ICKES",
						"al": "911 GREEN AVE APT 1010",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost LG K3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "800",
						"g": "87851218121",
						"s": "MARY ANN SILVIAS",
						"al": "507 N 5TH ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.384458",
						"bg": "40.536916"
				},
				{
						"z": "800",
						"g": "87877707121",
						"s": "DALTON SNYDER",
						"al": "411 22ND AVE FL 1",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost Nokia Lumia",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.404652",
						"bg": "40.527002"
				},
				{
						"z": "800",
						"g": "97700718121",
						"s": "MIRANDA SPARKMAN",
						"al": "517 N 3RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU ZTE MAX XL",
						"bd": "VMU550LTE",
						"be": "$35 UNL w/ 5GB HiSpeed Data",
						"bf": "-78.386492",
						"bg": "40.535148"
				},
				{
						"z": "800",
						"g": "97756518121",
						"s": "CALEB STEVENS",
						"al": "1807 N 11TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Sam Galaxy J3 Emerge",
						"bd": "BOFLH35",
						"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
						"bf": "-78.380485",
						"bg": "40.552666"
				}
		]
}]
},
"10-slippy-discrete-area-new": {
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
				"legend": {
					"legendFlag": true,
					"legendTitle": "Total Sales",
					"legend2Title": "Total Sales",
					"legendPosition": "bottomright",
					"legend2Position": "bottomright"
				},
				"discretes": [{
            "continousFlag": false,
            "colorScheme": "Red",
            "latColumn": "OLAT",
            "longColumn": "OLON",
            "categoryFlag": true,
            "magnitudeFlag": false,
            "displayOptions": "none",
            "attributeColumns": {
                "category": "OMODELTYPE",
                "magnitude": "OREVENUE",
                "label": "OSUBSCRIBERNAME",
                "additional": [
										"OSUBSCRIBERID",
                    "OBILLLINE1ST",
                    "OBILLCITY",
                    "OBILLSTATE",
                    "OSERVICEPLANDESC"
                ]
            }
        }],
				"sumAreas": {
						"colorScheme": "Greens",
						"colorRange": 3,
						"PopupInfoName": "NAME",
						"colorSchemeAdditional": {
								"colorSchemeSplitFlag": true,
								"breakpoint": 0,
								"positiveColorScheme": "Greys",
								"negativeColorScheme": "Greys"
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

		"discreteData":[{
				"columns": [
						{
								"field": "z",
								"title": "Handset Revenue",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OREVENUE",
								"type": "character"
						},
						{
								"field": "g",
								"title": "Subscriber ID",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OSUBSCRIBERID",
								"type": "character"
						},
						{
								"field": "s", //this will help index in the feild below
								"title": "Subscriber Name",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OSUBSCRIBERNAME",//label of the point
								"type": "character"
						},
						{
								"field": "al",
								"title": "Bill Line 1st",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OBILLLINE1ST",
								"type": "character"
						},
						{
								"field": "am",
								"title": "Bill Line 2nd",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OBILLLINE2ND",
								"type": "character"
						},
						{
								"field": "an",
								"title": "Bill City",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OBILLCITY",
								"type": "character"
						},
						{
								"field": "ao",
								"title": "Bill State",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OBILLSTATE",
								"type": "character"
						},
						{
								"field": "ap",
								"title": "Bill ZipCode",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OBILLZIPCODE",
								"type": "character"
						},
						{
								"field": "aw",
								"title": "Model Type",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OMODELTYPE",
								"type": "character"
						},
						{
								"field": "bd",
								"title": "Service Plan",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OSERVICEPLAN",
								"type": "character"
						},
						{
								"field": "be",
								"title": "Service Plan Desc",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OSERVICEPLANDESC",
								"type": "character"
						},
						{
								"field": "bf",
								"title": "Latitude",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OLAT",
								"type": "character"
						},
						{
								"field": "bg",
								"title": "Longitude",
								"level": "Customer Delta Monthly - Official",
								"dbColumn": "OLON",
								"type": "character"
						}
				],
				"rows": [
						{
								"z": "500",
								"g": "00665717121",
								"s": "CHRISTIAN HORTON",//name
								"al": "684 SICKLES CORNER BACK RD",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "Boost ZTE N9519", //
								"bd": "BSFLH30",
								"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
								"bf": "-78.262605",
								"bg": "40.561890"
						},
						{
								"z": "800",
								"g": "15563518121",
								"s": "NICOLE ALTMANSOFER",
								"al": "4120 BEALE AVE",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "BST LG Tribute HD",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.422441",
								"bg": "40.484896"
						},
						{
								"z": "100",
								"g": "22517218121",
								"s": "MARCELL ELLIS",
								"al": "1411 23RD ST",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "BST Alcatel DAWN",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.41599",
								"bg": "40.510609"
						},
						{
								"z": "230",
								"g": "29511608121",
								"s": "MARQUIS ESTERLY",
								"al": "106 E BEECH CT",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "BST Samsung Galaxy J3",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.39806",
								"bg": "40.528610"
						},
						{
								"z": "300",
								"g": "29961018121",
								"s": "SHAWN BROWN",
								"al": "911 GREEN AVE",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "Boost ZTE Warp Elite",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.398161",
								"bg": "40.517328"
						},
						{
								"z": "650",
								"g": "55584118121",
								"s": "MACKENZIE JOHNSON",
								"al": "1910 15TH AVE",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "VMU LG Tribute HD",
								"bd": "VMU551LTE",
								"be": "$45 UNL w/ 10GB HiSpeed Data",
								"bf": "-78.412366",
								"bg": "40.513813"
						},
						{
								"z": "500",
								"g": "70293526121",
								"s": "CHARLES DAUGHENBAUGH",
								"al": "1904 11TH ST APT 2",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "BST Alcatel Touch Elevate",
								"bd": "BSC2LH35",
								"be": "$35 2.5GB GrowData/$30 ReBoost",
								"bf": "-78.4059",
								"bg": "40.522017"
						},
						{
								"z": "300",
								"g": "79266518121",
								"s": "JOSEPH ICKES",
								"al": "911 GREEN AVE APT 1010",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "Boost LG K3",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.398161",
								"bg": "40.517328"
						},
						{
								"z": "800",
								"g": "87851218121",
								"s": "MARY ANN SILVIAS",
								"al": "507 N 5TH ST",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "BST LG Tribute HD",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.384458",
								"bg": "40.536916"
						},
						{
								"z": "800",
								"g": "87877707121",
								"s": "DALTON SNYDER",
								"al": "411 22ND AVE FL 1",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "Boost Nokia Lumia",
								"bd": "BSFLH50",
								"be": "$50 Unl Talk/Txt/Data",
								"bf": "-78.404652",
								"bg": "40.527002"
						},
						{
								"z": "800",
								"g": "97700718121",
								"s": "MIRANDA SPARKMAN",
								"al": "517 N 3RD ST",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "VMU ZTE MAX XL",
								"bd": "VMU550LTE",
								"be": "$35 UNL w/ 5GB HiSpeed Data",
								"bf": "-78.386492",
								"bg": "40.535148"
						},
						{
								"z": "800",
								"g": "97756518121",
								"s": "CALEB STEVENS",
								"al": "1807 N 11TH AVE",
								"am": "",
								"an": "ALTOONA",
								"ao": "PA",
								"ap": "16601",
								"aw": "BST Sam Galaxy J3 Emerge",
								"bd": "BOFLH35",
								"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
								"bf": "-78.380485",
								"bg": "40.552666"
						}
				]
		}],

		"dataConfiguration": {
				"columns": [{
						"id": 1,
						"columnType": " total sales",
						"dbColumnName": "WOBILLINGSTATE",
						"dbColumnTitle": " Billing State: ",
						"title": "Count",//Make Title
						"filter": {},
						"target": "",
						"targetOperand": "",
						"tolerance": "",
						"numberFormat": "1,234",
						"dbColumnNameSummed": "",
						"endOfPivotColumn": true
				}],
				"anchorColumn": {
						"title": " Billing State (Order)",
						"frequency": "Daily",
						"dbColumnName": "WOBILLINGSTATE",
						"dbColumnTitle": " Billing State (Order)",
						"filter": {"filter": ""},
						"filterOwnerUserId": "",
						"showAll": true
				},
				"collector": "Sales Transactions Current",
				"snapshotConfig": {
						"type": "specific one",
						"snapshotId": 19801
				}
		},
		"data": {"pivot": [{ //...data.pivot[0].data[0][1]
				"id": 1,
				"data": [
						[
								"2017-06-25T23:59:59",
								"NJ",
								"56",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MN",
								"-129",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"WV",
								"-16",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NUL",
								"532",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"OK",
								"11",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"AK",
								"4",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"SD",
								"1",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"CA",
								"478",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"ND",
								"23",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"AL",
								"114",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"WY",
								"4",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"WI",
								"63",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"VA",
								"67",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MA",
								"40",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NM",
								"10",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"AR",
								"6",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MD",
								"1542",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"OH",
								"290",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"TN",
								"25",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NE",
								"14",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MI",
								"72",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"GA",
								"125",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"ON",
								"8",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"IL",
								"639",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"KS",
								"14",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"UT",
								"9",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"ME",
								"28",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NH",
								"2",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MB",
								"1",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"DC",
								"278",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NY",
								"135",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"CO",
								"42",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"IA",
								"412",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"DE",
								"12",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"SC",
								"10",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MT",
								"5",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"RI",
								"8",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"QC",
								"2",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MO",
								"29",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NV",
								"21",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"IN",
								"31",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"VT",
								"2",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"LA",
								"12",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"TX",
								"193",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"FL",
								"571",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"WA",
								"16",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"HI",
								"6",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"MS",
								"8",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"CT",
								"16",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"ID",
								"1",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"PA",
								"219",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"KY",
								"42",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"OR",
								"3",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"AZ",
								"68",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"NC",
								"108",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"AB",
								"5",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"BC",
								"3",
								19801,
								"A",
								0
						],
						[
								"2017-06-25T23:59:59",
								"SK",
								"1",
								19801,
								"A",
								0
						]
				],
				"statistics": {
						"total": "6582",
						"minimum": "1",
						"maximum": "1542",
						"nbritems": "58",
						"average": "113.48",
						"median": "18.5"
				}
		}]}
},
"slippy-discrete-multiple": {
"vizualizationConfiguration": {
		"defaultMapType": "slippy",
		"defaultMapFace": "discrete",
		"slippy": {
			//allow user to change tile
				"defaultLatitude": 40.558034, //default to altoona pennsylvania
				"defaultLongitude": -78.478437,
				"zoomLevel": 10,
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
			"legendFlag" : true,
			"legendTitle" : "Service Type",
			"legendPosition" : "bottomleft"
			//bottom-right //top-right //top-left //Outside-right
		},
		"discretes": [{
				"continuousFlag": false,
				"colorScheme": "Red",
				"latColumn": "OLAT",
				"longColumn": "OLON",
				"categoryFlag": true,
				"magnitudeFlag": true,
				"shapeForm": "rectangle",
				"displayOptions": "none",
				"attributeColumns": {
						"category": "OMODELTYPE",
						"magnitude": "OREVENUE",
						"label": "OSUBSCRIBERNAME",
						"additional": [
								"OSUBSCRIBERID",
								"OBILLLINE1ST",
								"OBILLCITY",
								"OBILLSTATE",
								"OSERVICEPLANDESC"
						]
				}
		},
		{
				"continuousFlag": false,
				"colorScheme": "Red",
				"latColumn": "OLAT",
				"longColumn": "OLON",
				"categoryFlag": true,
				"magnitudeFlag": true,
				"shapeForm": "circle",
				"displayOptions": "none",
				"attributeColumns": {
						"category": "OMODELTYPE",
						"magnitude": "OREVENUE",
						"label": "OSUBSCRIBERNAME",
						"additional": [
								"OSUBSCRIBERID",
								"OBILLLINE1ST",
								"OBILLCITY",
								"OBILLSTATE",
								"OSERVICEPLANDESC"
						]
				}
		}
	]
},
"discreteData":[{
		"columns": [
				{
						"field": "z",
						"title": "Handset Revenue",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OREVENUE",
						"type": "character"
				},
				{
						"field": "g",
						"title": "Subscriber ID",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERID",
						"type": "character"
				},
				{
						"field": "s", //this will help index in the feild below
						"title": "Subscriber Name",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERNAME",//label of the point
						"type": "character"
				},
				{
						"field": "al",
						"title": "Bill Line 1st",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE1ST",
						"type": "character"
				},
				{
						"field": "am",
						"title": "Bill Line 2nd",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE2ND",
						"type": "character"
				},
				{
						"field": "an",
						"title": "Bill City",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLCITY",
						"type": "character"
				},
				{
						"field": "ao",
						"title": "Bill State",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLSTATE",
						"type": "character"
				},
				{
						"field": "ap",
						"title": "Bill ZipCode",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLZIPCODE",
						"type": "character"
				},
				{
						"field": "aw",
						"title": "Model Type",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OMODELTYPE",
						"type": "character"
				},
				{
						"field": "bd",
						"title": "Service Plan",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLAN",
						"type": "character"
				},
				{
						"field": "be",
						"title": "Service Plan Desc",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLANDESC",
						"type": "character"
				},
				{
						"field": "bf",
						"title": "Latitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLAT",
						"type": "character"
				},
				{
						"field": "bg",
						"title": "Longitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLON",
						"type": "character"
				}
		],
		"rows": [
				{
						"z": "500",
						"g": "00665717121",
						"s": "CHRISTIAN HORTON",//name
						"al": "684 SICKLES CORNER BACK RD",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE N9519", //
						"bd": "BSFLH30",
						"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
						"bf": "-78.262605",
						"bg": "40.561890"
				},
				{
						"z": "800",
						"g": "15563518121",
						"s": "NICOLE ALTMANSOFER",
						"al": "4120 BEALE AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.422441",
						"bg": "40.484896"
				},
				{
						"z": "100",
						"g": "22517218121",
						"s": "MARCELL ELLIS",
						"al": "1411 23RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel DAWN",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.41599",
						"bg": "40.510609"
				},
				{
						"z": "230",
						"g": "29511608121",
						"s": "MARQUIS ESTERLY",
						"al": "106 E BEECH CT",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Samsung Galaxy J3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.39806",
						"bg": "40.528610"
				},
				{
						"z": "300",
						"g": "29961018121",
						"s": "SHAWN BROWN",
						"al": "911 GREEN AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE Warp Elite",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "650",
						"g": "55584118121",
						"s": "MACKENZIE JOHNSON",
						"al": "1910 15TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU LG Tribute HD",
						"bd": "VMU551LTE",
						"be": "$45 UNL w/ 10GB HiSpeed Data",
						"bf": "-78.412366",
						"bg": "40.513813"
				},
				{
						"z": "500",
						"g": "70293526121",
						"s": "CHARLES DAUGHENBAUGH",
						"al": "1904 11TH ST APT 2",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel Touch Elevate",
						"bd": "BSC2LH35",
						"be": "$35 2.5GB GrowData/$30 ReBoost",
						"bf": "-78.4059",
						"bg": "40.522017"
				},
				{
						"z": "300",
						"g": "79266518121",
						"s": "JOSEPH ICKES",
						"al": "911 GREEN AVE APT 1010",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost LG K3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "800",
						"g": "87851218121",
						"s": "MARY ANN SILVIAS",
						"al": "507 N 5TH ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.384458",
						"bg": "40.536916"
				},
				{
						"z": "800",
						"g": "87877707121",
						"s": "DALTON SNYDER",
						"al": "411 22ND AVE FL 1",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost Nokia Lumia",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.404652",
						"bg": "40.527002"
				},
				{
						"z": "800",
						"g": "97700718121",
						"s": "MIRANDA SPARKMAN",
						"al": "517 N 3RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU ZTE MAX XL",
						"bd": "VMU550LTE",
						"be": "$35 UNL w/ 5GB HiSpeed Data",
						"bf": "-78.386492",
						"bg": "40.535148"
				},
				{
						"z": "800",
						"g": "97756518121",
						"s": "CALEB STEVENS",
						"al": "1807 N 11TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Sam Galaxy J3 Emerge",
						"bd": "BOFLH35",
						"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
						"bf": "-78.380485",
						"bg": "40.552666"
				}
		]
},
{
		"columns": [
				{
						"field": "z",
						"title": "Handset Revenue",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OREVENUE",
						"type": "character"
				},
				{
						"field": "g",
						"title": "Subscriber ID",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERID",
						"type": "character"
				},
				{
						"field": "s", //this will help index in the feild below
						"title": "Subscriber Name",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERNAME",//label of the point
						"type": "character"
				},
				{
						"field": "al",
						"title": "Bill Line 1st",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE1ST",
						"type": "character"
				},
				{
						"field": "am",
						"title": "Bill Line 2nd",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE2ND",
						"type": "character"
				},
				{
						"field": "an",
						"title": "Bill City",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLCITY",
						"type": "character"
				},
				{
						"field": "ao",
						"title": "Bill State",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLSTATE",
						"type": "character"
				},
				{
						"field": "ap",
						"title": "Bill ZipCode",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLZIPCODE",
						"type": "character"
				},
				{
						"field": "aw",
						"title": "Model Type",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OMODELTYPE",
						"type": "character"
				},
				{
						"field": "bd",
						"title": "Service Plan",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLAN",
						"type": "character"
				},
				{
						"field": "be",
						"title": "Service Plan Desc",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLANDESC",
						"type": "character"
				},
				{
						"field": "bf",
						"title": "Latitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLAT",
						"type": "character"
				},
				{
						"field": "bg",
						"title": "Longitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLON",
						"type": "character"
				}
		],
		"rows": [
				{
						"z": "500",
						"g": "00665717121",
						"s": "CHRISTIAN HORTON",//name
						"al": "684 SICKLES CORNER BACK RD",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE N9519", //
						"bd": "BSFLH30",
						"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
						"bf": "-104.9903",
						"bg": "39.7392"
				},
				{
						"z": "800",
						"g": "15563518121",
						"s": "NICOLE ALTMANSOFER",
						"al": "4120 BEALE AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-104.9903",
						"bg": "39.7392"
				},
				{
						"z": "100",
						"g": "22517218121",
						"s": "MARCELL ELLIS",
						"al": "1411 23RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel DAWN",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "230",
						"g": "29511608121",
						"s": "MARQUIS ESTERLY",
						"al": "106 E BEECH CT",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Samsung Galaxy J3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "300",
						"g": "29961018121",
						"s": "SHAWN BROWN",
						"al": "911 GREEN AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE Warp Elite",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "650",
						"g": "55584118121",
						"s": "MACKENZIE JOHNSON",
						"al": "1910 15TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU LG Tribute HD",
						"bd": "VMU551LTE",
						"be": "$45 UNL w/ 10GB HiSpeed Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "500",
						"g": "70293526121",
						"s": "CHARLES DAUGHENBAUGH",
						"al": "1904 11TH ST APT 2",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel Touch Elevate",
						"bd": "BSC2LH35",
						"be": "$35 2.5GB GrowData/$30 ReBoost",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "300",
						"g": "79266518121",
						"s": "JOSEPH ICKES",
						"al": "911 GREEN AVE APT 1010",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost LG K3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "87851218121",
						"s": "MARY ANN SILVIAS",
						"al": "507 N 5TH ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "87877707121",
						"s": "DALTON SNYDER",
						"al": "411 22ND AVE FL 1",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost Nokia Lumia",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.404652",
						"bg": "40.527002"
				},
				{
						"z": "800",
						"g": "97700718121",
						"s": "MIRANDA SPARKMAN",
						"al": "517 N 3RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU ZTE MAX XL",
						"bd": "VMU550LTE",
						"be": "$35 UNL w/ 5GB HiSpeed Data",
						"bf": "-78.386492",
						"bg": "40.535148"
				},
				{
						"z": "800",
						"g": "97756518121",
						"s": "CALEB STEVENS",
						"al": "1807 N 11TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Sam Galaxy J3 Emerge",
						"bd": "BOFLH35",
						"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
						"bf": "-78.380485",
						"bg": "40.552666"
				}
		]
}
]
},

"svg-discrete-multiple": {
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
			"legend":{
				"legendFlag": true,
				"legendPosition": "right",
				"legendText": "Service Types"
			},
		"discretes": [{
				"minBubbleSize": 3,
				"maxBubbleSize": 15,
				"colorScheme": "Red",
				"latColumn": "OLAT",
				"longColumn": "OLON",
				"categoryFlag": true,
				"magnitudeFlag": true,
				"shapeForm": "circle",
				"displayOptions": "none",
				"attributeColumns": {
						"category": "OMODELTYPE",
						"magnitude": "OREVENUE",
						"label": "OSUBSCRIBERNAME",
						"additional": [
							"OSUBSCRIBERID",
							"OBILLLINE1ST",
							"OBILLCITY",
							"OBILLSTATE",
							"OSERVICEPLANDESC"
						]
				}
		},
		{
				"minBubbleSize": 3,
				"maxBubbleSize": 15,
				"colorScheme": "Red",
				"latColumn": "OLAT",
				"longColumn": "OLON",
				"categoryFlag": true,
				"magnitudeFlag": true,
				"shapeForm": "rectangle",
				"displayOptions": "none",
				"attributeColumns": {
						"category": "OMODELTYPE",
						"magnitude": "OREVENUE",
						"label": "OSUBSCRIBERNAME",
						"additional": [
							"OSUBSCRIBERID",
							"OBILLLINE1ST",
							"OBILLCITY",
							"OBILLSTATE",
							"OSERVICEPLANDESC"
						]
				}
		}
	],

},
"discreteData":[{
		"columns": [
				{
						"field": "z",
						"title": "Handset Revenue",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OREVENUE",
						"type": "character"
				},
				{
						"field": "g",
						"title": "Subscriber ID",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERID",
						"type": "character"
				},
				{
						"field": "s", //this will help index in the feild below
						"title": "Subscriber Name",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERNAME",//label of the point
						"type": "character"
				},
				{
						"field": "al",
						"title": "Bill Line 1st",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE1ST",
						"type": "character"
				},
				{
						"field": "am",
						"title": "Bill Line 2nd",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE2ND",
						"type": "character"
				},
				{
						"field": "an",
						"title": "Bill City",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLCITY",
						"type": "character"
				},
				{
						"field": "ao",
						"title": "Bill State",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLSTATE",
						"type": "character"
				},
				{
						"field": "ap",
						"title": "Bill ZipCode",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLZIPCODE",
						"type": "character"
				},
				{
						"field": "aw",
						"title": "Model Type",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OMODELTYPE",
						"type": "character"
				},
				{
						"field": "bd",
						"title": "Service Plan",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLAN",
						"type": "character"
				},
				{
						"field": "be",
						"title": "Service Plan Desc",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLANDESC",
						"type": "character"
				},
				{
						"field": "bf",
						"title": "Latitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLAT",
						"type": "character"
				},
				{
						"field": "bg",
						"title": "Longitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLON",
						"type": "character"
				}
		],
		"rows": [
				{
						"z": "500",
						"g": "00665717121",
						"s": "CHRISTIAN HORTON",//name
						"al": "684 SICKLES CORNER BACK RD",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE N9519", //
						"bd": "BSFLH30",
						"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
						"bf": "-78.262605",
						"bg": "40.561890"
				},
				{
						"z": "800",
						"g": "15563518121",
						"s": "NICOLE ALTMANSOFER",
						"al": "4120 BEALE AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.422441",
						"bg": "40.484896"
				},
				{
						"z": "100",
						"g": "22517218121",
						"s": "MARCELL ELLIS",
						"al": "1411 23RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel DAWN",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.41599",
						"bg": "40.510609"
				},
				{
						"z": "230",
						"g": "29511608121",
						"s": "MARQUIS ESTERLY",
						"al": "106 E BEECH CT",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Samsung Galaxy J3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.39806",
						"bg": "40.528610"
				},
				{
						"z": "300",
						"g": "29961018121",
						"s": "SHAWN BROWN",
						"al": "911 GREEN AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE Warp Elite",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "650",
						"g": "55584118121",
						"s": "MACKENZIE JOHNSON",
						"al": "1910 15TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU LG Tribute HD",
						"bd": "VMU551LTE",
						"be": "$45 UNL w/ 10GB HiSpeed Data",
						"bf": "-78.412366",
						"bg": "40.513813"
				},
				{
						"z": "500",
						"g": "70293526121",
						"s": "CHARLES DAUGHENBAUGH",
						"al": "1904 11TH ST APT 2",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel Touch Elevate",
						"bd": "BSC2LH35",
						"be": "$35 2.5GB GrowData/$30 ReBoost",
						"bf": "-78.4059",
						"bg": "40.522017"
				},
				{
						"z": "300",
						"g": "79266518121",
						"s": "JOSEPH ICKES",
						"al": "911 GREEN AVE APT 1010",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost LG K3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.398161",
						"bg": "40.517328"
				},
				{
						"z": "800",
						"g": "87851218121",
						"s": "MARY ANN SILVIAS",
						"al": "507 N 5TH ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.384458",
						"bg": "40.536916"
				},
				{
						"z": "800",
						"g": "87877707121",
						"s": "DALTON SNYDER",
						"al": "411 22ND AVE FL 1",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost Nokia Lumia",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-78.404652",
						"bg": "40.527002"
				},
				{
						"z": "800",
						"g": "97700718121",
						"s": "MIRANDA SPARKMAN",
						"al": "517 N 3RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU ZTE MAX XL",
						"bd": "VMU550LTE",
						"be": "$35 UNL w/ 5GB HiSpeed Data",
						"bf": "-78.386492",
						"bg": "40.535148"
				},
				{
						"z": "800",
						"g": "97756518121",
						"s": "CALEB STEVENS",
						"al": "1807 N 11TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Sam Galaxy J3 Emerge",
						"bd": "BOFLH35",
						"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
						"bf": "-78.380485",
						"bg": "40.552666"
				}
		]
},
{
		"columns": [
				{
						"field": "z",
						"title": "Handset Revenue",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OREVENUE",
						"type": "character"
				},
				{
						"field": "g",
						"title": "Subscriber ID",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERID",
						"type": "character"
				},
				{
						"field": "s", //this will help index in the feild below
						"title": "Subscriber Name",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSUBSCRIBERNAME",//label of the point
						"type": "character"
				},
				{
						"field": "al",
						"title": "Bill Line 1st",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE1ST",
						"type": "character"
				},
				{
						"field": "am",
						"title": "Bill Line 2nd",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLLINE2ND",
						"type": "character"
				},
				{
						"field": "an",
						"title": "Bill City",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLCITY",
						"type": "character"
				},
				{
						"field": "ao",
						"title": "Bill State",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLSTATE",
						"type": "character"
				},
				{
						"field": "ap",
						"title": "Bill ZipCode",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OBILLZIPCODE",
						"type": "character"
				},
				{
						"field": "aw",
						"title": "Model Type",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OMODELTYPE",
						"type": "character"
				},
				{
						"field": "bd",
						"title": "Service Plan",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLAN",
						"type": "character"
				},
				{
						"field": "be",
						"title": "Service Plan Desc",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OSERVICEPLANDESC",
						"type": "character"
				},
				{
						"field": "bf",
						"title": "Latitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLAT",
						"type": "character"
				},
				{
						"field": "bg",
						"title": "Longitude",
						"level": "Customer Delta Monthly - Official",
						"dbColumn": "OLON",
						"type": "character"
				}
		],
		"rows": [
				{
						"z": "500",
						"g": "00665717121",
						"s": "CHRISTIAN HORTON",//name
						"al": "684 SICKLES CORNER BACK RD",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE N9519", //
						"bd": "BSFLH30",
						"be": "$30 Unl Talk/Txt/1GB 4GLTEData",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "15563518121",
						"s": "NICOLE ALTMANSOFER",
						"al": "4120 BEALE AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "100",
						"g": "22517218121",
						"s": "MARCELL ELLIS",
						"al": "1411 23RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel DAWN",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-102.4842",
						"bg": "39.0119"
				},
				{
						"z": "230",
						"g": "29511608121",
						"s": "MARQUIS ESTERLY",
						"al": "106 E BEECH CT",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Samsung Galaxy J3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "300",
						"g": "29961018121",
						"s": "SHAWN BROWN",
						"al": "911 GREEN AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost ZTE Warp Elite",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "650",
						"g": "55584118121",
						"s": "MACKENZIE JOHNSON",
						"al": "1910 15TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU LG Tribute HD",
						"bd": "VMU551LTE",
						"be": "$45 UNL w/ 10GB HiSpeed Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "500",
						"g": "70293526121",
						"s": "CHARLES DAUGHENBAUGH",
						"al": "1904 11TH ST APT 2",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Alcatel Touch Elevate",
						"bd": "BSC2LH35",
						"be": "$35 2.5GB GrowData/$30 ReBoost",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "300",
						"g": "79266518121",
						"s": "JOSEPH ICKES",
						"al": "911 GREEN AVE APT 1010",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost LG K3",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "87851218121",
						"s": "MARY ANN SILVIAS",
						"al": "507 N 5TH ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST LG Tribute HD",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "87877707121",
						"s": "DALTON SNYDER",
						"al": "411 22ND AVE FL 1",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "Boost Nokia Lumia",
						"bd": "BSFLH50",
						"be": "$50 Unl Talk/Txt/Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "97700718121",
						"s": "MIRANDA SPARKMAN",
						"al": "517 N 3RD ST",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "VMU ZTE MAX XL",
						"bd": "VMU550LTE",
						"be": "$35 UNL w/ 5GB HiSpeed Data",
						"bf": "-98.4842",
						"bg": "39.0119"
				},
				{
						"z": "800",
						"g": "97756518121",
						"s": "CALEB STEVENS",
						"al": "1807 N 11TH AVE",
						"am": "",
						"an": "ALTOONA",
						"ao": "PA",
						"ap": "16601",
						"aw": "BST Sam Galaxy J3 Emerge",
						"bd": "BOFLH35",
						"be": "$35 Unl Talk/Txt/3GB 4GLTEData",
						"bf": "-98.4842",
						"bg": "39.0119"
				}
		]
}
]
}





};
