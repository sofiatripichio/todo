"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.question("Ingrese base");
var exponente = readlineSync.question("Ingrese exponente");
function calcular(base, exponente) {
    if (exponente >= 0) {
        if (exponente === 0) {
            return 1;
        }
        else {
            return calcularPotencia(base, exponente);
        }
    }
}
function calcularPotencia(base, exponente) {
    var resultado = 1;
    for (var i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
var potencia = calcular(base, exponente);
var potenciaPordos = potencia * 2;
function hacerLinea() {
    var linea = "";
    for (var i = 0; i <= 80; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    return linea;
}
var valor = hacerLinea();
console.log(potenciaPordos);
console.log(valor);
