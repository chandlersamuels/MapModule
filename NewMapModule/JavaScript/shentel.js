/**
  nucleus.js
*/

document.getElementById("1-store-door-swings").addEventListener('click', function (){
  jsonData = "1-store-door-swings"

  emptyMapContents()

  var div = document.createElement("div");
  div.setAttribute("id", "mapid");
// as an example add it to the body
  document.getElementById("mapContents").appendChild(div);

  renderChart(testObjects[jsonData])
})

renderChart(testObjects["1-store-door-swings"]);
