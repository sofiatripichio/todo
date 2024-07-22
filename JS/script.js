"use strick";

function cambiarTexto(){
    let titulo= "Hola "+ document.getElementById("inputText").value+ "!";
    document.getElementById ("titulo").innerText=titulo;
}

let boton= document.getElementById("boton");
boton.addEventListener ("click", cambiarTexto);

let boton2= document.getElementById("botonDos");
boton2.addEventListener ("click", function(event){
    event.preventDefault();
    let param1= document.getElementById("inputTextDos").value;
    let param2= document.getElementById("inputTextTres").value;
    verificarConParametros (param1, param2)
});

function verificarConParametros (param1, param2){
    alert ("Completo: "+param1+" "+param2)

}