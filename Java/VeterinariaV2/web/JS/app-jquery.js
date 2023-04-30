/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

$(function () {
  // Validating the values
  function validacionMascota(
    nombre,
    especie,
    raza,
    sexo,
    fechaNac,
    pelaje,
    señas
  ) {
    // Regular expressions
    lectorLetras = /\D/;
    lectorNumeros = /^[\d$&+,:;=?@#|'<>.^*()%!-]+$/g;
    lectorFechas = /^\d{4}-\d{2}-\d{2}$/;

    // Day input
    let fechaIngresada = new Date(fechaNac);

    if (!!fechaIngresada.valueOf()) {
      año = parseInt(fechaIngresada.getFullYear());
      mes = parseInt(fechaIngresada.getMonth());
      dia = parseInt(fechaIngresada.getDate());
    }

    let fechaActual = new Date();
    let fechaFebrero = new Date("2023-02-28");

    // Actual date
    let añoActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();

    // February date
    let mesFebrero = fechaFebrero.getMonth();
    let diaFebrero = fechaFebrero.getDate();

    // Validating the values
    if (
      nombre == "" ||
      especie == "" ||
      raza == "" ||
      sexo == "" ||
      fechaNac == "" ||
      pelaje == "" ||
      señas == ""
    ) {
      alert("Por favor, llene todos los campos");
      return false;
    } else {
      if (nombre.length < 3 || lectorNumeros.test(nombre)) {
        alert("Por favor, ingrese un nombre válido");
        return false;
      } else {
        if (especie === null) {
          alert("Por favor, ingrese una especie válida");
          return false;
        } else {
          if (raza === null) {
            alert("Por favor, ingrese una raza válida");
            return false;
          } else {
            if (sexo.length < 1 || lectorNumeros.test(sexo)) {
              alert("Por favor, ingrese un sexo válido");
            } else {
              if (mes == mesFebrero && dia > diaFebrero) {
                alert("Febrero no tiene mas de 28 dias");
                return false;
              }
              if (año > añoActual || año < "1940") {
                alert("No se puede ingresar ese año ");
                return false;
              } else {
                if (pelaje.length < 1 || lectorNumeros.test(pelaje)) {
                  alert("Por favor, ingrese un pelaje válido");
                  return false;
                } else {
                  if (señas.length < 1 || lectorNumeros.test(señas)) {
                    alert("Por favor, ingrese una señas válidas");
                    return false;
                  } else {
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  $("#register").click(function () {
    // Getting the values from the form
    var name = $("#nomMascota").val();
    var idEspecieIn = $("#especieMascota").val();
    var idRazaIn = $("#razaMascota").val();
    var sexoIn = $("#sexoMascota").val();
    var fechaNacimientoIn = $("#fechaNacMascota").val();
    var pelajeIn = $("#pelajeMascota").val();
    var señasIn = $("#senasMascota").val();

    console.log(name);
    console.log(idEspecieIn);
    console.log(idRazaIn);
    console.log(sexoIn);
    console.log(fechaNacimientoIn);
    console.log(pelajeIn);
    console.log(señasIn);

    // Sending the values to the function
    if (
      validacionMascota(
        name,
        idEspecieIn,
        idRazaIn,
        sexoIn,
        fechaNacimientoIn,
        pelajeIn,
        señasIn
      )
    ) {
      // AJAX
      $.ajax({
        type: "post",
        url: "addMascota",
        data: {
          nom: $("#nomMascota").val(),
          idEspecie: $("#especieMascota").val(),
          idRaza: $("#razaMascota").val(),
          sexo: $("#sexoMascota").val(),
          fecha_nac: $("#fechaNacMascota").val(),
          pelaje: $("#senasMascota").val(),
          señas: $("#senasMascota").val(),
        },
        success: function Funciona(response) {
          console.log(response);
        },
        error: function NoFunciona(response) {
          console.log($().text(response));
        },
      });
    }
  });
});
