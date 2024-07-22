import * as rls from 'readline-sync';
let dimensionSeleccionada : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let listadenumeros : number[] = new Array (dimensionSeleccionada);
let indice : number;
let resultados : number = 0;
for (indice = 0; indice < dimensionSeleccionada; indice++) {
listadenumeros[indice] = rls.questionInt("Indique el nro que va en la posicion"+ indice);
resultados += listadenumeros[indice];
}
for (indice = 0; indice < dimensionSeleccionada; indice++) {
console.log("El numero en la posicion"+ indice + "es:" + listadenumeros[indice]);
}
console.log("La suma del arreglo es:" + resultados);
