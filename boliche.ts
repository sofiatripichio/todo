import* as readlineSync from 'readline-sync'

function Aleatorio(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cargarPersonas (personas:number[],cantidadDePersonas:number){
    let i:number
    for (i=0; i< cantidadDePersonas; i++){
        personas[i]=Aleatorio(19,40)
    
    }
}
function mostrarPersonas(personas : number[], capacidad : number) {
    let i: number;
    let lista : string = ("");
    for (i=1; i <= capacidad; i++) {
    lista += (personas[i]);
    console.log (lista);
    }
}


let cantidadDePersonas : number = 6;
let personas : number[] = new Array (cantidadDePersonas);
cargarPersonas (personas, cantidadDePersonas);
mostrarPersonas(personas, cantidadDePersonas);
