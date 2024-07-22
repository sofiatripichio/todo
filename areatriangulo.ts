let i:number;
for (i = 1; i <= 100; i++) {
console.log("El area es = ", calcularAreaTriangulo (i, i*2));
}

function calcularAreaTriangulo (base:number, altura:number):number {
return (base*altura)/2;
};