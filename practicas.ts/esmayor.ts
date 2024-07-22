import * as readlinesync from 'readline-sync'
let numeroUno:number= readlinesync.questionInt("Ingrese numero: ")
let numeroDos:number= readlinesync.questionInt("Ingrese numero: ")

// Función que determina si un número es par
function esMayor(num: number, numero2:number): boolean {
    return num > numero2;
}

// Función principal para ejecutar el programa
function determinarSiEsMayor(numero, numero2:number): void {

    if (esMayor(numero, numero2)) {
        console.log(`El número ${numero} es Mayor a ${numero2} .`);
    } else {
        console.log(`El número ${numero} es Menor a ${numero2}.`);
    }
}

// Ejecutar el programa
determinarSiEsMayor(numeroUno, numeroDos);
