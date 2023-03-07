// Problema 1
function problemaUno() {
  var p1_input = document.querySelector("#p1-input").value;
  var p1_array = p1_input.split(" ").reverse();
  var p1_res = "";

  p1_array.forEach(function (palabra, i) {
    if (i != 0 || i != p1_array.length) p1_res += " ";
    p1_res += palabra;
  });
  document.querySelector("#p1-output").textContent = p1_res;
}

/* Problema 2 */
function problemaDos() {
  // User x
  let userX1 = document.querySelector("#p2-x1 ").value;
  let userX2 = document.querySelector("#p2-x2").value;
  let userX3 = document.querySelector("#p2-x3").value;
  let userX4 = document.querySelector("#p2-x4").value;
  let userX5 = document.querySelector("#p2-x5").value;
  // User y
  let userY1 = document.querySelector("#p2-y1").value;
  let userY2 = document.querySelector("#p2-y2").value;
  let userY3 = document.querySelector("#p2-y3").value;
  let userY4 = document.querySelector("#p2-y4").value;
  let userY5 = document.querySelector("#p2-y5").value;

  // Arrays
  let x = [];
  let y = [];

  // Adding the values to array
  x.push(userX1, userX2, userX3, userX4, userX5);
  y.push(userY1, userY2, userY3, userY4, userY5);

  // Parsing the arrays content
  x = x.map((x) => parseInt(x));
  y = y.map((y) => parseInt(y));

  // Arrow Function to scalar operation
  const scalarProduct = (a, b) =>
    a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

  // Printing the result
  document.querySelector("#p2-output").textContent = scalarProduct(x, y);
}

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
