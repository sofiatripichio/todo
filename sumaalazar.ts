import* as readlineSync from 'readline-sync'

function cargarNumeros (numero:number[], cantidad:number){
    for (let i:number=0; i<cantidad; i++){
        numero[i]= Math.floor(Math.random()*100);
    }
}
function mostrarNumeros (numero:number[], cantidad:number){
    for (let i:number=0; i<cantidad;i++){
        console.log (numero[i])
    }
}
function sumaDeNumeros (numeroUno:number[], numeroDos:number [],numeroTres:number[], cantidad:number){
    for (let i:number=0; i<cantidad;i++){
        numeroTres[i]= numeroUno[i]+numeroDos[i]
    }
}
let cantidad:number= readlineSync.questionInt ("Ingrese cantidad de numeros a sumar:")
let arregloUno: number[]= new Array(cantidad)
let arregloDos: number[]= new Array(cantidad)
let arregloTres: number[]= new Array(cantidad)
cargarNumeros (arregloUno, cantidad)
cargarNumeros (arregloDos, cantidad)
sumaDeNumeros (arregloUno, arregloDos, arregloTres, cantidad)
mostrarNumeros (arregloUno, cantidad)
mostrarNumeros (arregloDos, cantidad)
console.log ("La suma de los números es:")
mostrarNumeros (arregloTres, cantidad)
