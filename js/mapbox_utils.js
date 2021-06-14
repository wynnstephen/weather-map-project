const token = 'pk.eyJ1Ijoid3lubnN0ZXBoZW4iLCJhIjoiY2twcjJtN2dsMDBkMDJwcXV4cm5sdndjMyJ9.y3YqCNi8V_tIQ5iNdkZjPw'

mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/outdoors-vll",
    center: [-149.9003, 61.2181],
    zoom: 12,
})

let marker;

mapEvents();

let geocoder = setGeocoder();
addGeocodeToMap(geocoder);

function setGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl,
        marker: false
    });
}

$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {

    },
    success:function (data){
        console.log(data);
    }
})