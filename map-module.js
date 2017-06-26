
var colorScale = d3.scaleOrdinal()
      .range(['#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);
// Chandler - this is the function where you build all your magic
// This function will be placed inside the RI360 framework
function renderMap(obj) {

	var dataobject = obj.data;
	console.log(dataobject[0].Price)


	if(obj.vizualizationConfiguration.defaultMapType == "slippy")
	{
			//pull data from slippy map type
			var tileDisplay = obj.vizualizationConfiguration.slippy.tileUrl,
				zoomLevel=obj.vizualizationConfiguration.slippy.zoomLevel,
				Latitude =obj.vizualizationConfiguration.slippy.defaultLatitude,
				Longitude =obj.vizualizationConfiguration.slippy.defaultLongitude;

				console.log(tileDisplay);
				console.log(zoomLevel);
				console.log(Latitude);
				console.log(Longitude);


				if(Latitude.toString().length>0 && Longitude.toString().length>0){
					//AddingMap
					var map = L.map('mapid').setView([Latitude, Longitude], zoomLevel);
					L.tileLayer(tileDisplay).addTo(map);
					//might need if condition to deal with latitdue and longitude being empty
				}
				else{
					console.log("Incorrect Lat/Long input - reverting to standard view")
					var map = L.map('mapid').setView([39.7392, -104.9903], 4);
					L.tileLayer(tileDisplay).addTo(map);
				}

				// if(obj.vizualizationConfiguration.geographyBoundariesFlag == true){
				// 		var geojson;
				// 		geographyMapKey = obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl;
				// 		console.log(geographyMapKey)
				// 		geojson = L.geoJson(geographyMapKey).addTo(map);
				// }
				// else{
				// 	console.log("No Map")
				// }

		//Slippy map integration

				if(obj.vizualizationConfiguration.defaultMapFace == "discrete"){
					var latLong = [];

					for(var i=0; i < dataobject.length; i++){
						latLong.push([dataobject[i].LatitudeLocation, dataobject[i].LongitudeLocation]);
					}

					if(obj.vizualizationConfiguration.discretes[0].categoryFlag == true && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == false){

						var key = obj.vizualizationConfiguration.discretes[0].attributeColumns.category;

							for(var i = 0; i < latLong.length; i++){
								var circle = L.circle(latLong[i], {
									color: colorScale(dataobject[i][key]),
									fillColor: '#f03',
									fillOpacity: 0.5,
									radius: 15
							}).addTo(map);
							console.log("false true")
						}
					}
					else if(obj.vizualizationConfiguration.discretes[0].categoryFlag == false && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == true){

									var key = obj.vizualizationConfiguration.discretes[0].attributeColumns.magnitude;

									function getRadius(data, i){
										return data;
									}

									for(var i = 0; i < latLong.length; i++){
										var circle = L.circle(latLong[i], {
											color: 'red',
											fillColor: '#f03',
											fillOpacity: 0.5,
											radius: getRadius(dataobject[i][key],i)
									}).addTo(map);
									console.log("false true")
								}
					}


					else if(obj.vizualizationConfiguration.discretes[0].categoryFlag == true && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == true){

						var magnitudeKey = obj.vizualizationConfiguration.discretes[0].attributeColumns.magnitude;
						var categoryKey = obj.vizualizationConfiguration.discretes[0].attributeColumns.category;

						function getRadius(data, i){
							return data;
						}

						for(var i = 0; i < latLong.length; i++){
							var circle = L.circle(latLong[i], {
								color: colorScale(dataobject[i][categoryKey]),
								fillColor: '#f03',
								fillOpacity: 0.5,
								radius: getRadius(dataobject[i][magnitudeKey],i)
						}).addTo(map);
						console.log("false true")
					}
				}
					else{
						for(var i = 0; i < latLong.length; i++){
							var circle = L.circle(latLong[i], {
								color: 'red',
								fillColor: '#f03',
								fillOpacity: 0.5,
								radius: 100,
						}).addTo(map);
					}
					}

				}

				else if(obj.vizualizationConfiguration.defaultMapFace == "sumByArea"){

          d3.queue() //used to ensure that all data is loaded into the program before execution
            .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
            .await(ready)

            function ready(error, data){
              if(error) throw error;

              console.log(data);

              var dataArray = [];


              _.each(data.features, function(feature){
                var geographyData = _.find(dataobject, function (dataRow){
                  return (feature.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
                });
                if(geographyData){
                  feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn] = geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
                  dataArray.push(geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn])
              }
                else{
                  feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn] = 0;
                  console.log("no data for this region")
                }
              })

              console.log(dataArray);

              var colorScheme= obj.vizualizationConfiguration.sumAreas.colorScheme;
              var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;



              var income_color={};

              var max = d3.max(dataArray, function(d){return d;});
              var min = d3.min(dataArray, function(d){return d;})

              var income_domain = [];
              income_domain = range(max, min, colorRange);

              console.log(income_domain)

              income_color = d3.scaleLinear() //scaleLinear for D3.V4
                .domain(income_domain)
                .range(colorbrewer[colorScheme][colorRange]);

                // var income_color = {};
                //
                // var income_color = d3.scaleLinear()
                //   .range(colorbrewer.Greens[3])
                //   .domain(income_domain);

              function style(feature){
                return{
                  fillColor: income_color(feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn]),
                  weight:2,
                  opacity:1,
                  color: 'darkgrey',
                  dashArray: '1',
                  fillOpacity: 1
                };
              }

              var statesData = data;
              console.log(statesData)
              var geojson;


              geojson = L.geoJson(statesData,{
                style: style
              }).addTo(map);
            }
				}

				else if(obj.vizualizationConfiguration.defaultMapFace == "continuous"){
					console.log("continuous")
					var latLong = [];
					for(var i=0; i < dataobject.length; i++){
						latLong.push([dataobject[i].LatitudeLocation, dataobject[i].LongitudeLocation])
					}
					var heat = L.heatLayer(latLong,{
										 radius: 15,
										 blur: 5,
										 maxZoom: 15,
								 }).addTo(map);
				}

				else{
					console.log("incorrect defaultMapFace")
				}

	}

	else if(obj.vizualizationConfiguration.defaultMapType == "svg")
	{
				if(obj.vizualizationConfiguration.defaultMapFace == "discrete"){

				}
				else if(obj.vizualizationConfiguration.defaultMapFace == "sumByArea"){

				}
				else{
					console.log("incorrect defaultMapFace")
				}
	}

	else{
		console.log("Incorrect Map Type")
	}


}


// *****
// only have one of the following run at a time
//renderMap(testObjects["1-slippy-discrete"]);
renderMap(testObjects["2-slippy-area"]);
//renderMap(testObjects["3-svg-area"]);
