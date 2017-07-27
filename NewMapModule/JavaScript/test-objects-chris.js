{
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
            "discretes": [],
            "sumAreas": {
                "colorScheme": "Greys",
                "colorRange": 3,
                "PopupInfoName": "NAME",
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
        "dataConfiguration": {
            "columns": [{
                "id": 1,
                "columnType": "Count",
                "dbColumnName": "WOBILLINGSTATE",
                "dbColumnTitle": " Billing State (Order)",
                "title": "Count",
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
            "svg": {"jsonType": "GeometryCollection"},
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
                "popupTextDescription": " Total Sales: ",
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
        "dataConfiguration": {
            "columns": [{
                "id": 1,
                "columnType": "Count",
                "dbColumnName": "WOBILLINGSTATE",
                "dbColumnTitle": " Billing State (Order)",
                "title": "Count",
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
        "data": {"pivot": [{
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
    }
}
