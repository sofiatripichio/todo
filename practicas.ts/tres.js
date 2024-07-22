"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var numeroUno = readlinesync.questionInt("Ingrese primer numero: ");
var numeroDos = readlinesync.questionInt("Ingrese segundo numero: ");
function incrementarRestar(numeroUno, numeroDos) {
    for (var i = 0; i < 0; i++) {
    }
    console.log(numeroUno + 1, numeroDos - 1);
}
function corroborarSiesMayor(numero, numero2) {
    var corroborar = numeroUno > numeroDos;
    return corroborar;
}
var resultado = corroborarSiesMayor(numeroUno, numeroDos);
incrementarRestar(numeroUno, numeroDos);
console.log(resultado);
function corroborarSisonMultiplos(numero, numero2) {
    var corroborar = numero % 2 === 0 && numero2 % 6 === 0;
    return corroborar;
}
var resultadoDos = corroborarSisonMultiplos(numeroUno, numeroDos);
console.log(resultadoDos);
