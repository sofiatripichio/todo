import * as readlineSync from 'readline-sync'
let cantidad: number= readlineSync.questionInt ("Ingrese cantidad de numeros")
let escalarUno: number[]= new Array (cantidad)
let escalarDos: number[]= new Array (cantidad)
function cargarVectores (v : number[], cantidad : number) {
    let indice : number;
    for (indice=0; indice<cantidad; indice++) {
    v[indice] = readlineSync.questionInt("Ingrese valor en posición"+ indice)
    }
}
 function productoEscalar (v1 : number[], v2: number[], cantidad : number):number {
        let acumulador: number=0
        let indice : number;
        for (indice=0; indice<cantidad; indice++) {
        acumulador= acumulador + (v1[indice]*v2[indice]);
        } return acumulador;
    }
function mostrarVector(v : number[], cantidad : number) {
        let indice : number;
        for (indice=0; indice<cantidad; indice++) {
        console.log(v[indice], "")
        } 
        }
cargarVectores(escalarUno, cantidad)
mostrarVector (escalarUno, cantidad)
cargarVectores(escalarDos, cantidad)
mostrarVector (escalarDos, cantidad)
console.log("Producto escalar:" + productoEscalar (escalarUno, escalarDos, cantidad))

