"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nombre = readlineSync.question("Escribir nombre: ");
var apellido = readlineSync.question("Escribir apellido: ");
var edad = readlineSync.question("Escribir edad: ");
var altura = readlineSync.question("Escribir altura: ");
var profesion = readlineSync.question("Escribir profesión: ");
function imprimirDatos(nombre, apellido, edad, altura, profesion) {
    var datos = nombre + " " + apellido + " " + edad + " " + altura + " " + profesion;
    return datos;
}
console.log(imprimirDatos(nombre, apellido, edad, altura, profesion));
