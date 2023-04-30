/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
$(function () {
  function validar(nombre, apPaterno, apMaterno, direccion, correo, password) {
    // Lectores
    let lector = /\d/;

    // Getting the inputs
    correo = document.getElementById("correo").value;
    nombre = document.getElementById("nom").value;
    apPaterno = document.getElementById("appat").value;
    apMaterno = document.getElementById("apmat").value;
    direccion = document.getElementById("dir").value;
    password = document.getElementById("password").value;

    //Validating the inputs
    if (
      nombre == "" &&
      apPaterno == "" &&
      apMaterno == "" &&
      direccion == "" &&
      correo == "" &&
      password == ""
    ) {
      alert("Llena todos los campos para continuar");
      return false;
    } else if (
      nombre.length < 2 ||
      apPaterno.length < 2 ||
      apMaterno.length < 2 ||
      direccion.length < 2 ||
      correo.length < 2 ||
      password.length < 2
    ) {
      alert("Los campos deben ser rellenados de forma correcta");
      return false;
    } else if (
      lector.test(nombre) ||
      lector.test(apPaterno) ||
      lector.test(apMaterno)
    ) {
      alert(
        "Los campos de nombre, apellido paterno y materno no deben contener números"
      );
    } else {
      return true;
    }
  }

  // Submit data
  $("#submitUser").click(function () {
    let nombre = $("#nom").val();
    let apPaterno = $("#appat").val();
    let apMaterno = $("#apmat").val();
    let direccion = $("#dir").val();
    let correo = $("#correo").val();
    let password = $("#password").val();

    validar(nombre, apPaterno, apMaterno, direccion, correo, password);
  });
});

// Input numbers
function inputNumeros(e) {
  let teclado = document.all ? e.keyCode : e.which;
  if (teclado == 8) return true;
  let patron = /[0-9\d .]/;
  let codigo = String.fromCharCode(teclado);
  return patron.test(codigo);
}

// Input letters
function inputLetras() {
  var charCode = event.keyCode;

  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode == 8
  )
    return true;
  else return false;
}
