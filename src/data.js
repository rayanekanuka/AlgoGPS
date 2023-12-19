let positions = [
    {x: 45.171112, y: 5.695952},
    {x: 45.183152, y: 5.699386},
    {x: 45.174115, y: 5.711106},
    {x: 45.176123, y: 5.722083},
    {x: 45.184301, y: 5.719791},
    {x: 45.184252, y: 5.730698},
    {x: 45.170588, y: 5.716664},
    {x: 45.193702, y: 5.691028},
    {x: 45.165641, y: 5.739938},
    {x: 45.178718, y: 5.744940},
    {x: 45.176857, y: 5.762518},
    {x: 45.188512, y: 5.767172},
    {x: 45.174017, y: 5.706729},
    {x: 45.174458, y: 5.687902},
    {x: 45.185110, y: 5.733667},
    {x: 45.185702, y: 5.734507},
    {x: 45.184726, y: 5.734666},
    {x: 45.184438, y: 5.733735},
    {x: 45.184902, y: 5.735256},
    {x: 45.174812, y: 5.698095},
    {x: 45.169851, y: 5.695723},
    {x: 45.180943, y: 5.698965},
    {x: 45.176205, y: 5.692165},
    {x: 45.171244, y: 5.689872}
]

let isVisited = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

console.log("Voici les points GPS");
console.log(positions);

// Fonction pour calculer les distances entre deux points
function distance(point1, point2) {
    let fx = point1.x - point2.x;
    // console.log("Mon point en x " + fx);
    let fy = point1.y - point2.y;
    // console.log("Mon point en y " + fy);
    return Math.sqrt(fx * fx + fy * fy);
}

console.log("--------------------------");
console.log("Distance entre deux points");
console.log("--------------------------");


//Fonction pour trier les positions par distance par rapport à une position de référence
let matrix = [];
for (let i = 0; i < positions.length; i++) {
    for (let j = 0; j < positions.length; j++) {
        // rentrer résultat fonction distance dans le tableau matrix
        matrix.push(distance(positions[i], positions[j]));
    }
}
console.log(matrix);
console.log("Woohoooo MATRIX ON THE WAY");


let idx = 0;
// matrix.forEach() {
//
// }
