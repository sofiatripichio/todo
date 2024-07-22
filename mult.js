"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroUno = new Array(4);
var numeroDos = new Array(4);
var multiplicados = new Array(4);
function cargarVectores(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = readlineSync.questionInt("Ingrese valor en posición" + indice);
    }
}
function mostrarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(v[indice], "");
    }
}
function multiplicarvector(numeroUno, numeroDos, multiplicados, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        multiplicados[indice] = numeroUno[indice] * numeroDos[indice];
    }
}
cargarVectores(numeroUno, 4);
cargarVectores(numeroDos, 4);
multiplicarvector(numeroUno, numeroDos, multiplicados, 4);
console.log("valores cargados");
mostrarVector(numeroUno, 4);
console.log("valores para multiplicar por los anteriores");
mostrarVector(numeroDos, 4);
console.log("resultado de la mulplicacion de los valores");
mostrarVector(multiplicados, 4);
