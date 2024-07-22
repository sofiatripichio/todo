"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantidad = readlineSync.questionInt("Ingrese cantidad de numeros");
var escalarUno = new Array(cantidad);
var escalarDos = new Array(cantidad);
function cargarVectores(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = readlineSync.questionInt("Ingrese valor en posición" + indice);
    }
}
function productoEscalar(v1, v2, cantidad) {
    var acumulador = 0;
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        acumulador = acumulador + (v1[indice] * v2[indice]);
    }
    return acumulador;
}
function mostrarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(v[indice], "");
    }
}
cargarVectores(escalarUno, cantidad);
mostrarVector(escalarUno, cantidad);
cargarVectores(escalarDos, cantidad);
mostrarVector(escalarDos, cantidad);
console.log("Producto escalar:" + productoEscalar(escalarUno, escalarDos, cantidad));
