"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var numeroUno = readlinesync.questionInt("Ingrese numero: ");
var numeroDos = readlinesync.questionInt("Ingrese numero: ");
// Función que determina si un número es par
function esMayor(num, numero2) {
    return num > numero2;
}
// Función principal para ejecutar el programa
function determinarSiEsMayor(numero, numero2) {
    if (esMayor(numero, numero2)) {
        console.log("El n\u00FAmero ".concat(numero, " es Mayor a ").concat(numero2, " ."));
    }
    else {
        console.log("El n\u00FAmero ".concat(numero, " es Menor a ").concat(numero2, "."));
    }
}
// Ejecutar el programa
determinarSiEsMayor(numeroUno, numeroDos);
