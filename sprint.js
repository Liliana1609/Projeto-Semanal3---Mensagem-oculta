
var metodCifra = document.querySelector("select");

metodCifra.addEventListener("change", function (evento) {
  evento.preventDefault();

  var incremento = document.getElementById("dadosIncrem");

  if (evento.target.value == "cCesar") {
    incremento.style = "display: flex";
  } else {
    incremento.style = "display: none";
  }
});

var formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var texto = formulario.texto.value;
  var escolhaCifra = formulario.chooseCif.value;
  var btoes = formulario.cripto.value;
  var numIncrem = formulario.numIncrem.value;
  var fimMensagem = "";

  if (escolhaCifra == "cCesar") {
    fimMensagem = cesar(btoes, texto, numIncrem);
  } else {
    fimMensagem = base64(btoes, texto);
  }

  var resultadoTexto = document.getElementById("fimTexto");
  resultadoTexto.innerHTML = `${fimMensagem}`;
});

function cesar(cripto, texto, numIncrem) {
  numIncrem = Number(numIncrem);

  var fimMensagem = "";

  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    var codigo = letra.charCodeAt();

    if (cripto == "codificar") {
      codigo += numIncrem;
    } else {
      codigo -= numIncrem;
    }
    fimMensagem += String.fromCharCode(codigo);
  }
  return fimMensagem;
}

function base64(cripto, texto) {
  if (cripto == "codificar") {
    return btoa(texto);
  } else {
    return atob(texto);
  }
}
