let arrayEjemplo: number[]= [1,5,4,6,8,7,6,44,56,25,56,44]

//1)promedio de los numeros con bucle for.
let indice : number;
let resultad: number = 0;
let cantidad: number=12
for (indice = 0; indice< cantidad; indice++) {
resultad += arrayEjemplo[indice]}
console.log(resultad/cantidad)

//2)encuentra el numero más grande
function encontrarNumeroMasGrande(arreglo: number[]): number {
    let maximo = arreglo[0];
    
    for (let i = 1; i < cantidad; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i]; 
        }
    }
    
    return maximo;
}
console.log (encontrarNumeroMasGrande(arrayEjemplo))

//3)encuentra el numero mas chico
function encontrarNumeroMasChico(arreglo: number[]): number {
    let minimo = arreglo[0];
    
    for (let i = 1; i <arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i]; 
        }
    }
    
    return minimo;
}
console.log (encontrarNumeroMasChico(arrayEjemplo))

//4)determinar la cantidad de veces que se repite un numero
import * as readlineSync from 'readline-sync'
let numeroAcontar:number= readlineSync.questionInt("Ingrese numero para ver cuantas veces se repite")
function contarRepetidos (arrayEjemplo:number[]): number {
    let contador:number=0
    let indice: number
    for (indice=0; indice<arrayEjemplo.length; indice++)  {
        if (arrayEjemplo[indice]==numeroAcontar){
            contador ++
        }
    }return contador}

let camtidadDeSeis= contarRepetidos(arrayEjemplo)
console.log (camtidadDeSeis)
