function validarN(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function interes() {
  let valor = document.getElementById("cantidad").value;
  let result = parseInt(valor);
  let interes = result * 0.02;
  let total = result + interes;
  document.getElementById("cantidadI").value = "$ " + total;
}

function vaciar() {
  document.getElementById("cantidad").value = "";
  document.getElementById("cantidadI").value = "";
}
