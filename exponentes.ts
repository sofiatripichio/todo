import * as readlineSync from 'readline-sync';
let base:number= readlineSync.question ("Ingrese base")
let exponente:number= readlineSync.question ("Ingrese exponente")

function calcular (base:number, exponente:number) {
    if (exponente >=0){
        if (exponente===0){
            return 1;
        }else {
            return calcularPotencia(base, exponente);
        }
    }
}
function calcularPotencia(base: number, exponente:number){
    let resultado: number = 1;
    for (let i: number=0; i< exponente; i++) {
        resultado*=base;
    }
    return resultado;
}
let potencia: any= calcular (base,exponente)


let potenciaPordos= potencia*2

function hacerLinea() {
    var linea = "";
    for (var i = 0; i <= 80; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    return linea;
}
let valor: string = hacerLinea()
console.log (potenciaPordos)
console.log (valor)
