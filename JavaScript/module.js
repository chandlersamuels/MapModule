function emptyMapContents(){

  var node = document.getElementById("mapContents")
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}





var counter = 0;

function renderChart(obj){

  function Description(locations){ //adding description for popup window over mouseove
      var str = "";
      for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
          str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
        }
      }
      return str;
    }

  var colorScale1 = d3.scaleOrdinal()
        .range(['#C0C0C0', '#808080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);
  var colorScale = d3.scaleOrdinal()
        .range(['#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);


  if(obj.vizualizationConfiguration.defaultMapType == "slippy"){
  console.log("inside of slippy");

      // initialize Slippy Map
      var tileDisplay = obj.vizualizationConfiguration.slippy.tileUrl,
      zoomLevel=obj.vizualizationConfiguration.slippy.zoomLevel,
      Latitude =obj.vizualizationConfiguration.slippy.defaultLatitude,
      Longitude =obj.vizualizationConfiguration.slippy.defaultLongitude;

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


      if(obj.vizualizationConfiguration.sumAreas){
        console.log("MapFace: SumByArea");

        d3.queue() //used to ensure that all data is loaded into the program before execution
          .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
          .await(ready)

          function ready(error, data){

            var dataArray = [];

            //Adding the data from
            _.each(data.features, function(feature){
              var geographyData = _.find(obj.data, function (dataRow){
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
              console.log("ColorSchemeSplitFlag: False")

              var colorScheme= obj.vizualizationConfiguration.sumAreas.colorScheme;
              var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

              console.log(colorScheme)
              console.log(colorRange)

              var income_color={};

              var max = d3.max(dataArray, function(d){return d;});
              var min = d3.min(dataArray, function(d){return d;})

              var income_domain = [];
              income_domain = range(max, min, colorRange);

              console.log(income_domain)

              income_color = d3.scaleLinear() //scaleLinear for D3.V4
                .domain(income_domain)
                .range(colorbrewer[colorScheme][colorRange]);

                function style(feature){
                  return{
                    fillColor: income_color(feature.properties[obj.vizualizationConfiguration.sumAreas.valueColumn]),
                    weight:1,
                    opacity:1,
                    color: 'darkgrey',
                    dashArray: '1',
                    fillOpacity: .2
                  };
                }

                function highlightFeature(e) {
                    var layer = e.target;

                    layer.setStyle({
                        weight: 3,
                        color: '#000',
                        dashArray: '',

                    });

                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront();
                    }

                    info.update(layer.feature.properties);
                }

                function resetHighlight(e) { //highlight the area selected
                    geojson.resetStyle(e.target);
                    info.update();
                }
                function zoomToFeature(e) { //when you click on the state the map will zoom.
                    map.fitBounds(e.target.getBounds());
                }

                function onEachFeature(feature, layer) {
                    layer.on({
                        mouseover: highlightFeature,
                        mouseout: resetHighlight,
                        click: zoomToFeature
                    });
                }

                geojson = L.geoJson(statesData,{
                  style:style,
                  onEachFeature: onEachFeature
                }).addTo(map);

                var info = L.control(); //L means leaflet control is an attribute

                info.onAdd = function (map) {
                    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
                    this.update();
                    return this._div;
                };
                // method that we will use to update the control based on feature properties passed
                info.update = function (props) {
                    console.log(props)
                    this._div.innerHTML = '<h4>Total Sales by state</h4>' +  (props ?
                        '<b>' + props.NAME + '</b><br />' + props.Sales + ' total sales '
                        : 'Hover over a state'); //Things that goes inside the pop-up window.
                };

                info.addTo(map);


            }
            else if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == true){
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

              function highlightFeature(e) {
                   var layer = e.target;

                   layer.setStyle({
                       weight: 3,
                       color: '#000',
                       dashArray: '',

                   });

                   if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                       layer.bringToFront();
                   }

                   info.update(layer.feature.properties);
               }

               function resetHighlight(e) { //highlight the area selected
                   geojson.resetStyle(e.target);
                   info.update();
               }
               function zoomToFeature(e) { //when you click on the state the map will zoom.
                   map.fitBounds(e.target.getBounds());
               }

               function onEachFeature(feature, layer) {
                   layer.on({
                       mouseover: highlightFeature,
                       mouseout: resetHighlight,
                       click: zoomToFeature
                   });
               }

                geojson = L.geoJson(statesData,{
                  style: style,
                  onEachFeature: onEachFeature
                }).addTo(map);

                var info = L.control(); //L means leaflet control is an attribute

                info.onAdd = function (map) {
                    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
                    this.update();
                    return this._div;
                };

                // method that we will use to update the control based on feature properties passed
                info.update = function (props) {
                    console.log(props)
                    this._div.innerHTML = '<h4>Total Sales by state</h4>' +  (props ?
                        '<b>' + props.NAME + '</b><br />' + props.Sales + ' total sales '
                        : 'Hover over a state'); //Things that goes inside the pop-up window.
                };
                info.addTo(map);
            }

            else{
              console.log("incorrect color splitFlag")
            }
          }//end of Ready Function

      }

      //draw geographical boundries if not already drawn by sumbyArea
      if(obj.vizualizationConfiguration.geographyBoundariesFlag == true && !obj.vizualizationConfiguration.sumAreas){
        console.log("we inside this bid")
        d3.queue() //used to ensure that all data is loaded into the program before execution
          .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
          .await(ready)

          function style(feature){
            return{
              fillColor: "lightgrey",
              weight:1,
              opacity:1,
              color: 'darkgrey',
              dashArray: '1',
              fillOpacity: .2
            };
          }

          function ready(error, data){

            var statesData = data;
            var geojson;
            geojson = L.geoJson(statesData,{
              style:style
            }).addTo(map);
      }
    }
    //discretes loop
      for(var i=0; i < obj.vizualizationConfiguration.discretes.length; i++){

        console.log("valid for loop")

        var discreteConfig = obj.vizualizationConfiguration.discretes[i]

        var valueArray = [];
        var magnitude = [];
        var attributesArray = [];


        console.log(discreteConfig);

        _.each(obj.discreteData[i], function(dataRow){
          valueArray.push([+dataRow[discreteConfig.latColumn], +dataRow[discreteConfig.longColumn]])
          magnitude.push([+dataRow[discreteConfig.attributeColumns.magnitude]]);
          var attributes={};
          attributes[discreteConfig.attributeColumns.category] = dataRow[discreteConfig.attributeColumns.category];
          attributes[discreteConfig.attributeColumns.magnitude] = dataRow[discreteConfig.attributeColumns.magnitude];

          for(var x =0; x< discreteConfig.attributeColumns.additional.length; x++){
            attributes[discreteConfig.attributeColumns.additional[x]] = dataRow[discreteConfig.attributeColumns.additional[x]]
          }

          console.log(attributes)
          attributesArray.push(attributes)
        })

        console.log(attributesArray);
        console.log(valueArray);
        console.log(magnitude);

        if(discreteConfig.continuousFlag == true){

          var heat = L.heatLayer(valueArray,{
										 radius: 20,
										 blur: 5,
										 maxZoom: 10,
								 }).addTo(map);

          console.log("do continuous")
        }

        else{ //colored bubbles
              if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == true)
              {
                var categorykey = discreteConfig.attributeColumns.category;
                var magnitudekey = discreteConfig.attributeColumns.magnitude;

                function getRadius(data, i){
                  return data;
                }


                function Description(locations){ //adding description for popup window over mouseove
                  var str = "";
                  for (var key in locations) {
                    if (locations.hasOwnProperty(key)) {
                      str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
                    }
                  }
                  return str;
                }

                  console.log("True True")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: colorScale(obj.discreteData[i][j][categorykey]),
                      fillColor: colorScale(obj.discreteData[i][j][categorykey]),
                      fillOpacity: .5,
                      radius: getRadius(obj.discreteData[i][j][magnitudekey],j),
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                        this.openPopup();
                      }).on('mouseout', function (e) {
                            this.closePopup();
                          }).bringToFront().addTo(map);
                }


              }

              else if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == false)
              {

                function Description(locations){ //adding description for popup window over mouseove
                  var str = "";
                  for (var key in locations) {
                    if (locations.hasOwnProperty(key)) {
                      str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
                    }
                  }
                  return str;
                }

                var categorykey = discreteConfig.attributeColumns.category;

                  console.log("True False")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: colorScale(obj.discreteData[i][j][categorykey]),
                      fillColor: colorScale(obj.discreteData[i][j][categorykey]),
                      fillOpacity: 1,
                      radius: 100,
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                        this.openPopup();
                      }).on('mouseout', function (e) {
                            this.closePopup();
                          }).addTo(map);
                }

              }

              else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == true)
              {

                  function getRadius(data, i){
                    return data;
                  }

                  function Description(locations){ //adding description for popup window over mouseove
                    var str = "";
                    for (var key in locations) {
                      if (locations.hasOwnProperty(key)) {
                        str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
                      }
                    }
                    return str;
                  }

                  var magnitudekey = discreteConfig.attributeColumns.magnitude;

                  console.log("false True")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: discreteConfig.colorScheme,
                      fillColor: discreteConfig.colorScheme,
                      fillOpacity: .7,
                      radius: getRadius(obj.discreteData[i][j][magnitudekey],j),
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                        this.openPopup();
                      }).on('mouseout', function (e) {
                            this.closePopup();
                          }).addTo(map);
                }
              }

              else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == false)
              {
                function Description(locations){ //adding description for popup window over mouseove
                  var str = "";
                  for (var key in locations) {
                    if (locations.hasOwnProperty(key)) {
                      str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
                    }
                  }
                  return str;
                }

                  console.log("False False")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: discreteConfig.colorScheme,
                      fillColor: discreteConfig.colorScheme,
                      fillOpacity: 1,
                      radius: 15,
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                        this.openPopup();
                      }).on('mouseout', function (e) {
                            this.closePopup();
                          }).addTo(map);
                }
              }

          }//end of else continuous flag

      }//end of descretes loop

  }  //End of Slippy

  else if(obj.vizualizationConfiguration.defaultMapType == "svg"){
    console.log("Inside SVG")

    var svg = d3.select("div").append("svg")
       .attr("width", 1000)
       .attr("height", 800)
       .attr("id", "svg")

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

        var div = d3.select("div").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);
      //draw map here
      if(obj.vizualizationConfiguration.sumAreas){
        console.log("MapFace: SumByArea");

          if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == false){
            console.log("colorSchemeSplitFlag is set to false");

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
              }).on("mouseover", function(d) {

                var geographyData = _.find(obj.data, function (dataRow){
                  return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
                });

                console.log(geographyData)

                var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
                var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];

                console.log(value);
                console.log(state);

                if(geographyData){
                  div.transition()
                  	   .duration(200)
                       .style("opacity", .9)
                     var text = "State: "+ state +"<br/>" + obj.vizualizationConfiguration.sumAreas.popupTextDescription + value;
                       div.html(text)
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                }
                else{
                  div.transition()
                  	   .duration(200)
                       .style("opacity", .9)
                     var text = "No data assigned";
                       div.html(text)
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                }
          	})
              .on("mouseout", function(d) {
                  div.transition()
                     .duration(500)
                     .style("opacity", 0);
              });

          }
          else{
            console.log("colorsccheme split flag is set to true")

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
                  return ("lightgrey");
                }
              }).on("mouseover", function(d) {

                var geographyData = _.find(obj.data, function (dataRow){
                  return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
                });

                console.log(geographyData)

                var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
                var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];

                console.log(value);
                console.log(state);

                if(geographyData){
                  div.transition()
                  	   .duration(200)
                       .style("opacity", .9)
                     var text = "State: "+ state +"<br/>" + obj.vizualizationConfiguration.sumAreas.popupTextDescription + value;
                       div.html(text)
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                }
                else{
                  div.transition()
                  	   .duration(200)
                       .style("opacity", .9)
                     var text = "No data assigned";
                       div.html(text)
                         .style("left", (d3.event.pageX) + "px")
                         .style("top", (d3.event.pageY - 28) + "px");
                }
          	})
              .on("mouseout", function(d) {
                  div.transition()
                     .duration(500)
                     .style("opacity", 0);
              });
          }


      }

      console.log(obj.vizualizationConfiguration.discretes.length)


      if(obj.vizualizationConfiguration.geographyBoundariesFlag == true && !obj.vizualizationConfiguration.sumAreas){
        console.log("here")
        svg.selectAll("path") //assign the projected map to the svg in HTML
          .data(usMap.features)//.data is given from the argument from the ready function, includes features on the map
          .enter()
          .append("path")
          .attr("d", geoPath)
          .style("stroke", "#808080") //These two lines are used to create the outline of regions on the map whether its states or counties... etc
          .style("stroke-width", "2")
          .attr("fill","lightgrey")
        }

      for(var i = 0; i < obj.vizualizationConfiguration.discretes.length; i++){

        var discreteConfig = obj.vizualizationConfiguration.discretes[i];

        var valueArray = [];
        var magnitude = [];


        console.log(discreteConfig.attributeColumns.category)

        _.each(obj.discreteData[i], function(dataRow){

          var attributes = {};
          attributes[discreteConfig.attributeColumns.category] = dataRow[discreteConfig.attributeColumns.category];
          attributes[discreteConfig.attributeColumns.magnitude] = dataRow[discreteConfig.attributeColumns.magnitude];

          console.log(attributes)

          valueArray.push([+dataRow[discreteConfig.longColumn], +dataRow[discreteConfig.latColumn], dataRow[discreteConfig.attributeColumns.category], +dataRow[discreteConfig.attributeColumns.magnitude], attributes])
          magnitude.push([+dataRow[discreteConfig.attributeColumns.magnitude]]);

        })

        console.log(valueArray)

        var max = d3.max(magnitude, function(d) { return d;});
        var min = d3.min(magnitude, function(d) { return d;});

        var rScale = d3.scaleLinear();
        rScale.domain([max, min]).range([discreteConfig.minBubbleSize, discreteConfig.maxBubbleSize]); //reverse min max for proper magnitude distribution for bubble sizes.

        console.log("discreteConfig "+discreteConfig)
        console.log("valueArray "+valueArray)
        console.log("magnitude "+magnitude)
        console.log("max "+max)
        console.log("min "+min)

      if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == false){

        console.log("true false")
        svg.selectAll("circle")
          .data(valueArray, function(d){
            return d;
          }).enter()
          .append("circle")
          .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
          .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
          .attr("r", "2px")
          .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
          .attr("opacity", .75)
          .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])}) //These two lines are used to create the outline of regions on the map whether its states or counties... etc
          .style("stroke-width", "2")
          .on("mouseover", function(d) {

            // var geographyData = _.find(obj.data, function (dataRow){
            //   return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
            // });
            //
            // console.log(geographyData)
            //
            // var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
            // var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];
            //
            // console.log(value);
            // console.log(state);

              div.transition()
                   .duration(200)
                   .style("opacity", .9)
                     var descriptionText = Description(d[4])
                   div.html(descriptionText)
                     .style("left", (d3.event.pageX) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");

                 })

          .on("mouseout", function(d) {
              div.transition()
                 .duration(500)
                 .style("opacity", 0);
          });
      }
      else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == true){
        console.log("False True")



        svg.selectAll("circle")
          .data(valueArray, function(d){
            return d;
          }).enter()
          .append("circle")
          .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
          .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
          .attr("r", function(d){ console.log(rScale(d[3])); return rScale(d[3])})
          .attr("fill", obj.vizualizationConfiguration.discretes[i].colorScheme)
          .attr("opacity", .75)
          .style("stroke", obj.vizualizationConfiguration.discretes[i].colorScheme) //These two lines are used to create the outline of regions on the map whether its states or counties... etc
          .style("stroke-width", "2")
          .on("mouseover", function(d) {




            // var geographyData = _.find(obj.data, function (dataRow){
            //   return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
            // });
            //
            // console.log(geographyData)
            //
            // var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
            // var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];
            //
            // console.log(value);
            // console.log(state);

              div.transition()
                   .duration(200)
                   .style("opacity", .9)
                     var descriptionText = Description(d[4])
                   div.html(descriptionText)
                     .style("left", (d3.event.pageX) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");

                 })

          .on("mouseout", function(d) {
              div.transition()
                 .duration(500)
                 .style("opacity", 0);
          });

      }
      else if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == true){
        console.log("True True")

        console.log(valueArray)

        svg.selectAll("circle")
          .data(valueArray, function(d){
            return d;
          }).enter()
          .append("circle")
          .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
          .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
          .attr("r", function(d){ console.log(d[3] + " translates to " + rScale(d[3])); return rScale(d[3])})
          .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
          .attr("opacity", .4)
          .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])}) //These two lines are used to create the outline of regions on the map whether its states or counties... etc
          .style("stroke-width", "2")
          .on("mouseover", function(d) {


            // var geographyData = _.find(obj.data, function (dataRow){
            //   return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
            // });
            //
            // console.log(geographyData)
            //
            // var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
            // var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];
            //
            // console.log(value);
            // console.log(state);

              div.transition()
                   .duration(200)
                   .style("opacity", .9)
                     var descriptionText = Description(d[4])
                   div.html(descriptionText)
                     .style("left", (d3.event.pageX) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");

                 })

          .on("mouseout", function(d) {
              div.transition()
                 .duration(500)
                 .style("opacity", 0);
          });
      }
      else {

        svg.selectAll("circle")
          .data(valueArray, function(d){
            return d;
          }).enter()
          .append("circle")
          .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
          .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
          .attr("r", 3)
          .attr("fill", obj.vizualizationConfiguration.discretes[i].colorScheme)
          .attr("opacity", .75)
          .style("stroke", obj.vizualizationConfiguration.discretes[i].colorScheme) //These two lines are used to create the outline of regions on the map whether its states or counties... etc
          .style("stroke-width", "2")
          .on("mouseover", function(d) {

            // var geographyData = _.find(obj.data, function (dataRow){
            //   return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[obj.vizualizationConfiguration.sumAreas.mapColumns[0]]);
            // });
            //
            // console.log(geographyData)
            //
            // var value = +geographyData[obj.vizualizationConfiguration.sumAreas.valueColumn];
            // var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];
            //
            // console.log(value);
            // console.log(state);

              div.transition()
                   .duration(200)
                   .style("opacity", .9)
                     var descriptionText = Description(d[4])
                   div.html(descriptionText)
                     .style("left", (d3.event.pageX) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");

                 })

          .on("mouseout", function(d) {
              div.transition()
                 .duration(500)
                 .style("opacity", 0);
          });

      }

      counter++;
      console.log("loop Count: " + counter)
      }//end of discretes loop

    }//end of ready function

  } //end of SVG

}//end of renderChart


document.getElementById("1-slippy-discrete-two").addEventListener('click', function (){
  jsonData = "1-slippy-discrete-two"

  emptyMapContents()

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})



document.getElementById("2-slippy-area").addEventListener('click', function(){

  emptyMapContents()

  jsonData = "2-slippy-area"

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})


document.getElementById("5-slippy-area-discrete").addEventListener('click', function(){

  emptyMapContents()

  jsonData = "5-slippy-area-discrete"

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})



document.getElementById("3-svg-area").addEventListener('click', function(){
  console.log(d3.select("svg"))

    emptyMapContents()


    jsonData = "3-svg-area"

    renderChart(testObjects[jsonData])
})



document.getElementById("4-svg-discrete").addEventListener('click', function(){

  emptyMapContents()

  jsonData = "4-svg-discrete"
  renderChart(testObjects[jsonData])
})

document.getElementById("6-svg-area-discrete").addEventListener('click', function(){
  console.log(d3.select("svg"))

    emptyMapContents()


    jsonData = "6-svg-area-discrete"

    renderChart(testObjects[jsonData])
})




renderChart(testObjects["3-svg-area"]);
