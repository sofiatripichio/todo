import * as rls from 'readline-sync';
let nroDeseadoArreglo : number[] = new Array (5);
let numerito : number, indice : number;
for (indice = 0; indice < 5; indice++) {
numerito = rls.questionInt(`Indique el numero que desea incorporar en la posicion ${indice}: `);
nroDeseadoArreglo[indice] = numerito;
}
for (indice = 0; indice < 5; indice++) {
console.log(`El numero en la posicion ${indice} es ${nroDeseadoArreglo[indice]}`);
}

