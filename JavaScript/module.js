function renderChart(obj){

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


      if(obj.vizualizationConfiguration.defaultMapFace == "sumByArea"){
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
      else if(obj.vizualizationConfiguration.defaultMapFace == "discrete"){
        console.log("MapFace: discrete");

        if(obj.vizualizationConfiguration.geographyBoundariesFlag == true){

          d3.queue() //used to ensure that all data is loaded into the program before execution
            .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
            .await(ready)

            function style(feature){
              return{
                fillColor: "black",
                weight:1,
                opacity:1,
                color: 'darkgrey',
                dashArray: '1',
                fillOpacity: .4
              };
            }

            function ready(error, data){

              var statesData = data;
              var geojson;

              geojson = L.geoJson(statesData,{
                style:style
              }).addTo(map);

            } //end of ready function
        } //end of if boundryflag is true

        console.log("Made it through and still colored")



      } //end of discrete block


      else if(obj.vizualizationConfiguration.defaultMapFace == "continuous"){
        console.log("MapFace: continuous");
      }
      else{
        console.log("Incorrect MapFace");
      }
  }  //End of Slippy

  else if(obj.vizualizationConfiguration.defaultMapType == "svg"){
      console.log("inside of svg");
      if(obj.vizualizationConfiguration.defaultMapFace == "sumByArea"){
        console.log("MapFace: SumByArea");
      }
      else if(obj.vizualizationConfiguration.defaultMapFace == "discrete"){
        console.log("MapFace: discrete");
      }
      else if(obj.vizualizationConfiguration.defaultMapFace == "continuous"){
        console.log("MapFace: continuous");
      }
      else{
        console.log("incorrect MapFace")
      }




  }

  else{
    console.log("not a correct maptype")
  }







}

renderChart(testObjects["1-slippy-discrete-two"])
