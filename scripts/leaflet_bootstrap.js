/* global L */ // JS Hint

"use strict";

var map;
var lat = 44.475464;
var lng = -121.944875;
var zoom = 8;

var OpenStreetMap_BaW = L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png", {
    minZoom: 9,
    attribution: "<a href=\"https://www.linkedin.com/in/tristanforward\">Creator</a>&nbsp&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
});

var Stamen_Terrain = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
subdomains: 'abcd',
minZoom: 1,
maxZoom: 16,
ext: 'png'});

var OpenStreetMap = L.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 9,
    attribution: "<a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
});

var Carto = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png", {
    minZoom: 9,
    attribution: "<a href=\"https://carto.com/legal\">CARTO</a><a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
});

var OpenTopo = L.tileLayer("http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    minZoom: 9,
    attribution: "<a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
});


function initmap() {
    // set up the map
    map = new L.Map("map");

    map.setView(new L.LatLng(lat, lng), zoom);
    map.addLayer(Carto);
    // map.addLayer(Stamen_Terrain);
    // map.addLayer(OpenStreetMap);
    // map.addLayer(OpenTopo);

}

initmap();
