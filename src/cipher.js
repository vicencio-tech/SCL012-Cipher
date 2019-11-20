window.cipher = {
  
  encode: (offset, mensaje) => { 
    
    let letraCifrada ="";
    let resultado =""; 
    
    if (isNaN(offset)) { //Evalúa un argumento para determinar si es un número
              alert("Favor ingrese clave") 
    } else {

      //Recorrer cada letra del string y convertir a codigo ascii
    for (let i=0; i<mensaje.length; i++) {
              let posicionAscii=mensaje.charCodeAt(i); //obtener el codigo Ascii de la posicion i
              let offsetApplicado;

              if(posicionAscii >=65 && posicionAscii <=90){
                offsetApplicado = (posicionAscii - 65 + parseInt(offset)) % 26 + 65; //Aplicar formula para mayusculas
                //convertir codigo ascii a letra cifrada
                letraCifrada = String.fromCharCode(offsetApplicado);
              }

              if (posicionAscii ===32){ //Para reconocer los espacios
                letraCifrada += " ";
              
              }

              if(posicionAscii >=97 && posicionAscii <=122){ //Aplicar formula para mayusculas
                offsetApplicado = (posicionAscii - 97 + parseInt(offset)) % 26 + 97;
                //convertir codigo ascii a letra cifrada
                letraCifrada = String.fromCharCode(offsetApplicado);
              }

              resultado = resultado + letraCifrada;//de concatena cada letra del string para armar la palabra cifrada
              letraCifrada =""; // se borra el valor de la variable cada vez que se inicie un nuevo ciclo
    } // fin del for

    } 
    return resultado;    
  },

  decode: (offset, mensaje) => { 
    
    let letraCifrada="";
    let resultado=""; 
    
    if (isNaN(offset)) { 
              alert("Favor ingrese clave") 
    } else {

    for (let i=0; i<mensaje.length; i++) {
              let posicionAscii=mensaje.charCodeAt(i); 
              let offsetAplicado;

              if(posicionAscii >=65 && posicionAscii <=90){ 
                offsetAplicado = (posicionAscii - 90 - parseInt(offset)) % 26 + 90;
            
                letraCifrada = String.fromCharCode(offsetAplicado);
              }

              if (posicionAscii ===32){ 
                letraCifrada += " ";
              }

              if(posicionAscii >=97 && posicionAscii <=122){ 
                offsetAplicado = (posicionAscii - 122 - parseInt(offset)) % 26 + 122;
                
                letraCifrada = String.fromCharCode(offsetAplicado);
              }
                
              resultado = resultado + letraCifrada;
              letraCifrada ="";
    } // fin del for

    }
    return resultado; 
  }



}

