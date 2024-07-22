import * as readlineSync from 'readline-sync'
function cargarVector (v:number[], cantidad:number)
{let indice:number
    for (indice=0; indice<cantidad;indice ++)
{v[indice]= readlineSync.questionInt ("Ingrese numero ", indice)}
}

function mostararVector (v:number[], cantidad:number)
{let indice:number
    for (indice=0; indice<cantidad; indice++)
       {console.log (v[indice])
}
}

function contarPositivos (v:number[], cantidad:number): number
{let contadordepositivos:number=0
let indice:number
for (indice=0;indice<cantidad; indice++){
    if (v [indice]>0){
        contadordepositivos++
    }
} return contadordepositivos
}

function contarNegativos (v:number[], cantidad:number): number{
    let contadordeNegativos:number=0
    let indice:number
    for (indice=0; indice<cantidad; indice++){
        if (v[indice]<0){
            contadordeNegativos++
        }
    }return contadordeNegativos
}

function contarCeros (v:number[], cantidad:number): number {
    let contadordeCeros:number=0
    let indice: number
    for (indice=0; indice<cantidad; indice++)  {
        if (v[indice]==0){
            contadordeCeros ++
        }
    }return contadordeCeros
}
let cantidad:number = readlineSync.questionInt ("ingrese cantidad de numeros:")
let v:number[]= new Array(cantidad)

cargarVector(v, cantidad)

let numerospos=contarPositivos (v, cantidad)
let numerosneg=contarNegativos (v, cantidad)
let ceros= contarCeros (v,cantidad)
console.log("Los valores son:")
mostararVector (v, cantidad)

