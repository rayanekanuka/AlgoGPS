let positions = [
    {lat: 45.171112, lng: 5.695952},
    {lat: 45.183152, lng: 5.699386},
    {lat: 45.174115, lng: 5.711106},
    {lat: 45.176123, lng: 5.722083},
    {lat: 45.184301, lng: 5.719791},
    {lat: 45.184252, lng: 5.730698},
    {lat: 45.170588, lng: 5.716664},
    {lat: 45.193702, lng: 5.691028},
    {lat: 45.165641, lng: 5.739938},
    {lat: 45.178718, lng: 5.744940},
    {lat: 45.176857, lng: 5.762518},
    {lat: 45.188512, lng: 5.767172},
    {lat: 45.174017, lng: 5.706729},
    {lat: 45.174458, lng: 5.687902},
    {lat: 45.185110, lng: 5.733667},
    {lat: 45.185702, lng: 5.734507},
    {lat: 45.184726, lng: 5.734666},
    {lat: 45.184438, lng: 5.733735},
    {lat: 45.184902, lng: 5.735256},
    {lat: 45.174812, lng: 5.698095},
    {lat: 45.169851, lng: 5.695723},
    {lat: 45.180943, lng: 5.698965},
    {lat: 45.176205, lng: 5.692165},
    {lat: 45.171244, lng: 5.689872}
]

let visited = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

console.log("Voici les points GPS");
console.log(positions);

// Fonction pour calculer les distances entre deux points
function distance(point1, point2) {
    let fx = point1.lat - point2.lat;
    // console.log("Mon point en x " + fx);
    let fy = point1.lng - point2.lng;
    // console.log("Mon point en y " + fy);
    return Math.sqrt(fx * fx + fy * fy);
}

console.log("----------------------------------------------------------------------------------");
console.log("WOOHOOO MATRIX ON THE WAY");
//Fonction pour trier les positions par distance (matrice de distance)
let matrix = [];
for (let i = 0; i < positions.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < positions.length; j++) {
        // rentrer résultat fonction distance dans le tableau matrix
        matrix[i].push(distance(positions[i], positions[j]));
    }
}
console.log(matrix);
console.log("----------------------------------------------------------------------------------");

// Fonction du chemin le plus court non visité
function shortestUnVisited(currentTown) {
    visited[currentTown] = true;
    let smallest = 100000;
    let iSmallest = 0;

    for (let i = 0; i < matrix.length; i++)
        if (!visited[i]) {
            if (matrix[currentTown][i] < smallest) {
                smallest = matrix[currentTown][i];
                iSmallest = i;
            }
        }
    return iSmallest;
}
shortestUnVisited(0);

// Index de la plus petite distance à index non visité
let path = [];
let indexTown = 0;
for (let i = 0; i < matrix.length; i++) {
    indexTown = shortestUnVisited(indexTown);
    path.push(positions[indexTown]);
    console.log("Ceci est l'index du chemin le plus court ", indexTown);
}


// ----------------------------------- AFFICHAGE ---------------------------------------//

// Creating map options
var mapOptions = {
    center: positions[0],
    zoom: 12
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);
// Adding the markers
for (i = 0; i < positions.length; i++) {
    var marker = new L.Marker(positions[i]);
    marker.addTo(map);
}

// Draw lines between point
var firstpolyline = new L.Polyline(positions, {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(map);

// Draw lines between point for the Shortest path
var secondpolyline = new L.Polyline(path, {
    color: 'blue',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
secondpolyline.addTo(map);