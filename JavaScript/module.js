function renderChart(obj){

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
                    weight:1,
                    opacity:1,
                    color: 'darkgrey',
                    dashArray: '1',
                    fillOpacity: .7
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
                        '<b>' + props[obj.vizualizationConfiguration.sumAreas.PopupInfo] + '</b><br />' + props.Sales + ' total sales '
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

        console.log(discreteConfig);

        _.each(obj.discreteData[i], function(dataRow){
          valueArray.push([+dataRow[discreteConfig.latColumn], +dataRow[discreteConfig.longColumn]])
          magnitude.push([+dataRow[discreteConfig.attributeColumns.magnitude]]);
        })

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

        else{
              if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == true)
              {
                var categorykey = discreteConfig.attributeColumns.category;
                var magnitudekey = discreteConfig.attributeColumns.magnitude;

                function getRadius(data, i){
                  return data;
                }

                  console.log("True True")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: colorScale(obj.discreteData[i][j][categorykey]),
                      fillColor: colorScale(obj.discreteData[i][j][categorykey]),
                      fillOpacity: 1,
                      radius: getRadius(obj.discreteData[i][j][magnitudekey],j),
                  }).addTo(map);
                }
              }

              else if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == false)
              {

                var categorykey = discreteConfig.attributeColumns.category;

                  console.log("True False")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: colorScale(obj.discreteData[i][j][categorykey]),
                      fillColor: colorScale(obj.discreteData[i][j][categorykey]),
                      fillOpacity: 1,
                      radius: 100,
                  }).addTo(map);
                }
              }

              else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == true)
              {

                  function getRadius(data, i){
                    return data;
                  }

                  var magnitudekey = discreteConfig.attributeColumns.magnitude;

                  console.log("false True")
                  for(var j = 0; j < valueArray.length; j++){
                    var circle = L.circle(valueArray[j], {
                      color: 'red',
                      fillColor: '#f03',
                      fillOpacity: 1,
                      radius: getRadius(obj.discreteData[i][j][magnitudekey],j),
                  }).addTo(map);
                }
              }

              else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == false)
              {
                  console.log("False False")
                  for(var i = 0; i < valueArray.length; i++){
                    var circle = L.circle(valueArray[i], {
                      color: 'red',
                      fillColor: '#f03',
                      fillOpacity: 1,
                      radius: 15,
                  }).addTo(map);
                }
              }

          }//end of else continuous flag

      }//end of descretes loop

  }  //End of Slippy

  else if(obj.vizualizationConfiguration.defaultMapType == "svg"){
      console.log("inside of svg");

      //draw map here

      if(obj.vizualizationConfiguration.sumAreas){
        console.log("MapFace: SumByArea");
      }

      for(var i =0; i<obj.vizualizationConfiguration.discretes.length; i++){
        var discreteConfig = obj.vizualizationConfiguration.discrete[i]

        var valueArray = [];
        var magnitude = [];

        _.each(obj.discreteData[i], function(dataRow){
          valueArray.push([+dataRow[discreteConfig.longColumn], +dataRow[discreteConfig.latColumn], dataRow[discreteConfig.attributeColumns.category], +dataRow[discreteConfig.attributeColumns.magnitude]])
          magnitude.push([+dataRow[discreteConfig.attributeColumns.magnitude]]);
        })
          //all discrete is going inside for loop.
          if(discreteConfig.continousFlag == true){
            //color the bubbles in here
            console.log("inside continuous")

          }

      }//end of discretes loop

  } //end of SVG

}//end of renderChart

renderChart(testObjects["1-slippy-discrete-two"])
