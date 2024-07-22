import * as readlineSync from 'readline-sync'

function cargarVector (v:number[], cantidad:number)
{let indice:number
    for (indice=0; indice<cantidad;indice ++)
{v[indice]= readlineSync.questionInt ("Ingrese numero en posicion:  "+ indice+ " ")}
}
function mostararVector (v:number[], cantidad:number)
{let indice:number
    for (indice=0; indice<cantidad; indice++)
       {console.log (v[indice])
}
}
function contarPares (v:number[], cantidad:number): number
{let contadorDePares:number=0
let indice:number
for (indice=0;indice<cantidad; indice++){
    if (v [indice]%2===0){
        contadorDePares++
    }
} return contadorDePares
}
let cantidad:number = 10
let v:number[]= new Array(cantidad)
cargarVector (v, cantidad)
console.log ("Los numeros elegidos son: ")
mostararVector (v, cantidad)
let numerospar=contarPares (v, cantidad)
console.log ("Cantidad de numeros pares: "+numerospar)