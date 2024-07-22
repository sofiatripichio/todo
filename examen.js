// Crear un string de al menos 15 caracteres
var caracteres = "AAAAAAAAEEEEEOO";
// Crear funcion para contar letra A
function contarA(arregloDeCaracteres) {
    var letraA = "A";
    var contador = 0;
    for (var indice = 0; indice < arregloDeCaracteres.length; indice++) {
        if (arregloDeCaracteres[indice] == letraA) {
            contador++;
        }
    }
    return contador;
}
//Crear funcion para contar letra E
function contarE(arregloDeCaracteres) {
    var letraE = "E";
    var contador = 0;
    for (var indice = 0; indice < arregloDeCaracteres.length; indice++) {
        if (arregloDeCaracteres[indice] == letraE) {
            contador++;
        }
    }
    return contador;
}
//Crear funcioin para contar letra O
function contarO(arregloDeCaracteres) {
    var letraO = "O";
    var contador = 0;
    for (var indice = 0; indice < arregloDeCaracteres.length; indice++) {
        if (arregloDeCaracteres[indice] == letraO) {
            contador++;
        }
    }
    return contador;
}
console.log("Los caracteres son: " + caracteres);
console.log("Cantidad de A: " + contarA(caracteres));
console.log("Cantidad de E: " + contarE(caracteres));
console.log("Canridad de O:" + contarO(caracteres));
// Crear arreglo para almacenar cantidades
var arreglo = new Array(contarA(caracteres), contarE(caracteres), contarO(caracteres));
console.log(arreglo);
