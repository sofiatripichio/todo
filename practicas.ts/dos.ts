import * as readlineSync from 'readline-sync'
let nombre : string= readlineSync.question ("Escribir nombre: ");
let apellido : string= readlineSync.question ("Escribir apellido: ");
let edad : string= readlineSync.question ("Escribir edad: ");
let altura : string= readlineSync.question ("Escribir altura: ");
let profesion : string= readlineSync.question ("Escribir profesión: ");
function imprimirDatos(nombre,apellido,edad,altura,profesion): string {
    let datos:string = nombre + " "+ apellido+ " "+edad+" "+altura+" "+profesion;
    return datos;
}
console.log (imprimirDatos (nombre,apellido,edad, altura, profesion))
