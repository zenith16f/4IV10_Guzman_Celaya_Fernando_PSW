// Proceso / Calculo
function examenF() {
  // Variables
  let capitalIngresado = document.querySelector("#capital").value;
  let tiempoIngresado = document.querySelector("#years").value;

  // Lector
  let lector = /\D/;

  // Llenado de campos obligatorio
  if (capitalIngresado == "") {
    alert("Llena los campos");
    return false;
  } else {
    // Validacion extra
    if (lector.test(capitalIngresado)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      // Parsing variables and new variables
      capitalIngresado = parseFloat(capitalIngresado);
      tiempoIngresado = parseFloat(tiempoIngresado);
      let tasaAnual = 0.96;
      let tasaMensual = tasaAnual / 12;
      let tiempoMeses = tiempoIngresado * 12;
      let monto = capitalIngresado / tiempoMeses;
      let tiempo = "";
      let montoI = "";
      let interes;
      let restante = capitalIngresado;
      let cuota;
      let cuotaI = "";
      let interesI = "";
      let restanteI = "";
      let final;
      let finalI = "";
      let totalInteres = 0;
      let totalPago;
      let totalCuota = 0;

      // Calculos
      if (capitalIngresado > 0 && capitalIngresado < 9999999) {
        for (let i = 0; i < tiempoMeses; i++) {
          // Variables para realizar calculos
          interes = restante * 0.08;
          cuota = interes + monto;
          // Variable para imprimir los datos
          restanteI += "$" + restante.toFixed(2) + "\n";
          tiempo += i + 1 + "\n";
          montoI += "$" + monto.toFixed(2) + "\n";
          cuotaI += "$" + cuota.toFixed(2) + "\n";
          interesI += "$" + interes.toFixed(2) + "\n";

          // Restante del prestamo
          restante = capitalIngresado - monto;
          capitalIngresado = restante;
          final = restante;
          finalI += "$" + Math.abs(final.toFixed(2)) + "\n";

          //Totales
          totalInteres += interes;
          totalPago = monto * tiempoMeses;
          totalCuota += cuota;
        }
        // Llenado de campos
        document.querySelector("#prestamo").textContent = restanteI;
        document.querySelector("#interes").textContent = interesI;
        document.querySelector("#pago").textContent = montoI;
        document.querySelector("#cuota").textContent = cuotaI;
        document.querySelector("#noPago").textContent = tiempo;
        document.querySelector("#restante").textContent = finalI;
        document.querySelector("#totalIntereses").textContent =
          "$" + totalInteres.toFixed(2);
        document.querySelector("#totalPago").textContent =
          "$" + totalPago.toFixed(2);
        document.querySelector("#totalCuota").textContent =
          "$" + totalCuota.toFixed(2);
      } else {
        alert("Ingresa una cantidad de capital valida");
        return false;
      }
    }
  }
}

//Vaciado de campos
function limpiar() {
  document.querySelector("#capital").value = "";
  document.querySelector("#noPago").textContent = "";
  document.querySelector("#prestamo").textContent = "";
  document.querySelector("#interes").textContent = "";
  document.querySelector("#cuota").textContent = "";
  document.querySelector("#pago").textContent = "";
  document.querySelector("#restante").textContent = "";
  document.querySelector("#totalIntereses").textContent = "";
  document.querySelector("#totalPago").textContent = "";
  document.querySelector("#totalCuota").textContent = "";
}

// Validacion de datos
function inputN(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}
