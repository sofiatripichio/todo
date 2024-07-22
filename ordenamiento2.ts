import * as readlineSync from 'readline-sync';
let cantidad : number =  readlineSync.questionInt("Ingrese cantidad de números del arreglo: ");
let arreglo: number[] = new Array(cantidad);

function cargar(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < arreglo.length; i++) {
        arreglo[i] = readlineSync.questionInt("Ingrese el valor en: "+i + ":");

    }
}
function mostrar(arreglo : number[], cantidad : number) {
    let i : number;
    for (i=0; i<arreglo.length; i++) {
    console.log(arreglo[i])
    }
    } 

function bubbleSort (arreglo: number[]): number[]  {
    
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length- i - 1; j++) {
        
            if (arreglo[j] < arreglo[j + 1]) {
                let variable = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = variable;
            }
        }
    }
    return arreglo;
}
console.log("Arreglo original:");
cargar(arreglo, cantidad);
mostrar(arreglo, cantidad);

let arregloDescendente: number[] = bubbleSort(arreglo);
console.log("Arreglo en orden descendente:");
mostrar(arregloDescendente, cantidad);

