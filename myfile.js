var map = L.map('map').setView([47.21, -113.204], 14.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.geoJSON(perimeter).addTo(map);