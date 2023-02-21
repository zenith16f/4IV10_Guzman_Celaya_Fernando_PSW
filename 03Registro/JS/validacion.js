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
  if (formulario.nombre.value.length <= 3) {
    alert("Ingresar mas de 3 caracteres en el campo nombre");
    formulario.nombre.focus();
    return false;
  }

  var checarABC =
    "qwertyuiopasdfghjklñzxcvbnm " + "QWERTYUIOPASDFGHJKLÑZXCVBNM ";

  var cadenaNombre = formulario.nombre.value;
  //alert(cadenaNombre);

  var todoEsValido = true;

  for (var i = 0; i < cadenaNombre.length; i++) {
    var caracteres = cadenaNombre.charAT(i);
    for (var j = 0; j < checarABC.length; j++) {
      if (caracteres == checarABC.charAt(j)) {
        break;
      }
    }
    if (j == checarABC.length) {
      todoEsValido = false;
      break;
    }
  }

  if (!todoEsValido) {
    alert("Ingresa solo letras en el nombre");
    formulario.nombre.focus();
    return false;
  }

  //Edad

  var edad = parseInt(formulario.edad.value);

  alert(edad);

  if (edad < 0 || edad >= 99) {
    alert("Ingresa una edad valida");
    formulario.edad.focus();
    return false;
  }

  var checarABC = "0123456789";

  var cadenaNombre = formulario.nombre.value;
  //alert(cadenaNombre);

  var todoEsValido = true;

  for (var i = 0; i < cadenaNombre.length; i++) {
    var caracteres = cadenaNombre.charAT(i);
    for (var j = 0; j < checarABC.length; j++) {
      if (caracteres == checarABC.charAt(j)) {
        break;
      }
    }
    if (j == checarABC.length) {
      todoEsValido = false;
      break;
    }
  }

  if (!todoEsValido) {
    alert("Ingresa solo numeros en el campo de edad");
    formulario.edad.focus();
    return false;
  }
}
