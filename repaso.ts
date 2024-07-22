import* as readlineSync from 'readline-sync'

// funcion cargar vectores
function cargarVectores (vectores:number[],cantidad:number){
    let i:number
    for (i=0; i< cantidad; i++){
        vectores[i]= readlineSync.questionInt ("Ingrese dato en posicio"+ i+":")
    
    }
}

function mostrarVectores (vectores:number[], cantidad:number){
    let i:number
    for (i=0;i>cantidad;i++){
        console.log(vectores[i])

    }
}

function calcularPromedio (vectores:number[], cantidad:number):number{
    let prome:number = 0;
let sumaTotal:number = 0;
let indice:number;
for (indice=0; indice < cantidad; indice++) {
sumaTotal = sumaTotal + vectores[indice];
}
prome=sumaTotal/cantidad;
return prome;
}

let promedio : number = 0;
let cantidad : number = readlineSync.questionInt("Indique la cantidad: ");
let vectores : number[] = new Array (cantidad);
cargarVectores (vectores, cantidad);
mostrarVectores (vectores, cantidad);
promedio = calcularPromedio (vectores, cantidad);
console.log ("El promedio es", promedio)

