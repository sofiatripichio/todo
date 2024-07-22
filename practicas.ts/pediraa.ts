import * as readlineSync from 'readline-sync';

// Función para encontrar la mayor cantidad de 'a' seguidas en una palabra
function mayorCantidadDeASeguidas(palabra: string): number {
    let maxContador: number = 0;
    let contadorActual: number = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 'a') {
            contadorActual++;
            if (contadorActual > maxContador) {
                maxContador = contadorActual;
            }
        } else {
            contadorActual = 0;
        }
    }

    return maxContador;
}


let palabra: string = readlineSync.question("Ingrese una palabra de 15 caracteres: ");
const maxCantidadA: number = mayorCantidadDeASeguidas(palabra);
console.log(`La mayor cantidad de 'a' seguidas en la palabra es: ${maxCantidadA}`);



