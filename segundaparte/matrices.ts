let filas: number = 3;//=cantidad de filas
let cols: number = 4;//=cantidad de columnas
let matriz: number[][] = new Array(filas);//new Array(cantidad de filas que quiero) 

//estas son las filas
for (let i: number = 0; i < filas; i++) {
    matriz[i] = new Array(cols);
}

function cargarMatriz(matriz: number[][], f: number, c: number) {
    let fil: number, col: number;
    for (fil = 0; fil < f; fil++) {
        for (col = 0; col < c; col++) {
            matriz[fil][col] = Math.floor(Math.random() * 2);
        }
    }
}
cargarMatriz(matriz, filas, cols);
console.table(matriz);

function mostrarMatriz(matriz: number[][], f: number, c: number) {
    let fil: number, col: number;
    for (fil = 0; fil < f; fil++) {
        let cadena: string = " ";
        for (col = 0; col < c; col++) {
            cadena += ` ${matriz[fil][col]} `;
        }
        console.log(cadena);
    }
}
mostrarMatriz( matriz,filas,cols);