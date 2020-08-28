/* global L */ // JS Hint

"use strict";

//-----------------
// add bbox layer
//-----------------

var url = 'data/557SX_524SX_Extent.geojson';

// Set style for bbox
function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: '#ff0000',
        fillOpacity: .0
    };
}

var extentLayer = L.geoJson(null, {style: style});

	$.getJSON(url, function(data) {
        extentLayer.addData(data);
    });

 extentLayer.addTo(map);

//-----------------
// add trail data
//-----------------




 // Example for layer groups
 // var littleton = L.marker([44.475464, -121.944875]).bindPopup('This is Littleton, CO.'),
 //     denver    = L.marker([44.475464, -121.944875]).bindPopup('This is Denver, CO.'),
 //     aurora    = L.marker([44.475464, -121.944875]).bindPopup('This is Aurora, CO.'),
 //     golden    = L.marker([44.475464, -121.944875]).bindPopup('This is Golden, CO.');
 //
 // var cities = L.layerGroup([littleton, denver, aurora, golden]).addTo(map);
