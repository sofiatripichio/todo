import * as readlineSync from 'readline-sync';

// Función para cargar el vector
function cargarVector(valorArreglo: number[], cantidad: number): void {
    for (let indice = 0; indice < cantidad; indice++) {
        valorArreglo[indice] = readlineSync.questionInt("Cargar valor en el índice " + indice + ": ");
    }
}

// Función para mostrar el vector
function mostrarVector(valorArreglo: number[], cantidad: number): void {
    for (let indice = 0; indice < cantidad; indice++) {
        console.log(valorArreglo[indice]);
    }
}

// Función para calcular el promedio del vector
function promedioVector(valorArreglo: number[], cantidad: number): number {
    let sumaTotal = 0;
    for (let indice = 0; indice < cantidad; indice++) {
        sumaTotal += valorArreglo[indice];
    }
    return sumaTotal / cantidad;
}

// Programa principal
let cantidad = readlineSync.questionInt("Ingrese la cantidad de elementos: ");
let valorArreglo: number[] = new Array(cantidad);

cargarVector(valorArreglo, cantidad);
console.log("Mostrando vector:");
mostrarVector(valorArreglo, cantidad);

let resultado = promedioVector(valorArreglo, cantidad);
console.log("El promedio de los valores es: " + resultado);
