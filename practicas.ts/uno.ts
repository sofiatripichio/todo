//funcion cargar vector
function cargarVector(v : number[], cantidad : number) {
    let indice : number;
    for (indice=0; indice<cantidad; indice++) {
    v[indice] = rls.questionInt("Ingrese el valor en: "+indice + ":");
}
}

//funcion mostrarvector
function mostrarVector(v : number[], cantidad : number) {
    let indice : number;
    for (indice=0; indice<cantidad; indice++) {
    console.log(v[indice])
    }
    }    

 //funcion mostrarvector invertido
 function mostrarVectorInvertido(v : number[], cantidad : number) {
    let indice : number;
    for (indice=cantidad-1; indice>=0; indice--) {
    console.log(v[indice])
}
}

//funcion invertir vector con While
function invertirVector(v : number[], cantidad : number) {
    let indiceIzq : number = 0;
    let indiceDer : number = cantidad-1;
    let aux : number;
    while (indiceIzq < indiceDer) {
    aux = v[indiceIzq];
    v[indiceIzq] = v[indiceDer];
    v[indiceDer] = aux;
    indiceIzq++;
    indiceDer--;
    }
    }

    import * as rls from 'readline-sync';
let cantidad : number = 5;
let v : number[] = new Array(cantidad);
console.log("Cargando v");
cargarVector(v, cantidad);
console.log("Mostrando invertido");
mostrarVectorInvertido(v, cantidad);