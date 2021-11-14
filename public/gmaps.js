var map;

//initialize map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 10.69, lng: -61.22 },
        zoom: 8
    });

    map.data.loadGeoJson(
        "./ttmap.geojson"
    );

    map.data.addListener('click', function (event) {
        displayConstituency(event);
    });
    
}

//testing of the get location and show position functions
window.onload = function () {
    setTimeout(getLocation, 5000);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//retrieve constituency data and put it in the infoBox element
function displayConstituency(event) {
    var infobox = document.getElementById("info-box");
    infobox.innerHTML = "";
    var constituency = event.feature.getProperty("Alias");
    infobox.textContent = constituency;
}

//show position on the map
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var latlng = { lat: lat, lng: lng };
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    map.setCenter(latlng);
}

//place marker given a lat and lng
function placeMarker(lat, lng) {
    var latlng = { lat: lat, lng: lng };
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    map.setCenter(latlng);
}