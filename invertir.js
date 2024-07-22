"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantidadelegida = readlineSync.questionInt("Ingrese cantidad");
var seleccionnumeros = new Array(cantidadelegida);
var i;
for (i = 0; i < cantidadelegida; i++) {
    seleccionnumeros[i] = readlineSync.questionInt("Ingrese numero en posición" + i);
}
for (i = cantidadelegida - 1; i >= 0; i--)
    --;
{
    console.log(seleccionnumeros[i]);
}
//i=cantidadelegida-1: significa que empiezo desde el ultimo i>=O me detengo en el primero i-- voy restando de a uno.
