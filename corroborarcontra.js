"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var contraseña = readlineSync.question("Ingrese su contraseña");
var contraseñaDos = readlineSync.question("reingrese contraseña");
function corroborarContraseña(contraseña, contraseñaDos) {
    var corroborar = (contraseña === contraseñaDos);
    return corroborar;
}
var resultado = corroborarContraseña(contraseña, contraseñaDos);
console.log(resultado);
