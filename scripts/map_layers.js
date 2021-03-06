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
// add OSM trail data
//-----------------

var url2 = 'data/OSM_Trails.geojson';

// create a map pane for neighborhoods
map.createPane('osmTrails');

// Set style for osm trails
function trail_style(feature) {
    return {
        weight: 1.5,
        opacity: 1,
        pane: 'osmTrails',
        color: '#ff0000'
    };
}

var trailLayer = L.geoJson(null, {style: trail_style});

	$.getJSON(url2, function(data) {
        trailLayer.addData(data);
    });

trailLayer.addTo(map);

//-----------------
// add completed trail data
//-----------------

var url3 = 'data/Completed_Trails.geojson';

// create a map pane for neighborhoods
map.createPane('completedTrails');

// Set style for trail
function completed_trail_style(feature) {
    return {
        weight: 2.5,
        opacity: 1,
        pane: 'completedTrails',
        color: '#009900'
    };
}

var completedTrailLayer = L.geoJson(null, {style: completed_trail_style});

 $.getJSON(url3, function(data) {
        completedTrailLayer.addData(data);
    });

completedTrailLayer.addTo(map);

//-----------------
// add completed GPX data
//-----------------

var gpx = 'data/gpx/Cougar res.gpx'; // URL to your GPX file or the GPX itself
var dir = 'data/gpx/'

// for (var k in dir) {
//   console.log(k, dir[k]);
// }
//
// // Import the filesystem module
// const fs = require("fs");
//
// let directory_name = "data/gpx/";
//
// // Function to get current filenames
// // in directory
// let filenames = fs.readdirSync(directory_name);
//
// console.log("\nFilenames in directory:");
// filenames.forEach((file) => {
//     console.log("File:", file);
// });


new L.GPX(gpx, {
  async: true,
  polyline_options: {
    color: 'green',
    opacity: 1,
    weight: 2.5,
    pane: 'completedTrails',
    lineCap: 'round'
  },
  marker_options: {
    startIconUrl: null,
    endIconUrl: null,
    shadowUrl: null,
    wptIconUrls: {
        '': null,
        'Geocache Found': null,
        'Park': null
    }
  }
}).addTo(map);

// new L.GPX(gpx, {async: true}).on('loaded', function(e) {
// map.fitBounds(e.target.getBounds());
// }).addTo(map);


 // Example for layer groups
 // var littleton = L.marker([44.475464, -121.944875]).bindPopup('This is Littleton, CO.'),
 //     denver    = L.marker([44.475464, -121.944875]).bindPopup('This is Denver, CO.'),
 //     aurora    = L.marker([44.475464, -121.944875]).bindPopup('This is Aurora, CO.'),
 //     golden    = L.marker([44.475464, -121.944875]).bindPopup('This is Golden, CO.');
 //
 // var cities = L.layerGroup([littleton, denver, aurora, golden]).addTo(map);
