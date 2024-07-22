"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayEjemplo = [1, 5, 4, 6, 8, 7, 6, 44, 56, 25, 56, 44];
//1)promedio de los numeros con bucle for.
var indice;
var resultad = 0;
var cantidad = 12;
for (indice = 0; indice < cantidad; indice++) {
    resultad += arrayEjemplo[indice];
}
console.log(resultad / cantidad);
//2)encuentra el numero más grande
function encontrarNumeroMasGrande(arreglo) {
    var maximo = arreglo[0];
    for (var i = 1; i < cantidad; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}
console.log(encontrarNumeroMasGrande(arrayEjemplo));
//3)encuentra el numero mas chico
function encontrarNumeroMasChico(arreglo) {
    var minimo = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i];
        }
    }
    return minimo;
}
console.log(encontrarNumeroMasChico(arrayEjemplo));
//4)determinar la cantidad de veces que se repite un numero
var readlineSync = require("readline-sync");
var numeroAcontar = readlineSync.questionInt("Ingrese numero para ver cuantas veces se repite");
function contarRepetidos(arrayEjemplo) {
    var contador = 0;
    var indice;
    for (indice = 0; indice < arrayEjemplo.length; indice++) {
        if (arrayEjemplo[indice] == numeroAcontar) {
            contador++;
        }
    }
    return contador;
}
var camtidadDeSeis = contarRepetidos(arrayEjemplo);
console.log(camtidadDeSeis);
