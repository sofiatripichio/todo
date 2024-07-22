import * as readlynSync from 'readline-sync'

function cargarButacasTotales (arreglo:number[], total:number){
let indice:number
for (indice=0; indice<total;indice++){
    arreglo[indice] = Math.floor(Math.random() * 2)
}
}
function cargarButacasQueEstanDesocupadas (arreglo:number[],total:number):number{
let desocupadas: number=0
let indice: number
for (indice=0; indice<total; indice++){
    if (arreglo[indice]==0){
        desocupadas++
    }
} console.log(arreglo)
return desocupadas
}
let numeroDeButacas:number= readlynSync.questionInt ("Ingrese numero de butacas: ")
let butacas:number[]= new Array (numeroDeButacas)
cargarButacasTotales (butacas, numeroDeButacas)
console.log ("El numero de butacas desocupadas es: ", cargarButacasQueEstanDesocupadas(butacas, numeroDeButacas))

