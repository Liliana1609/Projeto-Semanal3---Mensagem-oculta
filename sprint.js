
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

