function cambiarVisibilidad(){
    let caja1= document.getElementById("div2");
    let caja2=document.getElementById("div1")
    document.getElementById ("div2").classList.toggle("visible")
    document.getElementById("div1").classList.toggle("escondido")
}


let boton1= document.getElementById("boton1");
boton1.addEventListener ("click", cambiarVisibilidad)

let boton2= document.getElementById("boton2")
boton2.addEventListener ("click", cambiarVisibilidad)