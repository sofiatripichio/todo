"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function mostrarVector(v, cantidad) {
    for (var indice = 0; indice < cantidad; indice++) {
        console.log(v[indice] + " ");
    }
}
function mostrarVectorInvertido(v, cantidad) {
    for (var indice = cantidad - 1; indice >= 0; indice--) {
        console.log(v[indice] + " ");
    }
}
var palabra = rls.question("Ingrese la palabra que desea invertir: ");
var cantidadLetras = palabra.length;
var arregloLetras = palabra.split("");
mostrarVector(arregloLetras, cantidadLetras);
console.log("Mostrando vector invertido");
mostrarVectorInvertido(arregloLetras, cantidadLetras);
