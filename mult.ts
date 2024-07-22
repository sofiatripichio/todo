import * as readlineSync from 'readline-sync'
let numeroUno:number[] = new Array (4)
let numeroDos:number[]= new Array (4)
let multiplicados: number[]= new Array (4)

function cargarVectores (v : number[], cantidad : number) {
    let indice : number;
    for (indice=0; indice<cantidad; indice++) {
    v[indice] = readlineSync.questionInt("Ingrese valor en posición"+ indice)
    }
}
function mostrarVector(v : number[], cantidad : number) {
    let indice : number;
    for (indice=0; indice<cantidad; indice++) {
    console.log(v[indice], "")
    }
    }
function multiplicarvector(numeroUno : number[], numeroDos: number[], multiplicados : number[], cantidad : number) {
     let indice : number;
     for (indice=0; indice<cantidad; indice++) {
     multiplicados[indice] = numeroUno[indice] * numeroDos[indice];
     }
    }
    
    cargarVectores(numeroUno, 4);
    
    cargarVectores(numeroDos, 4);
    multiplicarvector (numeroUno, numeroDos, multiplicados, 4);
 console.log ("valores cargados")
    mostrarVector(numeroUno, 4)
 console.log ("valores para multiplicar por los anteriores")   
    mostrarVector(numeroDos, 4)
  console.log ("resultado de la mulplicacion de los valores")  
    mostrarVector(multiplicados, 4)
