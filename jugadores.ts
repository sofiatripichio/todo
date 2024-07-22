import* as readlineSync from 'readline-sync'

function Aleatorio(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cargarjugadores (jugadores:number[],cantidadDeJugadores:number){
    let i:number
    for (i=0; i< cantidadDeJugadores; i++){
        jugadores[i]=Aleatorio(3,7)
    
    }
}

function mostrarJugadores (jugadores:number[], cantidadDeJugadores:number){
    let i:number
    for (i=0;i>cantidadDeJugadores;i++){
        console.log(jugadores[i])

    }
}

function cacularPromedio (jugadores:number[], cantidadDeJugadores:number):number{
    let prome:number = 0;
let sumaTotal:number = 0;
let indice:number;
for (indice=0; indice < cantidadDeJugadores; indice++) {
sumaTotal = sumaTotal + jugadores[indice];
}
prome=sumaTotal/cantidadDeJugadores;
return Math.floor(prome);
}

let promedio : number = 0;
let cantidadDeJugadores : number = readlineSync.questionInt("Indique la cantidad de jugadores: ");
let jugadores : number[] = new Array (cantidadDeJugadores);
cargarjugadores (jugadores, cantidadDeJugadores);
mostrarJugadores(jugadores, cantidadDeJugadores);
promedio = calcularPromedio(jugadores, cantidadDeJugadores);
console.log (`El promedio las edades es de: ${promedio}`);

