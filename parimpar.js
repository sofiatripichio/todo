"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var numeroUno = readlinesync.questionInt("Ingrese primer numero: ");
var numeroDos = readlinesync.questionInt("Ingrese segundo numero: ");
// Función que determina si un número es par
function esPar(num) {
    return num % 2 === 0;
}
// Función principal para ejecutar el programa
function determinarParidad(numero) {
    if (esPar(numero)) {
        console.log("El n\u00FAmero ".concat(numero, " es par."));
    }
    else {
        console.log("El n\u00FAmero ".concat(numero, " es impar."));
    }
}
// Ejecutar el programa
determinarParidad(numeroUno);
