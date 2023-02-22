/* JavaScript es un lenguaje que posee un paradigma orientado a objetos y a funciones, y eventos por tal motivo presenta una particularidad que es:
No tipado
No existe int, float, string, ni char, ni nada :(
    
Todo es var -> variable

De acuerdo al estandar ES6 se manejan 3 tipos de variables:

VAR
LET es una variable de tipo "Protected"
CONST es un valor constante
*/

function validar(formulario) {
  //Validacion del nombre
  if (formulario.nombre.value.length <= 3) {
    alert("Favor de ingresar más de 3 caracteres en el campo nombre");
    formulario.nombre.focus();
    return false;
  }
  var checarABC = "qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";

  var cadenaNombre = formulario.nombre.value;

  //alert(cadenaNombre);

  var todoesvalido = true;

  for (var i = 0; i < cadenaNombre.length; i++) {
    var caracteres = cadenaNombre.charAt(i);
    for (var j = 0; j < checarABC.length; j++) {
      if (caracteres == checarABC.charAt(j)) {
        break;
      }
    }
    if (j == checarABC.length) {
      todoesvalido = false;
      break;
    }
  }
  if (!todoesvalido) {
    alert("Ingresa solo letras en el campo nombre");
    formulario.nombre.focus();
    return false;
  }

  //Validacion de la edad
  var edad = parseInt(formulario.edad.value);

  //alert(edad);

  if (edad < 0 || edad >= 99) {
    alert("Ingresa una edad valida entre 01 y 99 años");
    formulario.edad.focus();
    return false;
  }
  var checarABC = "0123456789";

  var cadenaNombre = formulario.edad.value;

  //alert(cadenaNombre);

  var todoesvalido = true;

  for (var i = 0; i < cadenaNombre.length; i++) {
    var caracteres = cadenaNombre.charAt(i);
    for (var j = 0; j < checarABC.length; j++) {
      if (caracteres == checarABC.charAt(j)) {
        break;
      }
    }
    if (j == checarABC.length) {
      todoesvalido = false;
      break;
    }
  }
  if (!todoesvalido) {
    alert("Ingresa solo numeros en el campo edad");
    formulario.edad.focus();
    return false;
  }

  //*Validacion de la fecha de nacimiento
  // let fechaIngresada = new Date(formulario.fecha.value.month).getMonth();
  // alert(fechaIngresada);
  let añoIngresado = parseInt(formulario.fecha.value);
  // alert(añoIngresado);

  let fechaActual = new Date();
  let añoActual = fechaActual.getFullYear();

  if (añoIngresado > añoActual) {
    alert("No se puede ingresar un año mayor al actual");
    return false;
  }

  //Validacion de correo
  // //Obtener el campo de correo
  // var email = formulario.correo.value;

  // //Crear una expresion regular
  // var prueba =
  //   /([A-Za-z]+[0-9]+\.){10}\@([A-Za-z]+[0-9]){8}\.([A-Za-z]+[0-9]){3}/g;

  // alert("Email " + (prueba.test(email) ? " " : "no" + "valido"));

  // return prueba.test;
}
