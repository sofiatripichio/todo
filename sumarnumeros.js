"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var listaA = new Array(6);
var listaB = new Array(6);
var sumaAyB = new Array(6);
var i;
for (i = 0; i < 6; i++) {
    listaA[i] = readlineSync.questionInt("ingrese numeros tipo A para sumar");
}
for (i = 0; i < 6; i++) {
    listaB[i] = readlineSync.questionInt("Ingrese numeros tipo B para sumar");
}
console.log;
for (i = 0; i < 6; i++) {
    sumaAyB[i] = listaA[i] + listaB[i];
    console.log(sumaAyB[i]);
}
