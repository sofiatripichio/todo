import *as readlineSync from 'readline-sync'
let llegadaColectivo: string;

llegadaColectivo = readlineSync.question("Llego el colectivo? (S/N)");

while (llegadaColectivo == "N") {
     console.log("Todavia no llego");

     llegadaColectivo = readlineSync.question("Llego el colectivo? (S/N)");
 }
 console.log("Llego el colectivo");