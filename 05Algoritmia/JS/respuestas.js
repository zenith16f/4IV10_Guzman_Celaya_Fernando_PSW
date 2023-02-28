/* Problema 1 */

/* Problema 2 */

/* Problema 3 */
function problema3() {
  //Primero necesitamos definir un alfabeto
  var alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ];

  //Obtener la entrada de datos
  var p3Input = document.querySelector("#p3-input").value;

  //Separar todo por comas
  var p3Palabras = p3Input.split(",");

  //Necesitamso uan funcion que se encargue de recuperar cada palabra, se tiene que eliminar los espacios

  p3Palabras = p3Palabras.map(function (palabras) {
    return palabras.replace(/\s/g, "").toUpperCase();
  });

  //Calcular los caracteres unicos
  var p3Respuesta = "";
  //Hacer una funcion que se encargue de calcular que contiene el arreglo y separar cada caracter y contarlo
  p3Palabras.forEach(function (palabra, i) {
    var letrasUnicas = [];
    var palabraArray = palabra.split("");

    //Iterar el alfabeto
    alfabeto.forEach((letra, j) => {
      //Itero cada palabra
      palabraArray.forEach(function (letrasPalabras, k) {
        // Comparar que la letra este dentro del alfabeto
        if (letrasPalabras == letra) {
          //Si la letra no la hemos contado la agregamos a un array para contar las letras unicas
          if (letrasUnicas.indexOf(letra) < 0) {
            letrasUnicas.push(letra);
          }
        }
      });
    });
    //Vamos a contar la salida
    p3Respuesta += "Palabra: " + palabra + "=" + letrasUnicas.length + "\n";
  });
  //Imprimir la salida
  document.querySelector("#p3-output").textContent = p3Respuesta;
}
