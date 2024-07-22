"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nombre = readlineSync.question("Escribir nombre");
var apellido = readlineSync.question("Escribir appelido");
function imprimirNombre(nombre, apellido) {
    var nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}
console.log(imprimirNombre(nombre, apellido));
