// First answer
function first() {
  //Varaibles
  let capitalIngresado = document.getElementById("money").value;
  let tiempoIngresado = document.getElementById("time").value;
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

function firstI(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

function vaciar() {
  document.getElementById("money").value = "";
  document.getElementById("time").value = "";
}

// Second answer
function second() {}

// Third answer
function third() {}

// Fourth answer
function fourth() {}

// Fifth answer
function fifth() {}
