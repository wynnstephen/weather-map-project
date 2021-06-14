mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [-149.9003, 61.2181],
    zoom: 12,
})

var marker;

var geocoder = getGeocoder();

addGeocoderToMap(geocoder);

getMarker([-149.9003, 61.2181]);

setGeocoderEvent();

setMapEvent();


function getGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl,
        marker: false
    });
}

function addGeocoderToMap(){
    geocoder.onAdd(map);
    geocoder.addTo("#geocoder");
}

function getMarker(coordinates) {
    marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
}

function setGeocoderEvent(){
    geocoder.on("result", function (event){
        marker.setLngLat(event.result.geometry.coordinates);
        getForecast(event.result.geometry.coordinates);
    });
}

function setMapEvent() {
    map.on("click", function (event){
        marker.setLngLat(event.lngLat);
        getForecast([event.lngLat.lng,event.lngLat.lat]);
    });
}

