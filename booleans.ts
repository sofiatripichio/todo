import * as readlineSync from 'readline-sync'
let numero: number = readlineSync.questionInt ("Ingrese un número")
let numerodos: number = readlineSync.questionInt ("Ingrese otro número")

function corroborarSilaSumaDaDos (numero,numerodos:number): boolean {
    let corroborar: boolean = numero+ numerodos===2;
    return corroborar;
}

let resultado : boolean = corroborarSilaSumaDaDos (numero, numerodos)
console.log (resultado)

