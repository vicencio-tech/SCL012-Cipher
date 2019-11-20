
const botoncifrar = document.getElementById("botonCifrar"); //guardar el elemento 
botoncifrar.addEventListener("click", function () { //ell boton cifrar cuando escucha el click hara tal funcion
const offset = parseInt(document.getElementById("ingresoOffset").value);//capturar el valor del offset y guardar en una variable
let mensaje = document.getElementById("cuadrodetexto").value;//capturar el valor del mensaje y guardaren una variable
let resultadoCifrar=cipher.encode(offset,mensaje); //guardar el resultado de la función en una variable
document.getElementById("cuadrodetexto").value=resultadoCifrar;// se pinta el resultado de la función en el area de texto

});

const botondescifrar = document.getElementById("botonDescifrar");
botondescifrar.addEventListener("click", function () { 
const offset = parseInt(document.getElementById("ingresoOffset").value);
const mensaje = document.getElementById("cuadrodetexto").value;
let resultadoDescifrar=cipher.decode(offset,mensaje);
document.getElementById("cuadrodetexto").value=resultadoDescifrar;
});

const botonborrar = document.getElementById("botonBorrar");
botonborrar.addEventListener("click", borrar);
function borrar (){
document.getElementById("cuadrodetexto").value="";
}












