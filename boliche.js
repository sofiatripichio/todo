"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cargarPersonas(personas, cantidadDePersonas) {
    var i;
    for (i = 0; i < cantidadDePersonas; i++) {
        personas[i] = Aleatorio(19, 40);
    }
}
function mostrarPersonas(personas, capacidad) {
    var i;
    var lista = ("");
    for (i = 1; i <= capacidad; i++) {
        lista += (personas[i]);
        console.log(lista);
    }
}
var cantidadDePersonas = 6;
var personas = new Array(cantidadDePersonas);
cargarPersonas(personas, cantidadDePersonas);
mostrarPersonas(personas, cantidadDePersonas);
