"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var numeroIngresado = readlinesync.questionInt("Ingrese un numero mayor a 50: ");
if (numeroIngresado < 50) {
    console.log("El numero ingresado no es mayor a 50");
}
