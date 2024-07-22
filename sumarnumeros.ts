import * as readlineSync from 'readline-sync'
let listaA:number[] = new Array(6)
let listaB:number[]= new Array (6)
let sumaAyB: number[]= new Array(6)
let i:number
for (i=0;i<6;i++) {
    listaA[i]= readlineSync.questionInt ("ingrese numeros tipo A para sumar")
}
for (i=0;i<6;i++){
    listaB[i]= readlineSync.questionInt ("Ingrese numeros tipo B para sumar")
}
console.log 
for (i=0;i<6;i++){
    sumaAyB[i]=listaA[i]+ listaB[i];
    console.log (sumaAyB[i])
}
