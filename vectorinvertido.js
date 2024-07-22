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
//permite mostrar un arreglo “arreglo” dedimensión “cantidad” en una única línea, separando los
//valores con un espacio
function escribirEnUnaLinea(arreglo, cantidad) {
    var i;
    var vector = "";
    for (i = 0; i < cantidad; i++) {
        vector += "".concat(arreglo[i], " ");
    }
    console.log(vector);
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
var cantidad = rls.questionInt("Ingrese la cantidad de números:");
var v = new Array(cantidad);
console.log("Cargando v");
cargarVector(v, cantidad);
console.log("Numeros cargados:");
escribirEnUnaLinea(v, cantidad);
console.log("Mostrando invertido");
mostrarVectorInvertido(v, cantidad);
