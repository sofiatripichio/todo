// Crear un string de al menos 15 caracteres
let caracteres: string = "AAAAAAAAEEEEEOO"

// Crear funcion para contar letra A
function contarA (arregloDeCaracteres:string): number {
    let letraA: string ="A"
    let contador: number=0
    for (let indice=0; indice < arregloDeCaracteres.length; indice++)  {
        if (arregloDeCaracteres[indice]==letraA){
            contador++
        }
    }return contador
}

//Crear funcion para contar letra E

function contarE (arregloDeCaracteres:string): number {
    let letraE: string ="E"
    let contador: number=0
    for (let indice=0; indice < arregloDeCaracteres.length; indice++)  {
        if (arregloDeCaracteres[indice]==letraE){
            contador++
        }
    }return contador
}

//Crear funcioin para contar letra O
function contarO (arregloDeCaracteres:string): number {
    let letraO: string ="O"
    let contador: number=0
    for (let indice=0; indice < arregloDeCaracteres.length; indice++)  {
        if (arregloDeCaracteres[indice]==letraO){
            contador++
        }
    }return contador
}

console.log ("Los caracteres son: "+ caracteres)
console.log ("Cantidad de A: "+ contarA(caracteres))
console.log ("Cantidad de E: "+ contarE(caracteres))
console.log ("Canridad de O:" +contarO(caracteres))

// Crear arreglo para almacenar cantidades
let arreglo: number[] = new Array (contarA(caracteres), contarE(caracteres), contarO(caracteres))
console.log(arreglo)
