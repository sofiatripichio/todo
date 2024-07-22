"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombreyapellido = "Sofia Tripichio";
var inicialNombre = nombreyapellido[0];
var inicialApellido = nombreyapellido[6];
console.log("Nombre y apellido:", nombreyapellido, ("Iniciales"), inicialNombre, inicialApellido);
//length: método que, al igual que con arreglos,retorna la longitud de una cadena.
var cadena = "Jorge Tripichio";
console.log(cadena.length);
//indexOf retorna la posisción del primer elemento. lastindexOf retorna la del ultimo. retorna -1 si no esta.
var frase = "Hola soy Sofia, Sofia es la capital de Bulgaria, Sofia significa sabiduria";
console.log(frase.indexOf("Sofia"));
console.log(frase.lastIndexOf("Sofia"));
//substring retorna la porción de la cadena entre las posiciones inicio y final.
console.log(frase.substring(39, 47));
//toUpperCase() pasa a mayusculas toLowerCase() pasa a minuscula
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
//- toString() método que (aplicado a un número) retorna una cadena
// parseInt() pasa cadena a numero entero perseFloat() a numerodecimal.
var numero1 = 33;
console.log(numero1.toString());
//Ejercicio: Convertir una palabra ingresada por elusuario en clave, según las reglas siguientes:
//si el caracter es una vocal reemplazar aeiou por . , ; : !
//si el caracter es un número o un operador matemático (+ -* / ) queda igual.
//si el caracter es una consonante minúscula pasar a mayúscula y viceversa.
var readlineSync = require("readline-sync");
var palabra = readlineSync.question("Ingrese palabra a convertiren clave ");
function convertirEnCLave(palabra) {
    var vocales = "aeiou";
    var signos = ". , ; : !";
    var numericos = "0123456789+-*/";
    var clave = "";
    for (var indice = 0; indice < palabra.length; indice++) {
        if (numericos.indexOf(palabra[indice]) >= 0) {
            clave += palabra[indice];
        }
        else {
            if (vocales.indexOf(palabra[indice]) >= 0) {
                clave += signos[vocales.indexOf(palabra[indice])];
            }
            else {
                if (palabra[indice] == palabra[indice].toUpperCase())
                    clave += palabra[indice].toLowerCase();
                else
                    clave += palabra[indice].toUpperCase();
            }
        }
    }
    return clave;
}
console.log("La palabra ingresada se convierte en", convertirEnCLave(palabra));
