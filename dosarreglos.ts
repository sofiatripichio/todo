import * as rls from 'readline-sync';
let nombrePersonas : string[] = new Array (2);
let nroDeseadoArreglo : number[] = new Array (3);
let indice : number;
for (indice = 0; indice < 2; indice++) {
    nombrePersonas[indice] = rls.question("Ingrese el nombre que quiere poner en el lugar: "+ indice);
    }
for (indice = 0; indice < 3; indice++) {
nroDeseadoArreglo[indice]= rls.questionInt("Indique el numero que desea incorporar en la posicion: "+indice);
}
for (indice = 0; indice < 2; indice++) {
    console.log("La persona que ingreso en la posicion "+ indice+ " es: " + nombrePersonas[indice]);
    }
for (indice = 0; indice < 3; indice++) {
    console.log("El numero en la posicion "+ indice + " es:"+ nroDeseadoArreglo[indice]);
    }

