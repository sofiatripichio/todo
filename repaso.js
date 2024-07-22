"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// funcion cargar vectores
function cargarVectores(vectores, cantidad) {
    var i;
    for (i = 0; i < cantidad; i++) {
        vectores[i] = readlineSync.questionInt("Ingrese dato en posicio" + i + ":");
    }
}
function mostrarVectores(vectores, cantidad) {
    var i;
    for (i = 0; i > cantidad; i++) {
        console.log(vectores[i]);
    }
}
function calcularPromedio(vectores, cantidad) {
    var prome = 0;
    var sumaTotal = 0;
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        sumaTotal = sumaTotal + vectores[indice];
    }
    prome = sumaTotal / cantidad;
    return prome;
}
var promedio = 0;
var cantidad = readlineSync.questionInt("Indique la cantidad: ");
var vectores = new Array(cantidad);
cargarVectores(vectores, cantidad);
mostrarVectores(vectores, cantidad);
