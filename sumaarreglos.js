"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionElegida = rls.questionInt("Ingrese la dimension del arreglo: ");
var numerosseleccionados = new Array(dimensionElegida);
var indice;
var resultad = 0;
for (indice = 0; indice < dimensionElegida; indice++) {
    numerosseleccionados[indice] = rls.question("Ingrese el numero que quiere poner en el lugar: " + indice);
    resultad += numerosseleccionados[indice];
}
for (indice = 0; indice < dimensionElegida; indice++) {
    console.log("El numero que eligio en la posicion " + indice + " es: " + numerosseleccionados[indice]);
}
console.log("La suma de los numeros elegidos es" + resultad);
