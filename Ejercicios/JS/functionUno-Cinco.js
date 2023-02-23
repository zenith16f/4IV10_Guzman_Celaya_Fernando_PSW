// First answer

function first() {
  //Varaibles
  let capitalIngresado = parseFloat(document.getElementById("money").value);
  let tiempoIngresado = parseInt(document.getElementById("time").value);
  let ganancia;
  let totalCambiante;
  let totalFinal;
  let fobidden = /([0-9]*)\./;

  //Validacion de datos
  if (fobidden.test(capitalIngresado)) {
    alert("Ingresa un capital valido");
    return false;
  }

  if (fobidden.test(tiempoIngresado)) {
    alert("Ingresa un tiempo valido");
  }

  //Proceso
  if (tiempoIngresado > 0 && tiempoIngresado <= 36) {
    if (capitalIngresado > 0) {
      for (let i = 0; i < tiempoIngresado; i++) {
        ganancia = capitalIngresado * 0.08;
        totalCambiante = capitalIngresado + ganancia;
        capitalIngresado = totalCambiante;
      }
      totalFinal = totalCambiante;
      alert("$" + totalFinal.toFixed(2));
    } else {
      alert("Ingresa una cantidad de capital valida");
      return false;
    }
  } else {
    alert("Los meses ingresados son invalidos");
    return false;
  }
}

// Second answer

// Third answer

// Fourth answer

// Fifth answer
