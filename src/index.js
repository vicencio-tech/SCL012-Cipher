
const botoncifrar = document.getElementById("botonCifrar");
botoncifrar.addEventListener("click", function () { //al boton cifrar cuando escucha el click hara tal funcion
const offset = parseInt(document.getElementById("ingresoOffset").value);//capturar el valor del offset y guardarlo en esa variable
let mensaje = document.getElementById("cuadrodetexto").value;
let resultadoCifrar=cipher.encode(offset,mensaje);
document.getElementById("cuadrodetexto").value=resultadoCifrar;// se le asigna ese resultado cifrado para que lo pinte

});

const botondescifrar = document.getElementById("botonDescifrar");
botondescifrar.addEventListener("click", function () { //al boton cifrar cuando escucha el click hara tal funcion
const offset = parseInt(document.getElementById("ingresoOffset").value);//capturar el valor del offset y guardarlo en esa variable
const mensaje = document.getElementById("cuadrodetexto").value;
let resultadoDescifrar=cipher.decode(offset,mensaje);
document.getElementById("cuadrodetexto").value=resultadoDescifrar;
});

const botonborrar = document.getElementById("botonBorrar");
botonborrar.addEventListener("click", borrar);
function borrar (){
document.getElementById("cuadrodetexto").value="";
}












