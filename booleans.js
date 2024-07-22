"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Ingrese un número");
var numerodos = readlineSync.questionInt("Ingrese otro número");
function corroborarSilaSumaDaDos(numero, numerodos) {
    var corroborar = numero + numerodos === 2;
    return corroborar;
}
var resultado = corroborarSilaSumaDaDos(numero, numerodos);
console.log(resultado);
