// Create a Leaflet map and set the initial view
var map = L.map('map').setView([52.178346, 21.573607], 7);

// Add a tile layer to the map using OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create a marker at the specified coordinates and bind a popup to it
var szkola = L.marker([52.178346, 21.573607]).addTo(map).bindPopup("Home the place where I can go");

// Add a click event listener to the map to add markers and draw a line
map.on("click", addMarker);

// Function to add a marker and draw a line between two points
function addMarker(e) {
    console.log(szkola); // Output the szkola marker object to the 
    // Create a marker at the clicked coordinates and add it to the map
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

    // Create an array of coordinates for the line (szkola and the clicked point)
    var tab = [[szkola._latlng.lat, szkola._latlng.lng], [e.latlnglat, e.latlng.lng]];

    // Create a polyline using the coordinates array and add it to the map
    var line = L.polyline(tab).addTo(map);
}



for(let i = 0;i<=woje.features.length-1;i++){
    var wojew = (woje.features[i]).addTo(map);
    wojew.on("click", showName)
}

function (e).showName{

}