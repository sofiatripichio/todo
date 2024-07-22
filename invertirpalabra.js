"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function mostrarVector(v, cantidad) {
    for (var indice = 0; indice < cantidad; indice++) {
        console.log(v[indice] + " ");
    }
}
// function mostrarVectorInvertido(v: string[], cantidad: number) {
//     for (let indice = cantidad - 1; indice >= 0; indice--) {
//         console.log(v[indice] + " ");
//     }
// }
function invertirVector(v, cantidad) {
    var indiceIzq = 0;
    var indiceDer = cantidad - 1;
    var aux;
    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
var palabra = rls.question("Ingrese la palabra que desea invertir: ");
var cantidadLetras = palabra.length;
var arregloLetras = palabra.split("");
mostrarVector(arregloLetras, cantidadLetras);
invertirVector(arregloLetras, cantidadLetras);
console.log("Mostrando vector");
mostrarVector(arregloLetras, cantidadLetras);
