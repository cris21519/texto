let textoEntrada = document.getElementById('textoEntrada');
let textoResultado = document.getElementById('textoResultado');


let mensajeCopiado = document.getElementById('mensajeCopiado');

let botonCopiar = document.getElementById('botonCopiar');
let resultadoInformacion = document.getElementById('resultadoInformacion');
let resultadoMunieco = document.getElementById('resultadoMunieco');


function encriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
      modificarDisplay()
  }
}

function validarTexto() {
  let expresionRegular = /^[a-z\s!]*$/;
  if (textoEntrada.value.trim() !== "") { 
    if (!expresionRegular.test(textoEntrada.value)) { 
      alert('Debes ingresar letras en minúsculas y sin acentos.');
      return false;
    }
    return true;
  } else {
    alert('Debes ingresar un texto, el campo no puede estar vacio.');
    return false;
  }
}


function copiarTexto() {
if(textoResultado.value !== ""){
  navigator.clipboard.writeText(textoResultado.value)
 mensajeCopiado.style.display = 'block';

  setTimeout(function() {
    mensajeCopiado.style.display = 'none';
  }, 1000);
}else{
  alert('El campo esta vacio, no hay texto que copiar.')
}

}


function desencriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
      modificarDisplay()
  }
}

function modificarDisplay() {

  resultadoMunieco.style.display = 'none';
  resultadoInformacion.style.display = 'none';
  textoResultado.style.display = 'block';
  botonCopiar.style.display = 'block';
}

