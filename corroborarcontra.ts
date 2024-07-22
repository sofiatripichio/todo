import * as readlineSync from 'readline-sync'
let contraseña: string = readlineSync.question("Ingrese su contraseña")
let contraseñaDos: string = readlineSync.question("reingrese contraseña")


function corroborarContraseña (contraseña, contraseñaDos): boolean {
    let corroborar: boolean = (contraseña===contraseñaDos)
    return corroborar;
}

let resultado : boolean = corroborarContraseña (contraseña, contraseñaDos)
console.log (resultado)
