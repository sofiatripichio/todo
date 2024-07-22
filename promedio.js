"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlynSync = require("readline-sync");
var cantidadDeAlumnos = readlynSync.questionInt("Ingrese cantidad de alumnos");
var nombreAlumnos = new Array(cantidadDeAlumnos);
var notaPrimerT = new Array(cantidadDeAlumnos);
var notaSegundoT = new Array(cantidadDeAlumnos);
var notaTercerT = new Array(cantidadDeAlumnos);
for (var indice = 0; indice < cantidadDeAlumnos; indice++) {
    nombreAlumnos[indice] = readlynSync.question("Ingrese nombre del alumno");
    notaPrimerT[indice] = readlynSync.questionInt("Ingrese nota de primer trimestre");
    notaSegundoT[indice] = readlynSync.questionInt("Ingrese nota de segundo trimestre");
    notaTercerT[indice] = readlynSync.questionInt("Ingrese nota de tercer trimestre");
}
var alumBuscado = readlynSync.question("A quien busca: ");
var encontrado = false;
var promedio = 0;
var i = 0;
while (i < cantidadDeAlumnos && !encontrado) {
    if (nombreAlumnos[i] == alumBuscado) {
        encontrado = true;
        promedio = (notaPrimerT[i] + notaSegundoT[i] + notaTercerT[i]);
        promedio /= 3;
    }
    i++;
}
if (encontrado) {
    console.log("El promedio de ", alumBuscado, " es ", promedio);
}
else {
    console.log("No se pudo encontrar a ", alumBuscado);
}
