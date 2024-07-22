import* as readlineSync from 'readline-sync'


function cargarjugadores (jugadores:number[],cantidadDeJugadores:number){
    let i:number
    for (i=0; i< cantidadDeJugadores; i++){
        jugadores[i]= readlineSync.questionInt ("Ingrese edades de jugadores")
    
    }
}

function mostrarJugadores (jugadores:number[], cantidadDeJugadores:number){
    let i:number
    for (i=0;i>cantidadDeJugadores;i++){
        console.log(jugadores[i])

    }
}

function calcularPromedio (jugadores:number[], cantidadDeJugadores:number):number{
    let prome:number = 0;
let sumaTotal:number = 0;
let indice:number;
for (indice=0; indice < cantidadDeJugadores; indice++) {
sumaTotal = sumaTotal + jugadores[indice];
}
prome=sumaTotal/cantidadDeJugadores;
return prome;
}

let promedio : number = 0;
let cantidadDeJugadores : number = readlineSync.questionInt("Indique la cantidad de jugadores: ");
let jugadores : number[] = new Array (cantidadDeJugadores);
cargarjugadores (jugadores, cantidadDeJugadores);
mostrarJugadores(jugadores, cantidadDeJugadores);
promedio = calcularPromedio(jugadores, cantidadDeJugadores);
console.log (`El promedio las edades es de: ${promedio}`);
