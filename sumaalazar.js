"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function cargarNumeros(numero, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        numero[i] = Math.floor(Math.random() * 100);
    }
}
function mostrarNumeros(numero, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        console.log(numero[i]);
    }
}
function sumaDeNumeros(numeroUno, numeroDos, numeroTres, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        numeroTres[i] = numeroUno[i] + numeroDos[i];
    }
}
var cantidad = readlineSync.questionInt("Ingrese cantidad de numeros a sumar:");
var arregloUno = new Array(cantidad);
var arregloDos = new Array(cantidad);
var arregloTres = new Array(cantidad);
cargarNumeros(arregloUno, cantidad);
cargarNumeros(arregloDos, cantidad);
sumaDeNumeros(arregloUno, arregloDos, arregloTres, cantidad);
mostrarNumeros(arregloUno, cantidad);
mostrarNumeros(arregloDos, cantidad);
console.log("La suma de los números es:");
mostrarNumeros(arregloTres, cantidad);
