/* global L */ // JS Hint

"use strict";

// var marker = L.marker([44.475464, -121.944875]).addTo(map);

var littleton = L.marker([44.475464, -121.944875]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([44.475464, -121.944875]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([44.475464, -121.944875]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([44.475464, -121.944875]).bindPopup('This is Golden, CO.');

var cities = L.layerGroup([littleton, denver, aurora, golden]).addTo(map);

// $.getJSON("./data/557SX_524SX_Extent.geojson",function(data){
// // L.geoJson function is used to parse geojson file and load on to map
// L.geoJson(data).addTo(map);
// });

var extent = L.geoJson(null);

$.getJSON("data/557SX_524SX_Extent.geojson", function (data) {
  extent.addData(data);
});

extent.addTo(map);

// var geojsonLayer = new L.GeoJSON.AJAX("../data/557SX_524SX_Extent.geojson");
//
// geojsonLayer.addTo(mymap);
