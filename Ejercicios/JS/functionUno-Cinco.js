// First answer

function first() {
  let capitalIngresado = parseFloat(document.getElementById("money").value);
  let tiempoIngresado = parseInt(document.getElementById("time").value);
  let ganancia;
  let totalCambiante;
  let totalFinal;
  for (let i = 0; i < tiempoIngresado; i++) {
    ganancia = capitalIngresado * 0.08;
    totalCambiante = capitalIngresado + ganancia;
    capitalIngresado = totalCambiante;
  }
  totalFinal = totalCambiante;
  alert("$" + totalFinal.toFixed(2));
}

// Second answer

// Third answer

// Fourth answer

// Fifth answer
