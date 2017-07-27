// Chandler - this is the function where you build all your magic
// This function will be placed inside the RI360 framework

// function createDiv(){
//
// //   var node  = document.getElementById("mapid");
// //   if(node){
// //   node.parentNode.removeChild(node);
// // }
// //
// //   var div = document.createElement("div");
// //   div.setAttribute("id", "mapid");
// // // as an example add it to the body
// //   document.body.appendChild(div);
//
//   var svg = document.getElementsByClassName(".pivotCount")[0];
//
//   if(svg){
//     svg.parentNode.removeChild(svg);
//   }
//   var newSVG = document.createElement("svg");
//   newSVG.setAttribute("class", "pivotCount");
//   newSVG.setAttribute("height", "1000");
//   newSVG.setAttribute("width", "1500");
//
//   document.body.appendChild(newSVG);
//
// }



function renderMap(obj) {

  var colorScale1 = d3.scaleOrdinal()
        .range(['#C0C0C0', '#808080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);
  var colorScale = d3.scaleOrdinal()
        .range(['#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);

  //createDiv();

	if(obj.vizualizationConfiguration.defaultMapType == "slippy")
	{

        var dataobject = obj.data;
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

				if(obj.vizualizationConfiguration.defaultMapFace == "discrete"){
					var latLong = [];

					for(var i=0; i < dataobject.length; i++){
						latLong.push([dataobject[i][obj.vizualizationConfiguration.discretes[0].latColumn], +dataobject[i][obj.vizualizationConfiguration.discretes[0].longColumn]]);
					}

          console.log(latLong);

          if(obj.vizualizationConfiguration.geographyBoundariesFlag == true){
            console.log("geographyBoundariesFlag equal true")

            d3.queue() //used to ensure that all data is loaded into the program before execution
              .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
              .await(ready)

              function style(feature){
                console.log("instyle")
                return{
                  fillColor: "blue",
                  weight:1,
                  opacity:1,
                  color: 'darkgrey',
                  dashArray: '1',
                  fillOpacity: .7
                };
              }

              function ready(error, data){

                var statesData = data;
                console.log(statesData)
                var geojson;

                geojson = L.geoJson(statesData,{
                  style:style
                }).addTo(map);

              }
          }



          console.log(latLong)

					if(obj.vizualizationConfiguration.discretes[0].categoryFlag == true && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == false){

						var key = obj.vizualizationConfiguration.discretes[0].attributeColumns.category;

							for(var i = 0; i < latLong.length; i++){
                console.log(latLong[i])
								var circle = L.circle(latLong[i], {
									color: colorScale(dataobject[i][key]),
									fillColor: '#f03',
									fillOpacity: 0.5,
									radius: 15
							}).addTo(map);
							console.log("true false")
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
                }
              })

              var statesData = data;
              console.log(statesData)
              var geojson;

              if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == false){

                var colorScheme= obj.vizualizationConfiguration.sumAreas.colorScheme;
                var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

                var income_color={};

                var max = d3.max(dataArray, function(d){return d;});
                var min = d3.min(dataArray, function(d){return d;})

                var income_domain = [];
                income_domain = range(max, min, colorRange);


                income_color = d3.scaleLinear() //scaleLinear for D3.V4
                  .domain(income_domain)
                  .range(colorbrewer[colorScheme][colorRange]);


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

                  geojson = L.geoJson(statesData,{
                    style: style
                  }).addTo(map);

                console.log("ASWERADFAWAEASDFASfd")
              }
              else{

                var income_domainPOS = []
                var income_domainNEG = []

                var max = d3.max(dataArray, function(d){return d;});
                var min = d3.min(dataArray, function(d){return d;});

                var colorSchemePOS= obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.positiveColorScheme;
                var colorSchemeNEG= obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.negativeColorScheme;



                var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

                var income_domain = [];
                income_domainNEG = rangeNEG(0, min, colorRange);
                income_domainPOS = range(max, 0, colorRange);

                income_colorPOS = d3.scaleLinear() //scaleLinear for D3.V4
                  .domain(income_domainPOS)
                  .range(colorbrewer[colorSchemePOS][colorRange]);

                income_colorNEG = d3.scaleLinear() //scaleLinear for D3.V4
                  .domain(income_domainNEG)
                  .range(colorbrewer[colorSchemeNEG][colorRange]);

                function style(feature){
                  if(feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn] == undefined){
                     return {
                         fillColor: "grey", //conf
                         weight: 2,
                         opacity: 1,
                         color: 'darkgrey',
                         dashArray: '1',
                         fillOpacity: .2
                     };}
                     else{
                       colorScheme = "Reds"
                       if(feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn] < obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.breakpoint){
                         return {
                             fillColor: income_colorNEG(feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn]), //conf
                             weight: 2,
                             opacity: 1,
                             color: 'darkgrey',
                             dashArray: '1',
                             fillOpacity: 1
                         };}
                       else {
                         return {
                             fillColor: income_colorPOS(feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn]), //conf
                             weight: 2,
                             opacity: 1,
                             color: 'darkgrey',
                             dashArray: '1',
                             fillOpacity: 1
                           };}
                     }
                   }

                  geojson = L.geoJson(statesData,{
                    style: style
                  }).addTo(map);



              }
            }
				  }

				else if(obj.vizualizationConfiguration.defaultMapFace == "continuous"){
					console.log("continuous")
					var latLong = [];
					for(var i=0; i < dataobject.length; i++){
						latLong.push([dataobject[i][obj.vizualizationConfiguration.discretes[0].latColumn], dataobject[i][obj.vizualizationConfiguration.discretes[0].longColumn]])
					}

          if(obj.vizualizationConfiguration.geographyBoundariesFlag == true){
            console.log("geographyBoundariesFlag equal true")

            d3.queue() //used to ensure that all data is loaded into the program before execution
              .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
              .await(ready)

              function style(feature){
                return{
                  fillColor: "lightgrey",
                  weight:1,
                  opacity:.5,
                  color: 'darkgrey',
                  dashArray: '1',
                  fillOpacity: .5
                };
              }

              function ready(error, data){

                var statesData = data;
                console.log(statesData)
                var geojson;

                geojson = L.geoJson(statesData,{
                  style:style
                }).addTo(map);

              }
          }

					var heat = L.heatLayer(latLong,{
										 radius: 15,
										 blur: 5,
										 maxZoom: 15,
								 }).addTo(map);
				}

        else if(obj.vizualizationConfiguration.defaultMapFace == "aggregate"){
          var latLong = [];
          for(var i=0; i < dataobject.length; i++){
						latLong.push([dataobject[i][obj.vizualizationConfiguration.discretes[0].latColumn], dataobject[i][obj.vizualizationConfiguration.discretes[0].longColumn]])
					}

          if(obj.vizualizationConfiguration.geographyBoundariesFlag == true){
            console.log("geographyBoundariesFlag equal true")

            d3.queue() //used to ensure that all data is loaded into the program before execution
              .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
              .await(ready)

              function style(feature){
                return{
                  fillColor: "lightgrey",
                  weight:1,
                  opacity:.5,
                  color: 'darkgrey',
                  dashArray: '1',
                  fillOpacity: .5
                };
              }

              function ready(error, data){

                var statesData = data;
                console.log(statesData)
                var geojson;

                geojson = L.geoJson(statesData,{
                  style:style
                }).addTo(map);

              }
          }

          var markers = L.markerClusterGroup({ chunkedLoading: true });

          for(var i = 0; i < latLong.length; i++){
            var a = latLong[i];
            var title= a[2];
            var marker = L.marker(L.latLng(a[0], a[1]), {title: title});
            marker.bindPopup(title);
            markers.addLayer(marker);
          }

        map.addLayer(markers);
        }


				else{
					console.log("incorrect defaultMapFace")
				}

	}

	else if(obj.vizualizationConfiguration.defaultMapType == "svg")
	{

    console.log("Inside SVG")

    var svg = d3.select("body").append("svg")
       .attr("width", 1000)
       .attr("height", 800)

    d3.queue() //used to ensure that all data is loaded into the program before execution
      .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.topoJsonUrl)
      .await(ready)

      function ready(error, data){
        if(error) throw error;

        console.log("loaded the data: " + data)

        var usMap = topojson.feature(data, {
          type: "GeometryCollection",
          geometries: data.objects.USMap.geometries //grabbing the points to create the polygon points so it can trace the Map
        });

        console.log(usMap)

        //identify projection -using geoalbersUSA
        var projection = d3.geoAlbersUsa() //geoAlbersUsa is the basic map projection, there are many more. This is the best for plane US view.
          .fitExtent([[20,20],[700,500]], usMap) //FitExtent used to fit the "Tile" for the viewer

        var geoPath = d3.geoPath().projection(projection) //initialize the path



        if(obj.vizualizationConfiguration.defaultMapFace == "sumByArea"){

            if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == false){

                console.log("inside sumByArea");

                var colorScheme= obj.vizualizationConfiguration.sumAreas.colorScheme;
                var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

                var valueArray= [];
                _.each(obj.data, function(dataRow){
                  valueArray.push(+dataRow[obj.vizualizationConfiguration.sumAreas.valueColumn])
                })

                var max = d3.max(valueArray, function(d) { return d;});
                var min = d3.min(valueArray, function(d) { return d;});

                var income_domain = range(max, min, colorRange)

                var income_color = d3.scaleLinear() //scaleLinear for D3.V4
                  .domain(income_domain)
                  .range(colorbrewer[colorScheme][colorRange]);

                svg.selectAll("path") //assign the projected map to the svg in HTML
                  .data(usMap.features)//.data is given from the argument from the ready function, includes features on the map
                  .enter()
                  .append("path")
                  .attr("d", geoPath)
                  .style("stroke", "#808080") //These two lines are used to create the outline of regions on the map whether its states or counties... etc
                  .style("stroke-width", "2")
                  .attr("fill", function(d){
                    //feature.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]
                    var geographyData = _.find(obj.data, function (dataRow){
                      return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
                    });

                    if(geographyData){
                        var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
                        return income_color(value);
                    }
                    else{
                      console.log("No geography data defined")
                      return "Grey"
                    }


                    console.log(d.properties[obj.vizualizationConfiguration.sumAreas.mapField]); //might have to
                  })

                }
                else{

                  var income_domainPOS = []
                  var income_domainNEG = []

                  var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange
                  var colorSchemeNEG = obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.negativeColorScheme;
                  var colorSchemePOS = obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.positiveColorScheme;

                  console.log(colorSchemePOS);
                  console.log(colorSchemeNEG);

                  var valueArray= [];

                  _.each(obj.data, function(dataRow){
                    valueArray.push(+dataRow[obj.vizualizationConfiguration.sumAreas.valueColumn])
                  })

                  console.log(valueArray);

                  var max = d3.max(valueArray, function(d) { return d;});
                  var min = d3.min(valueArray, function(d) { return d;});

                  //returns an array of integers
                  income_domainPOS = range(max, 0, colorRange);
                  income_domainNEG = rangeNEG(0, min, colorRange);

                  var income_colorPOS = d3.scaleLinear() //scaleLinear for D3.V4
                    .domain(income_domainPOS)
                    .range(colorbrewer[colorSchemePOS][colorRange]);

                  var income_colorNEG = d3.scaleLinear() //scaleLinear for D3.V4
                    .domain(income_domainNEG)
                    .range(colorbrewer[colorSchemeNEG][colorRange]);


                  svg.selectAll("path") //assign the projected map to the svg in HTML
                    .data(usMap.features)//.data is given from the argument from the ready function, includes features on the map
                    .enter()
                    .append("path")
                    .attr("d", geoPath)
                    .style("stroke", "#808080") //These two lines are used to create the outline of regions on the map whether its states or counties... etc
                    .style("stroke-width", "2")
                    .attr("fill", function(d){
                      //feature.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]
                      var geographyData = _.find(obj.data, function (dataRow){
                        return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
                      });

                      console.log(geographyData)

                      if(geographyData){
                          var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
                          if(value < obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.breakpoint)
                          {
                            return(income_colorNEG(value));
                          }
                          else
                          {
                            return(income_colorPOS(value));
                          }
                      }
                      else
                      {
                        console.log("No geography data defined")
                        return ("Grey");
                      }
                    })

                  }
                }



                else if(obj.vizualizationConfiguration.defaultMapFace == "discrete"){

                  var valueArray = [];
                  var magnitude = [];


                  _.each(obj.data, function(dataRow){
                    valueArray.push([+dataRow[obj.vizualizationConfiguration.discretes[0].longColumn], +dataRow[obj.vizualizationConfiguration.discretes[0].latColumn], dataRow[obj.vizualizationConfiguration.discretes[0].attributeColumns.category], +dataRow[obj.vizualizationConfiguration.discretes[0].attributeColumns.magnitude]])
                    magnitude.push([+dataRow[obj.vizualizationConfiguration.discretes[0].attributeColumns.magnitude]]);
                  })

                  var max = d3.max(magnitude, function(d) { return d;});
                  var min = d3.min(magnitude, function(d) { return d;});

                  var rScale = d3.scaleLinear();
                  rScale.domain([max, min]).range([obj.vizualizationConfiguration.discretes[0].minBubbleSize, obj.vizualizationConfiguration.discretes[0].maxBubbleSize]); //reverse min max for proper magnitude distribution for bubble sizes.

                console.log(valueArray)

                svg.selectAll("path") //assign the projected map to the svg in HTML
                  .data(usMap.features)//.data is given from the argument from the ready function, includes features on the map
                  .enter()
                  .append("path")
                  .attr("d", geoPath)
                  .style("stroke", "#808080") //These two lines are used to create the outline of regions on the map whether its states or counties... etc
                  .style("stroke-width", "2")
                  .attr("fill","lightgrey")

                if(obj.vizualizationConfiguration.discretes[0].categoryFlag == true && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == false){
                  svg.selectAll("circle")
                    .data(valueArray).enter()
                    .append("circle")
                    .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
                    .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
                    .attr("r", "2px")
                    .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
                }
                else if(obj.vizualizationConfiguration.discretes[0].categoryFlag == false && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == true){
                  svg.selectAll("circle")
                    .data(valueArray).enter()
                    .append("circle")
                    .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
                    .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
                    .attr("r", function(d){ console.log(rScale(d[3])); return rScale(d[3])})
                    .attr("fill", obj.vizualizationConfiguration.discretes[0].colorScheme)

                }
                else if(obj.vizualizationConfiguration.discretes[0].categoryFlag == true && obj.vizualizationConfiguration.discretes[0].magnitudeFlag == true){
                  console.log("Here")
                  svg.selectAll("circle")
                    .data(valueArray).enter()
                    .append("circle")
                    .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
                    .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
                    .attr("r", function(d){ console.log(d[3] + " translates to " + rScale(d[3])); return rScale(d[3])})
                    .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
                    .attr("opacity", .75)
                    .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])}) //These two lines are used to create the outline of regions on the map whether its states or counties... etc
                    .style("stroke-width", "2")
                }
                else {

                  svg.selectAll("circle")
                    .data(valueArray).enter()
                    .append("circle")
                    .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
                    .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
                    .attr("r", 3)
                    .attr("fill", "Red")

                }

              }
                else{
                  console.log("incorrect defaultMapFace")
                }
              }
            }

  else{
    console.log("Incorrect Map Type")
    }

}


$('select').on('change', function() {
    d3.select("svg").selectAll("*").remove();
    console.log("loading test case " + this.value );
    renderMap(testObjects[this.value]);

  })



// *****
// only have one of the following run at a time
//renderMap(testObjects["1-slippy-discrete"]);
//renderMap(testObjects["1-slippy-discrete-two"]);
renderMap(testObjects["1-slippy-discrete-two"]);
