import * as rls from 'readline-sync';
let dimensionElegida : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let numerosseleccionados : number[] = new Array (dimensionElegida);
let indice : number;
let resultad: number = 0;
for (indice = 0; indice < dimensionElegida; indice++) {
numerosseleccionados[indice]= rls.question("Ingrese el numero que quiere poner en el lugar: "+ indice);
resultad += numerosseleccionados[indice];
}
for (indice = 0; indice < dimensionElegida; indice++) {
console.log("El numero que eligio en la posicion " + indice +" es: "+ numerosseleccionados[indice]);

}
console.log ("La suma de los numeros elegidos es"+ resultad);

