function encontrarNumeroMasGrande(arreglo) {
    var maximo = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var maximo = encontrarNumeroMasGrande(numeros);
console.log("El número más grande en el arreglo es:", maximo);
