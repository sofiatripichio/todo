import *as readlinesync from 'readline-sync'

let numeroUno:number= readlinesync.questionInt("Ingrese primer numero: ")
let numeroDos:number= readlinesync.questionInt("Ingrese segundo numero: ")

function incrementarRestar (numeroUno, numeroDos:number) {
    for (let i:number=0; i<0;i++){
    
}console.log (numeroUno+1, numeroDos-1)}

function corroborarSiesMayor (numero,numero2:number): boolean {
    let corroborar: boolean = numeroUno> numeroDos;
    return corroborar;
}

let resultado : boolean = corroborarSiesMayor (numeroUno, numeroDos)

incrementarRestar(numeroUno, numeroDos)
console.log (resultado)

function corroborarSisonMultiplos (numero,numero2:number): boolean {
    let corroborar: boolean = numero % 2 === 0 && numero2 % 6===0
    return corroborar;
}
let resultadoDos :boolean = corroborarSisonMultiplos (numeroUno, numeroDos)
console.log (resultadoDos)

