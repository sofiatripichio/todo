"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionSeleccionada = rls.questionInt("Ingrese la dimension del arreglo: ");
var listadenumeros = new Array(dimensionSeleccionada);
var indice;
var resultados = 0;
for (indice = 0; indice < dimensionSeleccionada; indice++) {
    listadenumeros[indice] = rls.questionInt("Indique el nro que va en la posicion" + indice);
    resultados += listadenumeros[indice];
}
for (indice = 0; indice < dimensionSeleccionada; indice++) {
    console.log("El numero en la posicion" + indice + "es:" + listadenumeros[indice]);
}
console.log("La suma del arreglo es:" + resultados);
