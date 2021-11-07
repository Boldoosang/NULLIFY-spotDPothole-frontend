//initialize google map centered around trinidad and tobago
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.69, lng: -61.22},
        zoom: 8
    });
    
    map.data.loadGeoJson(
        "./ttmap.geojson"
    );
}