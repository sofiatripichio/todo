"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var azul = 40;
var verde = 35;
var amarilla = 30;
function asignarAula(infantes) {
    var aulaAsignada = "";
    var bancosMinimos = 41; // Mayor capacidad + 1
    var bancosVaciosAzul = azul - infantes;
    var bancosVaciosVerde = verde - infantes;
    var bancosVaciosAmarilla = amarilla - infantes;
    if (bancosVaciosAzul >= 0 && bancosVaciosAzul < bancosMinimos) {
        bancosMinimos = bancosVaciosAzul;
        aulaAsignada = "Azul";
    }
    if (bancosVaciosVerde >= 0 && bancosVaciosVerde < bancosMinimos) {
        bancosMinimos = bancosVaciosVerde;
        aulaAsignada = "Verde";
    }
    if (bancosVaciosAmarilla >= 0 && bancosVaciosAmarilla < bancosMinimos) {
        bancosMinimos = bancosVaciosAmarilla;
        aulaAsignada = "Amarilla";
    }
    return aulaAsignada;
}
var numeroDeInfantes = readlineSync.questionInt("Ingrese el número de infantes: ");
var aulaAsignada = asignarAula(numeroDeInfantes);
console.log("El aula asignada es: ".concat(aulaAsignada));
