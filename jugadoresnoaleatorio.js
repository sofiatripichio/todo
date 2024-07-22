"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function cargarjugadores(jugadores, cantidadDeJugadores) {
    var i;
    for (i = 0; i < cantidadDeJugadores; i++) {
        jugadores[i] = readlineSync.questionInt("Ingrese edades de jugadores");
    }
}
function mostrarJugadores(jugadores, cantidadDeJugadores) {
    var i;
    for (i = 0; i > cantidadDeJugadores; i++) {
        console.log(jugadores[i]);
    }
}
function calcularPromedio(jugadores, cantidadDeJugadores) {
    var prome = 0;
    var sumaTotal = 0;
    var indice;
    for (indice = 0; indice < cantidadDeJugadores; indice++) {
        sumaTotal = sumaTotal + jugadores[indice];
    }
    prome = sumaTotal / cantidadDeJugadores;
    return prome;
}
var promedio = 0;
var cantidadDeJugadores = readlineSync.questionInt("Indique la cantidad de jugadores: ");
var jugadores = new Array(cantidadDeJugadores);
cargarjugadores(jugadores, cantidadDeJugadores);
mostrarJugadores(jugadores, cantidadDeJugadores);
promedio = calcularPromedio(jugadores, cantidadDeJugadores);
console.log("El promedio las edades es de: ".concat(promedio));
