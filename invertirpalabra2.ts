import * as rls from 'readline-sync'

function mostrarVector(v: string[], cantidad: number) {
    for (let indice = 0; indice < cantidad; indice++) {
        console.log(v[indice] + " ");
    }
}
function mostrarVectorInvertido (v:string[], cantidad: number){
for ( let indice= cantidad-1; indice>=0; indice --)
     {  console.log (v[indice] + " ");
}
}



let palabra: string = rls.question("Ingrese la palabra que desea invertir: ");
let cantidadLetras: number = palabra.length;
let arregloLetras: string[] = palabra.split("");

mostrarVector(arregloLetras,cantidadLetras);
console.log("Mostrando vector invertido");
mostrarVectorInvertido (arregloLetras, cantidadLetras);

