"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Función para cargar el vector
function cargarVector(valorArreglo, cantidad) {
    for (var indice = 0; indice < cantidad; indice++) {
        valorArreglo[indice] = readlineSync.questionInt("Cargar valor en el índice " + indice + ": ");
    }
}
// Función para mostrar el vector
function mostrarVector(valorArreglo, cantidad) {
    for (var indice = 0; indice < cantidad; indice++) {
        console.log(valorArreglo[indice]);
    }
}
// Función para calcular el promedio del vector
function promedioVector(valorArreglo, cantidad) {
    var sumaTotal = 0;
    for (var indice = 0; indice < cantidad; indice++) {
        sumaTotal += valorArreglo[indice];
    }
    return sumaTotal / cantidad;
}
// Programa principal
var cantidad = readlineSync.questionInt("Ingrese la cantidad de elementos: ");
var valorArreglo = new Array(cantidad);
cargarVector(valorArreglo, cantidad);
console.log("Mostrando vector:");
mostrarVector(valorArreglo, cantidad);
var resultado = promedioVector(valorArreglo, cantidad);
console.log("El promedio de los valores es: " + resultado);
