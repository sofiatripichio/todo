"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionArreglo = rls.questionInt("Ingrese la dimension del arreglo: ");
var nombrePersonas = new Array(dimensionArreglo);
var indice;
for (indice = 0; indice < dimensionArreglo; indice++) {
    nombrePersonas[indice] = rls.question("Ingrese el nombre que quiere poner en el lugar" + " " + indice);
}
for (indice = 0; indice < dimensionArreglo; indice++) {
    console.log("La persona que ingreso en la posicion ".concat(indice, " es: ").concat(nombrePersonas[indice]));
}
