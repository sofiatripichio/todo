import *as readlineSync from 'readline-sync'
let dimensionelegida: number = readlineSync.questionInt ("Ingrese la dimension")
let i: number
let seleccion: number[] = new Array (dimensionelegida)
let numerosPositivo: number=0
let numerosNegativos: number=0
let esCero: number=0
for (i=0; i<dimensionelegida; i++){
    seleccion[i]= readlineSync.questionInt ("Ingrese los numeros a clasificar")
}
for (i=0;i<dimensionelegida;i++){
    if (seleccion[i]>0){numerosPositivo++}
    else if (seleccion[i]<0) {numerosNegativos++}
    else {esCero}
}

console.log (numerosPositivo, "positivos:")
console.log (numerosNegativos, "negativos:")
console.log (esCero, "cero:")
