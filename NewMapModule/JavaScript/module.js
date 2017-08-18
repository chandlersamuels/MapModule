/**
RI360 v3 Map Module

The module is designed to dynamically react to a json object.
The module supports both Slippy and SVG map face functionality.
The module is capable of handling summarized by area, discrete, and heat maps.
*/

function emptyMapContents() {
  var node = document.getElementById("mapContents")
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

/**
  renderChart is the driving function of the module
  obj holds the object that contains all data to necessary to build the map dynamically
*/

function renderChart(obj) {

  //function to add descriptions easily to pop-up window
  function Description(locations) {
    var str = "";
    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>";
      }
    }
      return str;
    }

    //These are colorbrewer color scales.
  var colorScale1 = d3.scaleOrdinal()
        .range(['#C0C0C0', '#808080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);
  var colorScale = d3.scaleOrdinal()
        .range(['#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF','#000080','#FF00FF','#800080','#CD5C5C','#F08080','#E9967A','#34495E','#5DADE2','#AF7AC5']);


/*
   Code is broken into two main map faces Slippy and SVG. Inside each of these we are dealing with different map types: Summarized by Area and Discrete Data points.
   The goal is to be able to allow the user to select different map faces and map types and have the module react dynamically.

   Slippy maps allow for the user to click inside of the map and drag it around. Slippy maps also allow for zoom capabilities.

   SVG maps are static and only offer the user minimal interaction with pop-up interactions. You cannot zoom with a SVG map or drag it around.
*/

  //The defaultMapType is set to slippy
  if(obj.vizualizationConfiguration.defaultMapType == "slippy") {
    console.log("inside of slippy");

    // initialize Slippy Map
    var tileDisplay = obj.vizualizationConfiguration.slippy.tileUrl,
      zoomLevel=obj.vizualizationConfiguration.slippy.zoomLevel,
      Latitude =obj.vizualizationConfiguration.slippy.defaultLatitude,
      Longitude =obj.vizualizationConfiguration.slippy.defaultLongitude;

    //if condition to deal with latitdue and longitude being empty
    if(Latitude.toString().length>0 && Longitude.toString().length>0) {
      //For slippy maps this sets the tiles lat/long and zoomLevel
      var map = L.map('mapid').setView([Latitude, Longitude], zoomLevel);
      //adding tileLayer to map
      L.tileLayer(tileDisplay).addTo(map);
    } else {
      console.log("Incorrect Lat/Long input - reverting to standard view")
      var map = L.map('mapid').setView([39.7392, -104.9903], 4);
      L.tileLayer(tileDisplay).addTo(map);
    }

    /**
      The above code will create the map and become visible in the browser.
      We next want to add some detail to map ex. Boundries.

      In order to create boundries it is necessary to have your shapefile converted into a geojson object.
      Do this by following the shapefile to geojson documentation.

      It is necessary to have the boundries drawn before you color any part of the map.
    */


    if(obj.vizualizationConfiguration.sumAreas) {
      console.log("MapFace: SumByArea");
      console.log(obj.dataConfiguration.columns[0].title)

      //used to ensure that all data is loaded into the program before execution
      d3.queue()
        .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
        .await(ready)

      function ready(error, data) {
        var dataArray = [];
        //looping through the geojson object and matching on the cooresponding boundry region. ex. USPSP
        _.each(data.features, function(feature) {
          var geographyData = _.find(obj.data.pivot[0].data, function (dataRow) {
            return (feature.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[1]);
          });
        //If There is a match - add data to the object. This data will usually be what you are color coding the map based on.
        if (geographyData) {
          feature.properties[obj.dataConfiguration.columns[0].title] = geographyData[2];
          dataArray.push(geographyData[2])
        } else {
            feature.properties[obj.dataConfiguration.columns[0].title] = 0;
          }
        })

        var statesData = data;
        console.log(statesData)
        var geojson;

        /**
          The map has now been added to the browser and all new data is added to the geojson object.
          We are now going to color code the map.

          There is a conditional statement that checks to see if the colorSchemeSplitFlag is set to true or false.
          colorSchemeSplitFlag will decide if there is one or two color schemes.

          Each block of code will fill in geographic regions based on a certain peice of data, create a pop-up window, and div.
        */

        //The user doesn't want to have multiple color schemes
        if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == false) {
          console.log("ColorSchemeSplitFlag: False")
          console.log(dataArray)

          var colorScheme= obj.vizualizationConfiguration.sumAreas.colorScheme;
          var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

          console.log(colorScheme)
          console.log(colorRange)

          var income_color={};

          //This is the data that is color coding the map
          var result = dataArray.map(Number)

          console.log(result);

          //max and min grabbed for external range function.
          var max = d3.max(result, function(d){return d;});
          var min = d3.min(result, function(d){return d;});

          console.log(max);
          console.log(min);

          //Holds range values decided for coloring the map and legendText
          var income_domain = [];

          //used to color the map
          income_domain = range(max, min, colorRange);

          //income_domain converted to string for legend purposes
          legendText = income_domain.map(String).reverse()

          console.log(income_domain)

          //colorbrewer example- takes in the ranges and adds colors to each color.
          income_color = d3.scaleLinear()
            .domain(income_domain)
            .range(colorbrewer[colorScheme][colorRange]);

          function style(feature) {
            //if the boundry data is equal to 0 color the region white
            if(feature.properties[obj.dataConfiguration.columns[0].title] == 0) {
              return {
                fillColor: "white",
                weight:1,
                opacity:1,
                color: 'darkgrey',
                dashArray: '1',
                fillOpacity: .5
              };
            } else {
                return {
                  //if the boundry data is not equal to 0 call income_color and color the region.
                  fillColor: income_color(feature.properties[obj.dataConfiguration.columns[0].title]),
                  weight:1,
                  opacity:1,
                  color: 'darkgrey',
                  dashArray: '1',
                  fillOpacity: .5
                };
            }
          }

        /**
          Below are a series of functions used to allow for pop-up functionality and onhover abilities.
        */
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

          //Add color to the map and functionality like onhover and popup window to map.
          geojson = L.geoJson(statesData, {
            style:style,
            onEachFeature: onEachFeature
          }).addTo(map);

          var info = L.control();

          info.onAdd = function (map) {
            // create a div with a class "info"
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
          };

          // adding info to the pop-up window.
          info.update = function (props) {
            console.log(props);
            this._div.innerHTML = '<h4>Total Sales by state</h4>' +  (props ?
              '<b>' + props.NAME + '</b><br />' + props[obj.dataConfiguration.columns[0].title] + obj.dataConfiguration.columns[0].columnType
              : 'Hover over a state');
          };

          info.addTo(map);

          //User wants to have a legend
          if(obj.vizualizationConfiguration.legend.legendFlag == true) {
            //legend positions include: bottomleft, bottomright, topleft, topright, right
            var legend = L.control({position: obj.vizualizationConfiguration.legend.legendPosition}); //

            //creating the div for the legend
            legend.onAdd = function (map) {
              var div = L.DomUtil.create('div', 'info legend'),
              labels = [];

              div.innerHTML += '<h4>'+ obj.vizualizationConfiguration.legend.legendTitle + '</h4>'

              // loop through the legend text and generate a label with a colored square for each index
              for (var i = 0; i < legendText.length; i++) {
                  div.innerHTML +=
                    '<i style="background:' + income_color(legendText[i]) + '"></i> ' +
                    legendText[i] + (legendText[i + 1] ? '&ndash;' + '<br>' : '-');
                }
              return div;
              };

              legend.addTo(map);

            }
        }
        //The user wants to have multiple color schemes
        else if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == true) {

              var income_domainPOS = []
              var income_domainNEG = []

              //this is the data that is color coding the map
              var result = dataArray.map(Number)


              var max = d3.max(result, function(d){return d;});
              var min = d3.min(result, function(d){return d;});

              var colorSchemePOS= obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.positiveColorScheme;
              var colorSchemeNEG= obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.negativeColorScheme;

              var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

              //holds different value scales one above breakpoint and one below breakpoint.
              income_domainNEG = rangeNEG(0, min, colorRange);
              income_domainPOS = range(max, 0, colorRange);

              //convert to string for legend purposes
              legendText1 = income_domainPOS.map(String).reverse()
              legendText2 = income_domainNEG.map(String).reverse()

              //assigning colors to range of values declared in incomeDomainPOS and incomeDomainNEG- Color Brewer
              income_colorPOS = d3.scaleLinear() //scaleLinear for D3.V4
                .domain(income_domainPOS)
                .range(colorbrewer[colorSchemePOS][colorRange]);

              income_colorNEG = d3.scaleLinear() //scaleLinear for D3.V4
                .domain(income_domainNEG)
                .range(colorbrewer[colorSchemeNEG][colorRange]);


                /**
                  The following functions are used to assign colors to their corresponding data
                   and add functionality such as popup windows and onHover capabilities
                */

              function style(feature) {
                if(feature.properties[obj.dataConfiguration.columns[0].title] == undefined) {
                  return {
                    fillColor: "blue", //conf
                    weight: 2,
                    opacity: 1,
                    color: 'darkgrey',
                    dashArray: '1',
                    fillOpacity: .2
                  };
                 } else {
                     if(feature.properties[obj.dataConfiguration.columns[0].title] < obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.breakpoint) {
                       return {
                         fillColor: income_colorNEG(feature.properties[obj.dataConfiguration.columns[0].title]), //conf
                         weight: 2,
                         opacity: 1,
                         color: 'darkgrey',
                         dashArray: '1',
                         fillOpacity: .5
                       };
                     } else {
                         return {
                           fillColor: income_colorPOS(feature.properties[obj.dataConfiguration.columns[0].title]), //conf
                           weight: 2,
                           opacity: 1,
                           color: 'darkgrey',
                           dashArray: '1',
                           fillOpacity: .5
                         };
                       }
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

               //adding color to each region, pop-up functionality, and on-hover capabilities
                geojson = L.geoJson(statesData, {
                  style: style,
                  onEachFeature: onEachFeature
                }).addTo(map);

                //L means leaflet control is an attribute
                var info = L.control();

                // create a div with a class "info"
                info.onAdd = function (map) {
                    this._div = L.DomUtil.create('div', 'info');
                    this.update();
                    return this._div;
                };

                // method that we will use to update the control based on feature properties passed
                info.update = function (props) {
                  this._div.innerHTML = obj.dataConfiguration.columns[0].dbColumnTitle +  (props ?
                    '<b>' + props.NAME + '</b><br />' + props[obj.dataConfiguration.columns[0].title] + obj.dataConfiguration.columns[0].columnType
                      : 'Hover over a state');
                };

                info.addTo(map);

                //Adding legends
                if(obj.vizualizationConfiguration.legend.legendFlag == true) {
                  var legendPOS = L.control({position: obj.vizualizationConfiguration.legend.legendPosition});
                  legendPOS.onAdd = function (map) {
                    var div = L.DomUtil.create('div', 'info legend'),
                    labels = [];
                    div.innerHTML += '<h4>'+obj.vizualizationConfiguration.legend.legendTitle+'</h4>'
                    // loop through legendText and generate a label with a colored square for each interval
                    for (var i = 0; i < legendText1.length; i++) {
                      div.innerHTML +=
                        '<i style="background:' + income_colorPOS(legendText1[i]) + '"></i> ' +
                          legendText1[i] + (legendText1[i + 1] ? '&ndash;' + '<br>' : '-');
                      }
                    return div;
                  };

                  legendPOS.addTo(map);

                //adding second legend for Neg values

                  var legendNEG = L.control({position: obj.vizualizationConfiguration.legend.legend2Position}); //
                  legendNEG.onAdd = function (map) {
                    var div = L.DomUtil.create('div', 'info legend'),
                    labels = [];
                    div.innerHTML += '<h4>'+obj.vizualizationConfiguration.legend.legend2Title+'</h4>'
                    // loop through our legend text and generate a label with a colored square for each interval
                    for (var i = 0; i < legendText2.length; i++) {
                      div.innerHTML +=
                        '<i style="background:' + income_colorNEG(legendText2[i]) + '"></i> ' +
                          legendText2[i] + (legendText2[i + 1] ? '&ndash;' + '<br>' : '-');
                      }
                      return div;
                  };

                  legendNEG.addTo(map);

              } //end of Legend Flag
            } //End of colorSchemeSplitFlag is true
            else{
              console.log("incorrect color splitFlag")
            }
          }//end of Ready Function
      } //Summarized by Area code is complete

      /*
        *The next part of the code is going to deal with discrete data points for slippy.
        *The immediate following code will draw a map if the sumarized by area data is not filled out.
        The code will also check to see if sumarized by area was drawn, if so then it wont redraw the map.
      */

      if(obj.vizualizationConfiguration.geographyBoundariesFlag == true && !obj.vizualizationConfiguration.sumAreas) {
        //used to ensure that all data is loaded into the program before execution
        d3.queue()
          .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.geoJsonUrl)
          .await(ready)

        function style(feature) {
          return{
            fillColor: "lightgrey",
            weight:1,
            opacity:1,
            color: 'darkgrey',
            dashArray: '1',
            fillOpacity: .2
          };
        }

        function ready(error, data) {
          var statesData = data;
          var geojson;
          geojson = L.geoJson(statesData, {
            style:style
          }).addTo(map);
        }
      }

    //Using a loop in order to deal with more than one discrete data set
    for(var i=0; i < obj.vizualizationConfiguration.discretes.length; i++) {
      console.log("valid for loop")

      var discreteConfig = obj.vizualizationConfiguration.discretes[i]

      var valueArray = [];
      var categoryArray = [];
      var attributesArray = [];
      var magnitudeArray= [];

      console.log(discreteConfig);

      var latColumn = _.find(obj.discreteData[i].columns, function(col){ return col.dbColumn == discreteConfig.latColumn}).field; //bf
      var longColumn = _.find(obj.discreteData[i].columns, function(col){ return col.dbColumn == discreteConfig.longColumn}).field;//bg

      var magnitudeColumn = {}
      if (discreteConfig.magnitudeFlag) {
        magnitudeColumn = _.find(obj.discreteData[i].columns, function(col){ return col.dbColumn == discreteConfig.attributeColumns.magnitude});
      }

      var categoryColumn= {}
      if (discreteConfig.categoryFlag) {
        categoryColumn = _.find(obj.discreteData[i].columns, function(col){ return col.dbColumn == discreteConfig.attributeColumns.category});
      }

      console.log(longColumn);
      console.log(categoryColumn);
      console.log(magnitudeColumn);

      _.each(obj.discreteData[i].rows, function(dataRow) {
        //populate valueArray
        valueArray.push([+dataRow[longColumn], +dataRow[latColumn]]);
        //If categoryFlag is turned on add to array
        if(discreteConfig.categoryFlag) {
          categoryArray.push([dataRow[categoryColumn.field]]);
        }

        //If categoryFlag is turned on add to array
        if(discreteConfig.magnitudeFlag) {
          magnitudeArray.push([dataRow[magnitudeColumn.field]]);
        }

        var attributes={};
        if(discreteConfig.categoryFlag) {
          attributes[categoryColumn.title] = dataRow[categoryColumn.field];
        }

        if(discreteConfig.magnitudeFlag) {
          attributes[magnitudeColumn.title] = dataRow[magnitudeColumn.field];
        }

        for(var x =0; x< discreteConfig.attributeColumns.additional.length; x++) {
          var column = _.find(obj.discreteData[i].columns, function(col){ return col.dbColumn == discreteConfig.attributeColumns.additional[x]})
          attributes[column.title] = dataRow[column.field]
        }

        console.log(attributes);
        attributesArray.push(attributes);

     });
        // console.log(attributesArray);
        // create square discrete points
        if(discreteConfig.shapeForm == "rectangle") {
          var newValueArray = [];
          for (var z = 0; z < valueArray.length; z++) {
            newValueArray[z] = [valueArray[z], [valueArray[z][0] - .003, valueArray[z][1] - .005]]
          }
        }

        console.log(newValueArray);
        console.log(valueArray);
        console.log(categoryArray);
        console.log(magnitudeArray);
        console.log(attributesArray)

        /**
          The next conditional statement checks to see if the discrete points
          should be made into a heat map or just regular points.
        */

        if(discreteConfig.continuousFlag == true) {
          console.log("do continuous")

          var heat = L.heatLayer(valueArray,{
										 radius: 15,
										 blur: 5,
										 maxZoom: 15,
								 }).addTo(map);

          console.log("do continuous")

        }  /**
          Since the user has different options for types of discrete points we use different conditional statements to deal with the varying possibilities
          The two different options we allow the user to customize is the category flag which will change the color of the bubbles and the magnitude flag which will change the size of the bubbles.
        */
        else {
          //If the user selects both categoryFlag and Magnitude Flag
          if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == true) {
            console.log("True True")
            var categorykey = discreteConfig.attributeColumns.category;
            var magnitudekey = discreteConfig.attributeColumns.magnitude;

            function getRadius(data, i) {
              return data;
            }

                //adding description for popup window over mouseove
            function Description(locations) {
              var str = "";
              for (var key in locations) {
                if (locations.hasOwnProperty(key)) {
                  str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
                }
              }
              return str;
            }

            /**
              category flag and magnitude flag are set to true so we call external functions when setting the colors and radius of each discrete point

              There are two conditional if statement that are used to check to see if the user wants circle markers or rectangle markers.
            */

            if(discreteConfig.shapeForm == "circle") {
              for(var j = 0; j < valueArray.length; j++) {
                var circle = L.circle(valueArray[j], {
                  color: colorScale(categoryArray[j]),
                  fillColor: colorScale(categoryArray[j]),
                  fillOpacity: .5,
                  radius: getRadius(magnitudeArray[j],j),
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                    this.openPopup();
                    }).on('mouseout', function (e) {
                        this.closePopup();
                      }).bringToFront().addTo(map);
              }
            }

            //We use an if condition to check to see if the user wants a rectangle marker
            if(discreteConfig.shapeForm == "rectangle") {
              for(var j=0; j < valueArray.length; j++) {
                var rectangle = L.rectangle(newValueArray[j], {
                  color: colorScale(categoryArray[j]),
                  fillColor: colorScale(categoryArray[j]),
                  fillOpacity: .6,
                  weight: 2
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                        this.openPopup();
                      }).on('mouseout', function (e) {
                            this.closePopup();
                          }).bringToFront().addTo(map);
              }
            }
          }

          // category flag is set to true while magnitude flag is set to false
          else if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == false) {
            console.log("True False")
            var categorykey = discreteConfig.attributeColumns.category;

            function Description(locations) {
              var str = "";
              for (var key in locations) {
                if (locations.hasOwnProperty(key)) {
                  str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
                }
              }
              return str;
            }

            /**
              category flag is set to true so we call external function colorScale when setting the colors and radius of each discrete point

              There are two conditional if statement that are used to check to see if the user wants circle markers or rectangle markers.
            */

            if(discreteConfig.shapeForm == "circle") {
              for(var j = 0; j < valueArray.length; j++) {
                var circle = L.circle(valueArray[j], {
                  color: colorScale(categoryArray[j]),
                  fillColor: colorScale(categoryArray[j]),
                  fillOpacity: .5,
                  radius: 25,
                  }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                    this.openPopup();
                    }).on('mouseout', function (e) {
                        this.closePopup();
                      }).bringToFront().addTo(map);
              }
            }

          if(discreteConfig.shapeForm == "rectangle") {
            for(var j=0; j < valueArray.length; j++) {
              var rectangle = L.rectangle(newValueArray[j], {
                color: colorScale(categoryArray[j]),
                fillColor: colorScale(categoryArray[j]),
                fillOpacity: .6,
                weight: 2
                }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                      this.openPopup();
                    }).on('mouseout', function (e) {
                          this.closePopup();
                        }).bringToFront().addTo(map);
            }
          }
        }

        /**
          magnitudeFlag is set to true so we call external function getRadius when setting the colors and radius of each discrete point

          There are two conditional if statement that are used to check to see if the user wants circle markers or rectangle markers.
        */
        else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == true) {
          console.log("false True")
          var magnitudekey = discreteConfig.attributeColumns.magnitude;

          function getRadius(data, i) {
            return data;
          }

          function Description(locations) {
            var str = "";
            for (var key in locations) {
              if (locations.hasOwnProperty(key)) {
                str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
              }
            }
            return str;
          }

          if(discreteConfig.shapeForm == "circle") {
            for(var j = 0; j < valueArray.length; j++) {
              var circle = L.circle(valueArray[j], {
                color: discreteConfig.colorScheme,
                fillColor: discreteConfig.colorScheme,
                fillOpacity: .7,
                radius: getRadius(magnitudeArray[j],j),
                }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                  this.openPopup();
                  }).on('mouseout', function (e) {
                    this.closePopup();
                    }).bringToFront().addTo(map);
            }
          }

          if(discreteConfig.shapeForm == "rectangle")  {
            for(var j=0; j < valueArray.length; j++) {
            var rectangle = L.rectangle(newValueArray[j], {
              color: discreteConfig.colorScheme,
              fillColor: discreteConfig.colorScheme,
              fillOpacity: .6,
              weight: 2
              }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                this.openPopup();
                  }).on('mouseout', function (e) {
                    this.closePopup();
                      }).bringToFront().addTo(map);
            }
          }
        }

        /**
          No flags are set so we will not make any external function calls when setting the color or size of the bubbles
          In this case we revert back to the given color schemes and default to the standard bubble radius of 25.

          There are two conditional if statement that are used to check to see if the user wants circle markers or rectangle markers.
        */

        else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == false)
        {
          console.log("False False")
          function Description(locations) {
            var str = "";
            for (var key in locations) {
              if (locations.hasOwnProperty(key)) {
                str += "<b>" + key + "</b>" + " : " + locations[key] + "<br>"
              }
            }
            return str;
          }

          if(discreteConfig.shapeForm == "circle") {
            for(var j = 0; j < valueArray.length; j++) {
              var circle = L.circle(valueArray[j], {
                color: discreteConfig.colorScheme,
                fillColor: discreteConfig.colorScheme,
                fillOpacity: .7,
                radius: 25,
              }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                  this.openPopup();
                }).on('mouseout', function (e) {
                      this.closePopup();
                    }).bringToFront().addTo(map);
            }
          }

          if(discreteConfig.shapeForm == "rectangle") {
            for(var j=0; j < valueArray.length; j++) {
              var rectangle = L.rectangle(newValueArray[j], {
                color: discreteConfig.colorScheme,
                fillColor: discreteConfig.colorScheme,
                fillOpacity: .6,
                weight: 2
                }).bindPopup(Description(attributesArray[j])).on('mouseover', function (e) {
                  this.openPopup();
                  }).on('mouseout', function (e) {
                    this.closePopup();
                    }).bringToFront().addTo(map);
            }
          }
        }

        /**
          The final portion of code in the slippy module is the ability to add a legend to the data points.
          The legend allows for you to change its position and user has options to alternate header and text.

          May still want to continue to see if creating different shapes is an option- didnt have much luck.
        */

        if(obj.vizualizationConfiguration.legend.legendFlag == true) {
          var legend = L.control({position: obj.vizualizationConfiguration.legend.legendPosition}); //
          legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend');
            div.innerHTML += '<h4>' +obj.vizualizationConfiguration.legend.legendTitle+ '</h4>'
            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < valueArray.length; i++) {
              div.innerHTML += '<i style="background:' + colorScale(categoryArray[i]) + '"></i> '
                + categoryArray[i] + (categoryArray[i] ? '' + '<br>' : '+');
            }
          return div;
          };
        legend.addTo(map);
        }

      }//end of else continuous flag
    }//end of descretes loop
  }  //End of Slippy


/**
  SVG maps are built with more of a D3js framework rather than a Leafletjs framework. The code for the SVG map will follow similar structure as the code for slippy map
  however their implementation is a little different because of we are dealing with an SVG rather than a dynamic map face.

  IMPORTANT: In order to create a map in SVG you must work with the topojson form of your shapefile. To see how to convert a shapefile to topojson please reference the documentation.
*/

  //If default map type is SVG
  else if(obj.vizualizationConfiguration.defaultMapType == "svg") {
    console.log("Inside SVG")

    //dynamically build the canvas that our map will be displayed on
    var svg = d3.select("div").append("svg")
       .attr("width", 1100)
       .attr("height", 800)
       .attr("id", "svg")

    //dynamically build the svg that our legend will be displayed on
    var legend = d3.select("div").append("svg")
      .attr("width", 800)
      .attr("height", 1000)
      .attr("id", "legend")

    //used to ensure that all data is loaded into the program before execution
    d3.queue()
      .defer(d3.json, obj.vizualizationConfiguration.geographyBoundaries.topoJsonUrl)
      .await(ready)

    //Function ready will initiate once all Topojson data is loaded into the program
    function ready(error, data) {
      if(error) throw error;
      console.log("loaded the data: " + data)

      /**
        The code below is crucial for building the map. For the geometries section you want to make sure that the path to get to the geometries IS ACCURATE.
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        Since I called the topojson map USMAP.topojson it made the filepath data.objects.USMap.geometries. Keep in mind the path name may be different based on whatever you name the file.
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      */
      var usMap = topojson.feature(data, {
        //most if not all topojson fall under the geometry collection type.
        type: "GeometryCollection",
        geometries: data.objects.USMap.geometries
      });

      console.log(usMap)

      //Setting the view point of the canvas. There are many options - we are using geoAlbersUsa.
      var projection = d3.geoAlbersUsa()
        .fitExtent([[20,20],[700,500]], usMap)

      //Initializes the path for the boundries to be drawn on the canvas.
      var geoPath = d3.geoPath().projection(projection)

      //used to create the tooltip when you hover the mouse over a region.
      var div = d3.select("div").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      /**
        Since SVG maps do not have a prebuilt tile like slippy maps- the map will always need to be drawn on.
        Therefore we make sure to be drawing a map.
      */
      if(obj.vizualizationConfiguration.sumAreas) {
        console.log("MapFace: SumByArea");
        //colorSchemeSplitFlag is set to false meaning there will only be one color.
        if(obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.colorSchemeSplitFlag == false) {
          console.log("colorSchemeSplitFlag is set to false");

          var colorScheme= obj.vizualizationConfiguration.sumAreas.colorScheme;
          var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange;

          //this grabs the data that we want to color code our map with.
          var valueArray= [];
          _.each(obj.data.pivot[0].data, function(dataRow) {
            valueArray.push(dataRow[2])
          })
          console.log(valueArray);

          //convert our data into number form so that the external range function can work properly.
          var result = valueArray.map(Number);
          console.log(result)

          //grabbing max and min from value array to be used as parameters in range function.
          var max = d3.max(result, function(d) { return d;});
          console.log(max)
          var min = d3.min(result, function(d) { return d;});
          console.log(min)

          //income_domain is now populated with a range of numbers that factored in colorRange, max, and min.
          //The amount of values in income_domain should be consistent with the colorRange
          var income_domain = range(max, min, colorRange)
          console.log(income_domain)

          //converting to string for legend purposes
          var legendText = income_domain.map(String);

          //colorbrewer is used to calculate color scheme for scaled values found in income_domain
          var income_color = d3.scaleLinear() //scaleLinear for D3.V4
            .domain(income_domain)
            .range(colorbrewer[colorScheme][colorRange]);

          /**
            The following code actually draws the map. It uses the information gathered above to help drive the process.
            We are calling our SVG and appending a "PATH" which is the physical geometric objects found in the topojson.
          */
          svg.selectAll("path")
          //data is given from the argument from the ready function, includes features on the map
            .data(usMap.features)
            .enter()
            .append("path")
            .attr("d", geoPath)
            //These two lines are used to create the outline of regions on the map whether its states or counties... etc
            .style("stroke", "#808080")
            .style("stroke-width", "2")
            .attr("fill", function(d) {
              var geographyData = _.find(obj.data.pivot[0].data, function (dataRow) {
                return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[1]);
              });
              //conditional to check to see if geographydata returns a value if so it calls income_color to return a color value.
              if(geographyData) {
                var value = +geographyData[2];
                return income_color(value);
              } else {
                  console.log("No geography data defined")
                  return "Grey"
                }
            //The next few portions of code are used to create the popup window. You will see .on("mouseover") and .on("mouseout")
            }).on("mouseover", function(d) {
              var geographyData = _.find(obj.data.pivot[0].data, function (dataRow) {
                return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[1]);
              });
              console.log(geographyData)

              var value = +geographyData[2];
              console.log(value);
              var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];
              console.log(state);

              if(geographyData) {
                div.transition()
                  .duration(200)
                  .style("opacity", .9)
                   var text = "State: "+ state +"<br/>" + obj.vizualizationConfiguration.sumAreas.popupTextDescription + value;
                   div.html(text)
                  .style("left", (d3.event.pageX) + "px")
                  .style("top", (d3.event.pageY - 28) + "px");
                } else {
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
          /**
          LEGEND
            The following code uses a series of conditionals to help create the legend positions.
            The legend positions are topleft topright bottomright bottomleft and Right.
            Each legend container is moved on an x and y axis depending on its position.
          */
          if(obj.vizualizationConfiguration.legend.legendFlag == true){
            console.log("Legend goes here")

            if(obj.vizualizationConfiguration.legend.legendPosition == "topleft") {
              //legendContainerSettings is an object to hold values to help build legend logistics.
              var legendContainerSettings = {
                x: 50 * 0.03,
                y: 50 * 0.82,
                width: 350,
                height: 90,
                roundX: 10,
                roundY: 10
              }
            }
            else if(obj.vizualizationConfiguration.legend.legendPosition == "topright") {
              //legendContainerSettings is an object to hold values to help build legend logistics.
              var legendContainerSettings = {
                x: 50 * 0.03 + 500,
                y: 50 * 0.82,
                width: 350,
                height: 90,
                roundX: 10,
                roundY: 10
              }
            }
            else if(obj.vizualizationConfiguration.legend.legendPosition == "bottomright") {
              //legendContainerSettings is an object to hold values to help build legend logistics.
              var legendContainerSettings = {
                x: 50 * 0.03 + 500,
                y: 50 * 0.82 + 350,
                width: 350,
                height: 90,
                roundX: 10,
                roundY: 10
              }
            }
            else if(obj.vizualizationConfiguration.legend.legendPosition == "bottomleft") {
              //legendContainerSettings is an object to hold values to help build legend logistics.
              var legendContainerSettings = {
                x: 50 * 0.03,
                y: 50 * 0.82 + 350,
                width: 350,
                height: 90,
                roundX: 10,
                roundY: 10
              }
            }
            else if(obj.vizualizationConfiguration.legend.legendPosition == "right") {
              //legendContainerSettings is an object to hold values to help build legend logistics.
              var legendContainerSettings = {
                x: 50 * 0.03 + 675,
                y: 50 * 0.82 + 175,
                width: 350,
                height: 90,
                roundX: 10,
                roundY: 10
              }
            }
            else{
              //legendContainerSettings is an object to hold values to help build legend logistics.
              var legendContainerSettings = {
                x: 50 * 0.03,
                y: 50 * 0.82,
                width: 350,
                height: 90,
                roundX: 10,
                roundY: 10
              }
              console.log("ERROR: SETTING LEGEND POSTION TO TOPLEFT")
            }

            //legendContainer pulls the contents of legendContainer settings defined in one of the conditionals above.
            //appending a rectangle to hold all of the legend information.
            var legendContainer = svg.append("rect")
              .attr('x', legendContainerSettings.x)
              .attr('y', legendContainerSettings.y)
              .attr('rx', legendContainerSettings.roundX)
              .attr('ry', legendContainerSettings.roundY)
              .attr('width', legendContainerSettings.width)
              .attr('height', legendContainerSettings.height)
              .attr('id', 'legend-container')

            //This is an object that holds the dimensions of the boxes that are colorcoded next to the values.
            var legendBoxSetting = {
              width: 50,
              height: 15,
              y: legendContainerSettings.y + 55
            };

            //inserts the data into the legend.
            var legend = svg.selectAll('g.legend')
              .data(income_domain)
              .enter()
              .append('g')
              .attr('class', 'legend')

            //appending legend header
            legend.append("text")
              .attr('x', legendContainerSettings.x + 150)
              .attr('y', legendBoxSetting.y - 30)
              .style('font-size', 15)
              .text(obj.vizualizationConfiguration.legend.legendText)

            //appending the rectangles that will be used as a vizual tool for matching colors ect.
            legend.append("rect")
              .attr('x', function(d,i){
                return legendContainerSettings.x + 52 * i + 20;
              })
              .attr('y', legendBoxSetting.y)
              .attr('width', legendBoxSetting.width)
              .attr('height', legendBoxSetting.height)
              .attr('fill', function(d){
                return income_color(d)
              })
              .attr('opacity', .9)

            //appending legend data text ontop of each box
            legend.append("text")
              .attr('x', function(d,i){
                return legendContainerSettings.x + 52 * i + 20;
              })
              .attr('y', legendBoxSetting.y - 5)
              .style('font-size', 12)
              .text(function(d,i){
                return "> " + legendText[i]
              })
        }
      }//colorschemesplitflag is false
          /**
            If colorscheme splitFlag is set to true we have to do everything twice. essentially we will build one map but will use
            two different income_domain's and will have to build two seperate legends one that holds values above the breakpoint and another that
            holds values below the breakpoint.

          */
          else {
            console.log("colorsccheme split flag is set to true")

            //used to store values that are above the colorSchemeSplitFlag
            var income_domainPOS = []
            var income_domainNEG = []

            var colorRange = obj.vizualizationConfiguration.sumAreas.colorRange
            var colorSchemeNEG = obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.negativeColorScheme;
            var colorSchemePOS = obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.positiveColorScheme;

            console.log(colorSchemePOS);
            console.log(colorSchemeNEG);

            //initially stores all values used to colorcode the map
            var valueArray= [];
            _.each(obj.data.pivot[0].data, function(dataRow) {
              valueArray.push(+dataRow[2]);
            })

            //convert value array to number for external Range function purposes
            var result = valueArray.map(Number);

            var max = d3.max(result, function(d) { return d;});
            var min = d3.min(result, function(d) { return d;});

            //colorschemeSplitFlag value should replace 0.
            income_domainPOS = range(max, 0, colorRange);
            income_domainNEG = rangeNEG(0, min, colorRange);

            //convert income domains to strings for legend purposes
            var legendTextPOS = income_domainPOS.map(String);
            var legendTextNEG = income_domainNEG.map(String);

            //colorbrewer used to assign colors to the map.
            var income_colorPOS = d3.scaleLinear()
              .domain(income_domainPOS)
              .range(colorbrewer[colorSchemePOS][colorRange]);

            var income_colorNEG = d3.scaleLinear()
              .domain(income_domainNEG)
              .range(colorbrewer[colorSchemeNEG][colorRange]);

            //building the map
            svg.selectAll("path")
              .data(usMap.features)
              .enter()
              .append("path")
              .attr("d", geoPath)
              .style("stroke", "#808080")
              .style("stroke-width", "2")
              .attr("fill", function(d) {
                var geographyData = _.find(obj.data.pivot[0].data, function (dataRow) {
                  return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[1]);
                });

                console.log(geographyData)
                //conditional used to color the boundries differently based on colorschemeSplitFlag
                if(geographyData) {
                  var value = +geographyData[2];
                  if(value < obj.vizualizationConfiguration.sumAreas.colorSchemeAdditional.breakpoint) {
                    return(income_colorNEG(value));
                  } else {
                      return(income_colorPOS(value));
                    }
                } else {
                    console.log("No geography data defined")
                    return ("lightgrey");
                  }
              }).on("mouseover", function(d) {
                var geographyData = _.find(obj.data.pivot[0].data, function (dataRow){
                  return (d.properties[obj.vizualizationConfiguration.sumAreas.mapField] === dataRow[1]);
                });
                console.log(geographyData)

                var value = +geographyData[2];
                var state = d.properties[obj.vizualizationConfiguration.sumAreas.mapField];

                console.log(value);
                console.log(state);

                if(geographyData) {
                  div.transition()
                    .duration(200)
                    .style("opacity", .9)
                     var text = "State: "+ state +"<br/>" + obj.vizualizationConfiguration.sumAreas.popupTextDescription + value;
                     div.html(text)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
                } else {
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

              if(obj.vizualizationConfiguration.legend.legendFlag == true) {
                console.log("Legend goes here")
                if(obj.vizualizationConfiguration.legend.legendPosition == "topleft"){
                  var legendContainerSettings = {
                    x: 50 * 0.03,
                    y: 50 * 0.82,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition == "topright"){
                  var legendContainerSettings = {
                    x: 50 * 0.03 + 500,
                    y: 50 * 0.82,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition == "bottomright"){
                  var legendContainerSettings = {
                    x: 50 * 0.03 + 500,
                    y: 50 * 0.82 + 350,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition == "bottomleft"){
                  var legendContainerSettings = {
                    x: 50 * 0.03,
                    y: 50 * 0.82 + 350,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition == "right"){
                  console.log("inside of legend container settings")
                  var legendContainerSettings = {
                    x: 50 * 0.03 + 675,
                    y: 50 * 0.82 + 175,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else{
                  var legendContainerSettings = {
                    x: 50 * 0.03,
                    y: 50 * 0.82,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                  console.log("ERROR: SETTING LEGEND POSTION TO TOPLEFT")
                }

                var legendContainer = svg.append("rect")
                  .attr('x', legendContainerSettings.x)
                  .attr('y', legendContainerSettings.y)
                  .attr('rx', legendContainerSettings.roundX)
                  .attr('ry', legendContainerSettings.roundY)
                  .attr('width', legendContainerSettings.width)
                  .attr('height', legendContainerSettings.height)
                  .attr('id', 'legend-container')


                var legendBoxSetting = {
                  width: 50,
                  height: 15,
                  y: legendContainerSettings.y + 55
                };

                var legend = svg.selectAll('g.legend')
                  .data(income_domainPOS)
                  .enter()
                  .append('g')
                  .attr('class', 'legend')

                legend.append("text")
                  .attr('x', legendContainerSettings.x + 150)
                  .attr('y', legendBoxSetting.y - 30)
                  .style('font-size', 15)
                  .text(obj.vizualizationConfiguration.legend.legendText)

                legend.append("rect")
                  .attr('x', function(d,i) {
                    return legendContainerSettings.x + 52 * i + 20;
                  })
                  .attr('y', legendBoxSetting.y)
                  .attr('width', legendBoxSetting.width)
                  .attr('height', legendBoxSetting.height)
                  .attr('fill', function(d) {
                    return income_colorPOS(d)
                  })
                  .attr('opacity', .9)

                legend.append("text")
                  .attr('x', function(d,i) {
                    return legendContainerSettings.x + 52 * i + 20;
                  })
                  .attr('y', legendBoxSetting.y - 5)
                  .style('font-size', 12)
                  .text(function(d,i) {
                    return "> " + legendTextPOS[i]
                })

                //legend 2
                if(obj.vizualizationConfiguration.legend.legendPosition2 == "topleft") {
                  var legendContainerSettings2 = {
                    x: 50 * 0.03,
                    y: 50 * 0.82,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition2 == "topright"){
                  var legendContainerSettings2 = {
                    x: 50 * 0.03 + 500,
                    y: 50 * 0.82,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition2 == "bottomright"){
                  var legendContainerSettings2 = {
                    x: 50 * 0.03 + 500,
                    y: 50 * 0.82 + 350,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition2 == "bottomleft"){
                  var legendContainerSettings2 = {
                    x: 50 * 0.03,
                    y: 50 * 0.82 + 350,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else if(obj.vizualizationConfiguration.legend.legendPosition == "right"){
                  console.log("inside of legend container settings")
                  var legendContainerSettings = {
                    x: 50 * 0.03 + 675,
                    y: 50 * 0.82 + 175,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                }
                else {
                  var legendContainerSettings2 = {
                    x: 50 * 0.03,
                    y: 50 * 0.82,
                    width: 350,
                    height: 90,
                    roundX: 10,
                    roundY: 10
                  }
                  console.log("ERROR: SETTING LEGEND POSTION TO TOPLEFT")
                }

                var legendContainer2 = svg.append("rect")
                  .attr('x', legendContainerSettings2.x)
                  .attr('y', legendContainerSettings2.y)
                  .attr('rx', legendContainerSettings2.roundX)
                  .attr('ry', legendContainerSettings2.roundY)
                  .attr('width', legendContainerSettings2.width)
                  .attr('height', legendContainerSettings2.height)
                  .attr('id', 'legend-container2')


                var legendBoxSetting2 = {
                  width: 50,
                  height: 15,
                  y: legendContainerSettings2.y + 55
                };

                var legend2 = svg.selectAll('g.legend2')
                  .data(income_domainNEG)
                  .enter()
                  .append('g')
                  .attr('class', 'legend2')

                legend2.append("text")
                  .attr('x', legendContainerSettings2.x + 150)
                  .attr('y', legendBoxSetting2.y - 30)
                  .style('font-size', 15)
                  .text(obj.vizualizationConfiguration.legend.legendText2)

                legend2.append("rect")
                    .attr('x', function(d,i){
                      return legendContainerSettings2.x + 52 * i + 20;
                    })
                    .attr('y', legendBoxSetting2.y)
                    .attr('width', legendBoxSetting2.width)
                    .attr('height', legendBoxSetting2.height)
                    .attr('fill', function(d){
                      return income_colorNEG(d)
                    })
                    .attr('opacity', .9)

                legend2.append("text")
                  .attr('x', function(d,i){
                    return legendContainerSettings2.x + 52 * i + 20;
                  })
                  .attr('y', legendBoxSetting2.y - 5)
                  .style('font-size', 12)
                  .text(function(d,i){
                    return "> " + legendTextNEG[i]
                  })
              }//end of legend Flag
            } //end of colorscheme split flag = true
          }//end of summarized by area

      console.log(obj.vizualizationConfiguration.discretes.length)


      //This code ensures obj.vizualizationConfiguration.geographyBoundariesFlag == true &&

      /**
        The second portion of the code is to add discrete data point functionality to the SVG map.
        As you can see it will first check to see if the map was created yet by the summarized by area object.
        If this is empty it will draw the map; otherwise it wont redraw the map.
      */

      //draw the map if sumAreas is empty
      if(!obj.vizualizationConfiguration.sumAreas){
        svg.selectAll("path")
          .data(usMap.features)
          .enter()
          .append("path")
          .attr("d", geoPath)
          .style("stroke", "#808080")
          .style("stroke-width", "2")
          .attr("fill","lightgrey")
        }

      /**
        The map module allows for mulitple discrete data objects. In order to add these data objects seperatley we use a for loop.
        Each data object needs a corresponding data configuration associated with it.
      */

      for(var i = 0; i < obj.vizualizationConfiguration.discretes.length; i++) {
        //used to keep code paths shorter.
        var discreteConfig = obj.vizualizationConfiguration.discretes[i];

        var valueArray = [];
        var magnitude = [];
        var magnitudeArray = [];

        //grab lat/long field from data object
        var latColumn = _.find(obj.discreteData[i].columns, function(col) { return col.dbColumn == discreteConfig.latColumn}).field;
        console.log(latColumn);
        var longColumn = _.find(obj.discreteData[i].columns, function(col) { return col.dbColumn == discreteConfig.longColumn}).field;
        console.log(longColumn);

        //If magnitude flag is set to true grab information to assign bubble sizes
        var magnitudeColumn = {};
        if(discreteConfig.magnitudeFlag) {
          console.log("magnitude Flag set")
          magnitudeColumn = _.find(obj.discreteData[i].columns, function(col) { return col.dbColumn == discreteConfig.attributeColumns.magnitude});
        }
        console.log(magnitudeColumn);

        //If category flag is set to true grab information to assign bubble sizes
        var categoryColumn = {};
        if(discreteConfig.categoryFlag) {
          categoryColumn = _.find(obj.discreteData[i].columns, function(col) { return col.dbColumn == discreteConfig.attributeColumns.category});
        }
        console.log(categoryColumn);

        /**
          The following code is used to populate valueArray with the main details to draw discrete points onto the map.
          The attributes object is mainly used to populate the pop-up window with details about the discrete data point.
        */

        _.each(obj.discreteData[i].rows, function(dataRow) {
          var attributes = {};
          //if categoryflag is set to true add the category value to the attributes column
          if(discreteConfig.categoryFlag) {
            attributes[categoryColumn.title] = dataRow[categoryColumn.field];
          }
          //if magnitudeFlag is set to true add the magnitude value to the attributes column
          if(discreteConfig.magnitudeFlag){
            attributes[magnitudeColumn.title] = dataRow[magnitudeColumn.field];
          }
          //loops through and adds all additional information it the attributes Columns
          for(var x = 0; x<discreteConfig.attributeColumns.additional.length; x++){
            var column = _.find(obj.discreteData[i].columns, function(col) { return col.dbColumn == discreteConfig.attributeColumns.additional[x]});
            attributes[column.title] = dataRow[column.field]
          }
          valueArray.push([+dataRow[latColumn], +dataRow[longColumn], dataRow[categoryColumn.field], +dataRow[magnitudeColumn.field], attributes]);
          //magnitudeArray is used to calculate bubble sizes that are in range of what D3 allows.
          magnitudeArray.push([+dataRow[magnitudeColumn.field]]);
        })

        console.log(valueArray)
        console.log(magnitudeArray)

        //find max and min of magnitude array for rScale purposes.
        var max = d3.max(magnitudeArray, function(d) { return d;});
        var min = d3.min(magnitudeArray, function(d) { return d;});

        //D3 tool used to calculate range of bubble sizes allowed for SVG discrete points.
        var rScale = d3.scaleLinear();
        rScale.domain([max, min]).range([discreteConfig.minBubbleSize, discreteConfig.maxBubbleSize]); //reverse min max for proper magnitude distribution for bubble sizes.

        console.log("discreteConfig "+discreteConfig)
        console.log("valueArray "+valueArray)
        console.log("magnitude "+magnitude)
        console.log("max "+max)
        console.log("min "+min)

      /**
        The next blocks of codes are going to be conditional statements that implement the variety of categoryFlag and magnitudeFlag being set to either true or false.
        We allow give the user functionality to choose whether they want circle markers or bubble markers. Therefore this is repetitive code instilled twice under each conditioal statement.
      */

      if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == false) {
        console.log("true false")
        if(discreteConfig.shapeForm == "rectangle") {
            svg.selectAll("rectangle")
              .data(valueArray, function(d){
                return d;
              }).enter()
              .append("rect")
              .attr("x", function(d){ return projection(d)[0]})
              .attr("y", function(d){ return projection(d)[1]})
              .attr("width", 10)
              .attr("height", 10)
              .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
              .attr("opacity", .4)
              .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
              .style("stroke-width", "2")
              .on("mouseover", function(d) {
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

        if(discreteConfig.shapeForm == "circle") {
          svg.selectAll("circle")
            .data(valueArray, function(d) {
              return d;
            }).enter()
            .append("circle")
            .attr("cx", function (d) { console.log(projection(d)[0]); return projection(d)[0]})
            .attr("cy", function (d) { console.log(d[1]); return projection(d)[1]})
            .attr("r", "2px")
            .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
            .attr("opacity", .75)
            .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
            .style("stroke-width", "2")
            .on("mouseover", function(d) {
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
      }
      else if(discreteConfig.categoryFlag == false && discreteConfig.magnitudeFlag == true) {
        console.log("False True")
        if(discreteConfig.shapeForm == "rectangle") {
          svg.selectAll("rectangle")
            .data(valueArray, function(d) {
                return d;
              }).enter()
              .append("rect")
              .attr("x", function(d){ return projection(d)[0]})
              .attr("y", function(d){ return projection(d)[1]})
              .attr("width", 10)
              .attr("height", 10)
              .attr("fill", obj.vizualizationConfiguration.discretes[i].colorScheme)
              .attr("opacity", .4)
              .style("stroke", obj.vizualizationConfiguration.discretes[i].colorScheme)
              .style("stroke-width", "2")
              .on("mouseover", function(d) {
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
        if(discreteConfig.shapeForm == "circle") {
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
            .style("stroke", obj.vizualizationConfiguration.discretes[i].colorScheme)
            .style("stroke-width", "2")
            .on("mouseover", function(d) {
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
      }
      else if(discreteConfig.categoryFlag == true && discreteConfig.magnitudeFlag == true) {
        console.log("True True")
        console.log(valueArray)
        if(discreteConfig.shapeForm == "rectangle") {
          svg.selectAll("rectangle")
            .data(valueArray, function(d) {
              return d;
              }).enter()
              .append("rect")
              .attr("x", function(d){ return projection(d)[0]})
              .attr("y", function(d){ return projection(d)[1]})
              .attr("width", 10)
              .attr("height", 10)
              .attr("fill", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
              .attr("opacity", .4)
              .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
              .style("stroke-width", "2")
              .on("mouseover", function(d) {
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
        if(discreteConfig.shapeForm == "circle") {
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
              .style("stroke", function(d){ console.log(colorScale(d[2])); return colorScale(d[2])})
              .style("stroke-width", "2")
              .on("mouseover", function(d) {
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
      }
      else {
        if(discreteConfig.shapeForm == "rectangle") {
          svg.selectAll("rectangle")
            .data(valueArray, function(d) {
                return d;
              }).enter()
              .append("rect")
              .attr("x", function(d){ return projection(d)[0]})
              .attr("y", function(d){ return projection(d)[1]})
              .attr("width", 10)
              .attr("height", 10)
              .attr("fill", obj.vizualizationConfiguration.discretes[i].colorScheme)
              .attr("opacity", .4)
              .style("stroke", obj.vizualizationConfiguration.discretes[i].colorScheme)
              .style("stroke-width", "2")
              .on("mouseover", function(d) {
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
        if(discreteConfig.shapeForm == "circle") {
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
            .style("stroke", obj.vizualizationConfiguration.discretes[i].colorScheme)
            .style("stroke-width", "2")
            .on("mouseover", function(d) {
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
    }

    //adding legend 
    if(obj.vizualizationConfiguration.legend.legendFlag == true){
      console.log("Legend goes here")

      if(obj.vizualizationConfiguration.legend.legendPosition == "topleft"){
        var legendContainerSettings = {
          x: 50 * 0.03,
          y: 50 * 0.82,
          width: 250,
          height: 515,
          roundX: 10,
          roundY: 10
        }
      }

      else if(obj.vizualizationConfiguration.legend.legendPosition == "topright"){
        var legendContainerSettings = {
          x: 50 * 0.03 + 650,
          y: 50 * 0.82,
          width: 250,
          height: 515,
          roundX: 10,
          roundY: 10
        }
      }
      else{
        var legendContainerSettings = {
          x: 50 * 0.03 + 775,
          y: 50 * 0.82,
          width: 250,
          height: 515,
          roundX: 10,
          roundY: 10
        }
      }

      var legendContainer = svg.append("rect")
        .attr('x', legendContainerSettings.x)
        .attr('y', legendContainerSettings.y)
        .attr('rx', legendContainerSettings.roundX)
        .attr('ry', legendContainerSettings.roundY)
        .attr('width', legendContainerSettings.width)
        .attr('height', legendContainerSettings.height)
        .attr('id', 'legend-container')


    var legendBoxSetting = {
      width: 15,
      height: 15,
      y: legendContainerSettings.y
    };

    var legend = svg.selectAll('g.legend')
      .data(valueArray, function(d){
        return d;
      })
      .enter()
      .append('g')
      .attr('class', 'legend')

      legend.append("text")
        .attr('x', legendContainerSettings.x + 80)
        .attr('y', legendBoxSetting.y + 20)
        .style('font-size', 15)
        .text(obj.vizualizationConfiguration.legend.legendText)

    legend.append("rect")
        .attr('x', legendContainerSettings.x + 5)
        .attr('y', function(d,i){
          return legendContainerSettings.y * i + 70})
        .attr('width', legendBoxSetting.width)
        .attr('height', legendBoxSetting.height)
        .attr('fill', function(d){
          return colorScale(d[2])
        })
        .attr('opacity', .9)

    legend.append("text")
    .attr('x', legendContainerSettings.x + 30)
    .attr('y', function(d,i){
      return legendContainerSettings.y * i + 80})
      .style('font-size', 12)
      .text(function(d,i){
        return d[2];
      })
    }


    }//end of discretes loop

  }//end of ready function

} //end of SVG

}//end of renderChart


// document.getElementById("1-slippy-discrete-two").addEventListener('click', function (){
//   jsonData = "1-slippy-discrete-two"
//
//   emptyMapContents()
//
//   var div = document.createElement("div");
//   div.setAttribute("id", "mapid");
// // as an example add it to the body
//   document.getElementById("mapContents").appendChild(div);
//
//   renderChart(testObjects[jsonData])
// })

document.getElementById("1-slippy-discrete-new").addEventListener('click', function (){
  jsonData = "1-slippy-discrete-new"

  emptyMapContents()

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})


//
// document.getElementById("2-slippy-area").addEventListener('click', function(){
//
//   emptyMapContents()
//
//   jsonData = "2-slippy-area"
//
//   var div = document.createElement("div");
//   div.setAttribute("id", "mapid");
// // as an example add it to the body
//   document.getElementById("mapContents").appendChild(div);
//
//   renderChart(testObjects[jsonData])
// })


// document.getElementById("5-slippy-area-discrete").addEventListener('click', function(){
//
//   emptyMapContents()
//
//   jsonData = "5-slippy-area-discrete"
//
//   var div = document.createElement("div");
//   div.setAttribute("id", "mapid");
// // as an example add it to the body
//   document.getElementById("mapContents").appendChild(div);
//
//   renderChart(testObjects[jsonData])
// })

document.getElementById("2-slippy-area-new").addEventListener('click', function(){

  emptyMapContents()

  jsonData = "2-slippy-area-new"

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})

document.getElementById("10-slippy-discrete-area-new").addEventListener('click', function(){
  emptyMapContents()
  jsonData = "10-slippy-discrete-area-new"

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})

document.getElementById("slippy-discrete-multiple").addEventListener('click', function(){
  emptyMapContents()
  jsonData = "slippy-discrete-multiple"

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})


// document.getElementById("3-svg-area").addEventListener('click', function(){
//   console.log(d3.select("svg"))
//
//     emptyMapContents()
//
//
//     jsonData = "3-svg-area"
//
//     renderChart(testObjects[jsonData])
// })

document.getElementById("3-svg-area-new").addEventListener('click', function(){
  console.log(d3.select("svg"))

    emptyMapContents()


    jsonData = "3-svg-area-new"

    renderChart(testObjects[jsonData])
})

document.getElementById("8-svg-discrete-new").addEventListener('click', function(){
  console.log(d3.select("svg"))

    emptyMapContents()


    jsonData = "8-svg-discrete-new"

    renderChart(testObjects[jsonData])
})

document.getElementById("9-svg-discrete-new").addEventListener('click', function(){
  console.log(d3.select("svg"))

    emptyMapContents()


    jsonData = "9-svg-discrete-new"

    renderChart(testObjects[jsonData])
})

document.getElementById("svg-discrete-multiple").addEventListener('click', function(){
  console.log(d3.select("svg"))

    emptyMapContents()

    jsonData = "svg-discrete-multiple"

    renderChart(testObjects[jsonData])
})


// document.getElementById("4-svg-discrete").addEventListener('click', function(){
//
//   emptyMapContents()
//
//   jsonData = "4-svg-discrete"
//   renderChart(testObjects[jsonData])
// })
//
// document.getElementById("6-svg-area-discrete").addEventListener('click', function(){
//   console.log(d3.select("svg"))
//
//     emptyMapContents()
//
//
//     jsonData = "6-svg-area-discrete"
//
//     renderChart(testObjects[jsonData])
// })

renderChart(testObjects["10-slippy-discrete-area-new"]);
