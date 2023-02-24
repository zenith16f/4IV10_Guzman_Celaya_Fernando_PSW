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
    alert("El numero mayor es: " + mayor);
  }
  //   console.log(numberOne + "" + numberTwo + "" + numberThree);
}

// Ninth answer
function ninth() {
  let salario = document.getElementById("payment").value;
  let horasTrabajadas = document.getElementById("hours").value;
  let horasSobrantes;
  let horasDoble;
  let horasTriple;
  let pago;
  let pagoExtra;
  let pagoDoble;
  let pagoTriple;
  let pagoTotal;
  let lector = /\D/;

  if (
    lector.test(salario) ||
    lector.test(horasTrabajadas) ||
    salario == 0 ||
    horasTrabajadas == 0
  ) {
    alert("Ingresa datos validos");
    return false;
  } else {
    if (horasTrabajadas > 40) {
      pagoExtra = true;
    } else {
      pagoExtra = false;
    }

    if (pagoExtra == true) {
      horasSobrantes = horasTrabajadas - 40;
      if (horasSobrantes > 8) {
        horasTriple = horasSobrantes - 8;
        horasDoble = horasSobrantes - horasTriple;
        pagoDoble = horasDoble * (salario * 2);
        pagoTriple = horasTriple * (salario * 3);
        pago = 40 * salario;
        pagoTotal = pago + pagoDoble + pagoTriple;
      } else {
        horasDoble = horasSobrantes;
        pagoDoble = horasDoble * (salario * 2);
        pago = 40 * salario;
        pagoTotal = pago + pagoDoble;
      }
    } else {
      pagoTotal = horasTrabajadas * salario;
    }
    alert(pagoTotal);
  }
}

// Tenth answer
function tenth() {}
