window.cipher = {
  
  encode: (offset, mensaje) => { //Funcion con dos parametros
    
    let letraCifrada ="";
    let resultado =""; //variable que guardara el resultado final
    
    if (isNaN(offset)) { //Evalúa un argumento para determinar si es un número
              alert("Favor ingrese clave") 
    } else {

      //Recorrer cada letra del string y convertir a codigo ascii
    for (let i=0; i<mensaje.length; i++) {
              let posicionAscii=mensaje.charCodeAt(i); //obtener el codigo ascii de la posicion i
              let offsetApplicado;

              if(posicionAscii >=65 && posicionAscii <=90){
                offsetApplicado = (posicionAscii - 65 + parseInt(offset)) % 26 + 65; //mayusculas
                //convertir codigo ascii a letra cifrada
                letraCifrada = String.fromCharCode(offsetApplicado);
              }

              if (posicionAscii ===32){
                letraCifrada += " ";
              
              }

              if(posicionAscii >=97 && posicionAscii <=122){ //minúsculas
                offsetApplicado = (posicionAscii - 97 + parseInt(offset)) % 26 + 97;
                //convertir codigo ascii a letra cifrada
                letraCifrada = String.fromCharCode(offsetApplicado);
              }

              resultado +=  letraCifrada;    //junto todas las palabras en la variable resultado.
              letraCifrada =""; //para asegurarse que se borre la variable cada vez que se inicie un nuevo ciclo
    } // fin del for

    } 
    return resultado;    
  },

  decode: (offset, mensaje) => { 
    
    let letraCifrada="";
    let resultado=""; //variable que guardara el resultado final
    
    if (isNaN(offset)) { //Evalúa un argumento para determinar si es un número
              alert("Favor ingrese clave") 
    } else {

      //Recorrer cada letra del mensaje y convertir a codigo ascii
    for (let i=0; i<mensaje.length; i++) {
              let posicionAscii=mensaje.charCodeAt(i); //obtener el codigo ascii de la posicion i
              let offsetAplicado;

              if(posicionAscii >=65 && posicionAscii <=90){ //mayusculas
                offsetAplicado = (posicionAscii - 90 - parseInt(offset)) % 26 + 90;
                //convertir codigo ascii a letra cifrada
                letraCifrada = String.fromCharCode(offsetAplicado);
              }

              if (posicionAscii ===32){ //espacio
                letraCifrada += " ";
              }

              if(posicionAscii >=97 && posicionAscii <=122){ //minúsculas
                offsetAplicado = (posicionAscii - 122 - parseInt(offset)) % 26 + 122;
                //convertir codigo ascii a letra cifrada
                letraCifrada = String.fromCharCode(offsetAplicado);
              }
                
              resultado +=  letraCifrada; //junto todas las palabras en la variable resultado.
              letraCifrada ="";
    } // fin del for

    }
    return resultado; 
  }



}

