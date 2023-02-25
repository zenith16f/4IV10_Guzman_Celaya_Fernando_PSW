// First answer
function funcionUno() {
  //Varaibles
  let capitalIngresado = document.getElementById("inversion").value;
  let tiempoIngresado = document.getElementById("meses").value;
  let ganancia;
  let totalCambiante;
  let totalFinal;

  //Proceso
  let lector = /\D/;

  if (lector.test(capitalIngresado) || lector.test(tiempoIngresado)) {
    alert("Ingresa datos validos");
    return false;
  } else {
    capitalIngresado = parseFloat(capitalIngresado);
    tiempoIngresado = parseFloat(tiempoIngresado);
    if (tiempoIngresado > 0 && tiempoIngresado <= 36) {
      if (capitalIngresado > 0 && capitalIngresado <= 999999) {
        for (let i = 0; i < tiempoIngresado; i++) {
          ganancia = capitalIngresado * 0.08;
          totalCambiante = capitalIngresado + ganancia;
          capitalIngresado = totalCambiante;
        }
        totalFinal = totalCambiante;
        alert(
          "Tu inversion en " +
            tiempoIngresado +
            " meses genera: $" +
            totalFinal.toFixed(2)
        );
      } else {
        alert("Ingresa una cantidad de capital valida");
        return false;
      }
    } else {
      alert("Los meses ingresados son invalidos");
      return false;
    }
  }
}

function vaciar() {
  document.getElementById("inversion").value = "";
  document.getElementById("meses").value = "";
}

// Second answer
function secondF() {
  let salarioV = document.getElementById("pagoV").value;
  let lector = /\D/;

  if (lector.test(salarioV)) {
    alert("Ingresa un salario valido");
    return false;
  } else {
    salarioV = parseFloat(salarioV);
    if (salarioV > 0 && salarioV < 999999) {
      let pagoV = salarioV * 5;
      let extra = 0.1 * pagoV;
      let salarioF = pagoV + extra;
      let impuestos = 0.12 * salarioF;
      let total = salarioF - impuestos;
      alert("Tu cobro mensual es de: $" + total);
    } else {
      alert("Ingresa un salario valido");
      return false;
    }
  }
}

function secondV() {
  document.getElementById("pagoV").value = "";
}

// Third answer
function thirdF() {}

function thirdV() {
  document.getElementById("producto").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("tipoProducto").value = "";
  document.getElementById("precioProducto").value = "";
}

// Fourth answer
function fourth() {}

// Fifth answer
function fifth() {}

//Validacion de teclado

function inputNumeros(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function inputLetras(event) {}
