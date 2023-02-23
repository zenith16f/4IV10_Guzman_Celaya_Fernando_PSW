// Sixth answer
function sixth() {
  let ingresoNacimiento = document.getElementById("fecha").value;
  let nacimientoIngresado = new Date(ingresoNacimiento);
  let fechaActual = new Date();
  let mesActual = fechaActual.getMonth();
  let añoActual = fechaActual.getFullYear();
  let edadAño;
  let edadMes;

  if (!!nacimientoIngresado.valueOf()) {
    año = parseInt(nacimientoIngresado.getFullYear());
    mes = parseInt(nacimientoIngresado.getMonth());
    dia = parseInt(nacimientoIngresado.getDate());
  }

  if (año > añoActual || año < "1940") {
    alert("No se puede ingresar ese año ");
    return false;
  } else {
    edadAño = añoActual - año;
    edadMes = mesActual - mes;

    if (edadMes < 0) {
      edadAño--;
    }

    alert("Tu edad es de: " + edadAño + " años");
  }
}

// Seventh answer
function seventh() {}

// Eighth answer
function eighth() {
  let numberOne = document.getElementById("numberOne").value;
  let numberTwo = document.getElementById("numberTwo").value;
  let numberThree = document.getElementById("numberThree").value;
  let mayor;
  let lector = /\D/;

  if (
    lector.test(numberOne) ||
    lector.test(numberTwo) ||
    lector.test(numberThree)
  ) {
    alert("Ingresa datos validos");
    return false;
  } else {
    mayor = Math.max(numberOne, numberTwo, numberThree);
    console.log(mayor);
  }
  //   console.log(numberOne + "" + numberTwo + "" + numberThree);
}

// Ninth answer
function ninth() {}

// Tenth answer
function tenth() {}
