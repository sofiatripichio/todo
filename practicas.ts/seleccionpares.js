"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function cargarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = readlineSync.questionInt("Ingrese numero en posicion:  " + indice + " ");
    }
}
function mostararVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(v[indice]);
    }
}
function contarPares(v, cantidad) {
    var contadorDePares = 0;
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        if (v[indice] % 2 === 0) {
            contadorDePares++;
        }
    }
    return contadorDePares;
}
var cantidad = 10;
var v = new Array(cantidad);
cargarVector(v, cantidad);
console.log("Los numeros elegidos son: ");
mostararVector(v, cantidad);
var numerospar = contarPares(v, cantidad);
console.log("Cantidad de numeros pares: " + numerospar);
