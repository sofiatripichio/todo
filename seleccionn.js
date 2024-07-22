"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var dimensionelegida = readlineSync.questionInt("Ingrese la dimension");
var i;
var seleccion = new Array(dimensionelegida);
var numerosPositivo = 0;
var numerosNegativos = 0;
var esCero = 0;
for (i = 0; i < dimensionelegida; i++) {
    seleccion[i] = readlineSync.questionInt("Ingrese los numeros a clasificar");
}
for (i = 0; i < dimensionelegida; i++) {
    if (seleccion[i] > 0) {
        numerosPositivo++;
    }
    else if (seleccion[i] < 0) {
        numerosNegativos++;
    }
    else {
        esCero;
    }
}
console.log(numerosPositivo, "positivos:");
console.log(numerosNegativos, "negativos:");
console.log(esCero, "cero:");
