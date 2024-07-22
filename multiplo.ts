import * as readlineSync from 'readline-sync'
let numero: number = readlineSync.questionInt ("Ingrese número")
let numerodos: number = readlineSync.questionInt ("Ingrese otro número para comprobar si es mùltiplo")

function esMultiplo ( numerito, multiploDe:number): boolean {
    let calcular: boolean = numerito % multiploDe === 0;
    return calcular;
}

let multiplo : boolean = esMultiplo (numero, numerodos)
console.log (multiplo)

