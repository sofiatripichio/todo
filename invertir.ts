import * as readlineSync from 'readline-sync'
let cantidadelegida: number= readlineSync.questionInt ("Ingrese cantidad")
let seleccionnumeros: number[]= new Array(cantidadelegida)
let i: number
for (i=0; i<cantidadelegida; i++) {
    seleccionnumeros[i]= readlineSync.questionInt ("Ingrese numero en posición"+ i)}
for (i=cantidadelegida-1; i>=0; i--){
    console.log (seleccionnumeros[i])
}   
//i=cantidadelegida-1: significa que empiezo desde el ultimo i>=O me detengo en el primero i-- voy restando de a uno.