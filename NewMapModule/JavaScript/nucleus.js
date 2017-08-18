/**
  nucleus.js
*/

document.getElementById("1-slippy-discrete-new").addEventListener('click', function (){
  jsonData = "1-slippy-discrete-new"

  emptyMapContents()

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})


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
//   logDebug(d3.select("svg"))
//
//     emptyMapContents()
//
//
//     jsonData = "3-svg-area"
//
//     renderChart(testObjects[jsonData])
// })

document.getElementById("3-svg-area-new").addEventListener('click', function(){
  logDebug(d3.select("svg"))

    emptyMapContents()


    jsonData = "3-svg-area-new"

    renderChart(testObjects[jsonData])
})

document.getElementById("8-svg-discrete-new").addEventListener('click', function(){
  logDebug(d3.select("svg"))

    emptyMapContents()


    jsonData = "8-svg-discrete-new"

    renderChart(testObjects[jsonData])
})

document.getElementById("9-svg-discrete-new").addEventListener('click', function(){
  logDebug(d3.select("svg"))

    emptyMapContents()


    jsonData = "9-svg-discrete-new"

    renderChart(testObjects[jsonData])
})

document.getElementById("svg-discrete-multiple").addEventListener('click', function(){
  logDebug(d3.select("svg"))

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
//   logDebug(d3.select("svg"))
//
//     emptyMapContents()
//
//
//     jsonData = "6-svg-area-discrete"
//
//     renderChart(testObjects[jsonData])
// })

renderChart(testObjects["10-slippy-discrete-area-new"]);
