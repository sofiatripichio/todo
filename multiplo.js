"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Ingrese número");
var numerodos = readlineSync.questionInt("Ingrese otro número para comprobar si es mùltiplo");
function esMultiplo(numerito, multiploDe) {
    var calcular = numerito % multiploDe === 0;
    return calcular;
}
var multiplo = esMultiplo(numero, numerodos);
console.log(multiplo);
