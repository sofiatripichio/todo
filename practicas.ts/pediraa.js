"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Función para encontrar la mayor cantidad de 'a' seguidas en una palabra
function mayorCantidadDeASeguidas(palabra) {
    var maxContador = 0;
    var contadorActual = 0;
    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a') {
            contadorActual++;
            if (contadorActual > maxContador) {
                maxContador = contadorActual;
            }
        }
        else {
            contadorActual = 0;
        }
    }
    return maxContador;
}
var palabra = readlineSync.question("Ingrese una palabra de 15 caracteres: ");
var maxCantidadA = mayorCantidadDeASeguidas(palabra);
console.log("La mayor cantidad de 'a' seguidas en la palabra es: ".concat(maxCantidadA));
