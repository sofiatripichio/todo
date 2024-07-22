"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//funcion cargar vector
function cargarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = rls.questionInt("Ingrese el valor en: " + indice + ":");
    }
}
//funcion mostrarvector
function mostrarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(v[indice]);
    }
}
//funcion mostrarvector invertido
function mostrarVectorInvertido(v, cantidad) {
    var indice;
    for (indice = cantidad - 1; indice >= 0; indice--) {
        console.log(v[indice]);
    }
}
//funcion invertir vector con While
function invertirVector(v, cantidad) {
    var indiceIzq = 0;
    var indiceDer = cantidad - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
var rls = require("readline-sync");
var cantidad = 5;
var v = new Array(cantidad);
console.log("Cargando v");
cargarVector(v, cantidad);
console.log("Mostrando invertido");
mostrarVectorInvertido(v, cantidad);
