import* as fs from 'node:fs'


// let contenido: number=9;
// let contenidoString: string= contenido.toString()
const nombres: string[]= ["Nacho", "Sofia", "Berni"] 
let contenido: string= ""
for (let i:number=0; i<nombres.length; i++ ){
    contenido+= (nombres[i]+ " ")
}
//guardar info
fs.writeFileSync('./test.txt', contenido);
//leer info
const datos:string = fs.readFileSync('./test.txt', "utf8");
console.log (datos)
//¿Como hacemos para que vuelva a ser un array de datos? Vamos a utilizar el metodo trim() para que 
//nos saque los espacios por detras y delante del
//texto y “split” para separar strings y crear un nuevo array
const datosDos: string= datos.trim()
const nuevoArreglo: string[]= datosDos.split(" ");

console.log (nuevoArreglo)
