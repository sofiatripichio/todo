import * as readlineSync from 'readline-sync'
let nombre : string= readlineSync.question ("Escribir nombre");
let apellido : string= readlineSync.question ("Escribir appelido");
function imprimirNombre(nombre, apellido): string {
    let nombreCompleto:string = nombre + " "+ apellido;
    return nombreCompleto;
}
console.log (imprimirNombre (nombre, apellido))
