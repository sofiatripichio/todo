"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function cargarVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = readlineSync.questionInt("Ingrese numero ", indice);
    }
}
function mostararVector(v, cantidad) {
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        console.log(v[indice]);
    }
}
function contarPositivos(v, cantidad) {
    var contadordepositivos = 0;
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        if (v[indice] > 0) {
            contadordepositivos++;
        }
    }
    return contadordepositivos;
}
function contarNegativos(v, cantidad) {
    var contadordeNegativos = 0;
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        if (v[indice] < 0) {
            contadordeNegativos++;
        }
    }
    return contadordeNegativos;
}
function contarCeros(v, cantidad) {
    var contadordeCeros = 0;
    var indice;
    for (indice = 0; indice < cantidad; indice++) {
        if (v[indice] == 0) {
            contadordeCeros++;
        }
    }
    return contadordeCeros;
}
var cantidad = readlineSync.questionInt("ingrese cantidad de numeros:");
var v = new Array(cantidad);
cargarVector(v, cantidad);
var numerospos = contarPositivos(v, cantidad);
var numerosneg = contarNegativos(v, cantidad);
var ceros = contarCeros(v, cantidad);
console.log("Los valores son:");
mostararVector(v, cantidad);
