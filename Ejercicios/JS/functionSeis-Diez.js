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
  //   alert(ingresoNacimiento);
  //   alert(fechaActual);
}
