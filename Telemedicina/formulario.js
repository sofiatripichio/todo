let btnform = document.getElementById("btnform");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let dni = document.getElementById("DNI");
let telefono = document.getElementById("telefono");
let direc = document.getElementById("direc");
let fechan = document.getElementById("fecha");
let email = document.getElementById("email");
let motivoConsulta = document.getElementById("motivoConsulta");
let enfermedades = document.getElementById("enfermedades");
let medicaciones = document.getElementById("medicaciones");
let alergiaFarmacossi = document.getElementById("alergiaSi");
let alergiaFarmacosno = document.getElementById("alergiaNo");

let informacion = [];
btnform.addEventListener("click",(e)=> {
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = dni.value;
    informacion[3] = telefono.value;
    informacion[4] = direc.value;
    informacion[5] = fechan.value;
    informacion[6] = email.value;
    informacion[7] = enfermedades.value;
    informacion[8] = medicaciones.value;
    informacion[9] = alergiaFarmacossi.value;
    console.log(informacion);
    let blob = new Blob ([informacion],{type:"text/plain;charset utf-8"});
    saveAs(blob, "contact.txt");
    console.log(blob);
})