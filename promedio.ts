import * as readlynSync from 'readline-sync'

let cantidadDeAlumnos:number = readlynSync.questionInt ("Ingrese cantidad de alumnos")
let nombreAlumnos: string[]= new Array (cantidadDeAlumnos)
let notaPrimerT: number[]= new Array (cantidadDeAlumnos)
let notaSegundoT: number[]= new Array (cantidadDeAlumnos)
let notaTercerT: number[]= new Array (cantidadDeAlumnos)

for (let indice=0; indice< cantidadDeAlumnos; indice++){
    nombreAlumnos[indice]= readlynSync.question ("Ingrese nombre del alumno");
    notaPrimerT[indice]=readlynSync.questionInt ("Ingrese nota de primer trimestre");
    notaSegundoT[indice]=readlynSync.questionInt ("Ingrese nota de segundo trimestre")
    notaTercerT[indice]=readlynSync.questionInt ("Ingrese nota de tercer trimestre")

}
let alumBuscado: string = readlynSync.question("A quien busca: ");
let encontrado: boolean = false;
let promedio: number = 0;
let i: number = 0;

while (i < cantidadDeAlumnos && !encontrado) {
     if (nombreAlumnos[i] == alumBuscado) {
       encontrado = true;
         promedio = (notaPrimerT[i] + notaSegundoT[i] + notaTercerT[i]);
         promedio /=3;
     }
     i++;
 }

 if (encontrado) {console.log("El promedio de ", alumBuscado, " es ", promedio);
 } else {
     console.log("No se pudo encontrar a ", alumBuscado);

}

