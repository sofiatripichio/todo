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
//permite mostrar un arreglo “arreglo” dedimensión “cantidad” en una única línea, separando los
//valores con un espacio
    function escribirEnUnaLinea(arreglo:number[], cantidad:number) {
        let i:number;
        let vector:string =
        "" ;
        for (i = 0 ; i<cantidad; i++) {
        vector += `${arreglo[i]} `;
        }
        console.log (vector);
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
let cantidad : number = rls.questionInt("Ingrese la cantidad de números:");
let v : number[] = new Array(cantidad);
console.log("Cargando v");
cargarVector(v, cantidad);
console.log ("Numeros cargados:")
escribirEnUnaLinea (v,cantidad)

console.log("Mostrando invertido");

mostrarVectorInvertido(v, cantidad);
