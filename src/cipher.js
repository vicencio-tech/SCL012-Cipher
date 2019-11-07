window.cipher = {
  
  encode: () => {
    /* Acá va tu código */
    var letra = 'ABC';
    var letraAscii;
    var posicionCifrada;
    var letraCifrada;
    var offSet = 3;
    letraAscii = letra.charCodeAt(0);
    console.log(letraAscii);

    //aplicar formula
    posicionCifrada = (letraAscii - 65 + offSet) % 26 + 65;

    //pasar ascii cifrado a su letra correspondiente
    letraCifrada = String.fromCharCode(posicionCifrada);

    //mostrar
    console.log('La letra cifrada es : ' + letraCifrada);
  },
  decode: () => {
    /* Acá va tu código */
  }
};
