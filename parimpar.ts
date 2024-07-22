import * as readlinesync from 'readline-sync'
let numeroUno:number= readlinesync.questionInt("Ingrese primer numero: ")
let numeroDos:number= readlinesync.questionInt("Ingrese segundo numero: ")

// Función que determina si un número es par
function esPar(num: number): boolean {
    return num % 2 === 0;
}

// Función principal para ejecutar el programa
function determinarParidad(numero:number): void {

    if (esPar(numero)) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

// Ejecutar el programa
determinarParidad(numeroUno);
