var map = L.map('map').setView([52.178346, 21.573607], 7);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var szkola = L.marker([52.178346, 21.573607]).addTo(map).bindPopup("Home the place where I can go")

map.on("click",addMarker)

function addMarker(e){
    console.log(szkola)
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

    var tab = [[szkola._latlng.lat , szkola._latlng.lng],[e.latlng.lat, e.latlng.lng]]

    var line = L.polyline(tab).addTo(map)
}

// Create two points
var point1 = L.latLng(52.178346, 21.573607);
var point2 = L.latLng(52.178346, 21.573607);

// Calculate the distance between the two points (in meters)
var distance = point1.distanceTo(point2);

console.log(distance); // Output: 12398.442434852384

