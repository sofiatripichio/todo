"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlynSync = require("readline-sync");
function cargarButacasTotales(arreglo, total) {
    var indice;
    for (indice = 0; indice < total; indice++) {
        arreglo[indice] = Math.floor(Math.random() * 2);
    }
}
function cargarButacasQueEstanDesocupadas(arreglo, total) {
    var desocupadas = 0;
    var indice;
    for (indice = 0; indice < total; indice++) {
        if (arreglo[indice] == 0) {
            desocupadas++;
        }
    }
    console.log(arreglo);
    return desocupadas;
}
var numeroDeButacas = readlynSync.questionInt("Ingrese numero de butacas: ");
var butacas = new Array(numeroDeButacas);
cargarButacasTotales(butacas, numeroDeButacas);
console.log("El numero de butacas desocupadas es: ", cargarButacasQueEstanDesocupadas(butacas, numeroDeButacas));
