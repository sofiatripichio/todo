import * as readlineSync from 'readline-sync';

let azul: number = 40;
let verde: number = 35;
let amarilla: number = 30;

function asignarAula(infantes: number): string {
    let aulaAsignada = "";
    let bancosMinimos = 41; // Mayor capacidad + 1

    let bancosVaciosAzul = azul - infantes;
    let bancosVaciosVerde = verde - infantes;
    let bancosVaciosAmarilla = amarilla - infantes;

    if (bancosVaciosAzul >= 0 && bancosVaciosAzul < bancosMinimos) {
        bancosMinimos = bancosVaciosAzul;
        aulaAsignada = "Azul";
    }

    if (bancosVaciosVerde >= 0 && bancosVaciosVerde < bancosMinimos) {
        bancosMinimos = bancosVaciosVerde;
        aulaAsignada = "Verde";
    }

    if (bancosVaciosAmarilla >= 0 && bancosVaciosAmarilla < bancosMinimos) {
        bancosMinimos = bancosVaciosAmarilla;
        aulaAsignada = "Amarilla";
    }

    return aulaAsignada;
}

let numeroDeInfantes = readlineSync.questionInt("Ingrese el número de infantes: ");
let aulaAsignada = asignarAula(numeroDeInfantes);
console.log(`El aula asignada es: ${aulaAsignada}`);