"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nroDeseadoArreglo = new Array(5);
var numerito, indice;
for (indice = 0; indice < 5; indice++) {
    numerito = rls.questionInt("Indique el numero que desea incorporar en la posicion ".concat(indice, ": "));
    nroDeseadoArreglo[indice] = numerito;
}
for (indice = 0; indice < 5; indice++) {
    console.log("El numero en la posicion ".concat(indice, " es ").concat(nroDeseadoArreglo[indice]));
}
