/* 
    Las variables que se ocupan dentro de JS son 3:
    1. var: Actualmente esta en sustitución
    2. let: Es una variable "protegida" porque solo funciona dentro de una funcion o método en un fragmento de código
    3. const: La cual es el valor constante en todo el documento y no puede cambiar su estado
*/

let x = "x";

if (true) {
  const x = "y";
  //   console.log(x);
}

// console.log(x);

//Diferencia entre una funcion y una funcion fecha (CallBack)

//In example we are addin two numbers
//* Function
function sumaNormal(n1, n2) {
  return n1 + n2;
}

// console.log(`La suma de 3 y 4: ${sumaNormal(3, 4)}`);

//The backtick (``) is used to modify the behavior of an HTML or incrustar in JS code if HTML

/*
 An Arrow function has as structure :
 "string" -> id, class, name, attribute
*/

//* Arrow function
const sumaArrowFunction = (n1, n2) => n1 + n2;
// console.log(`La suma de 5 y 6: ${sumaArrowFunction(5, 6)}`);

//

const razaDePerros = [
  "Gran Danes",
  "Pastor Aleman",
  "Chihuahua",
  "Pitbull",
  "Dalmata",
  "San Bernardo",
];

// Normal for
// for (let i = 0; i < razaDePerros.length; i++) {
//   console.log(razaDePerros[i]);
// }

// For of
// for (const raza of razaDePerros) {
//   console.log(raza);
// }

// For in
// for (const i in razaDePerros) {
//   console.log(razaDePerros[i]);
// }

// For each its to iterate in elements of the array that does'nt return nothing
razaDePerros.forEach((raza, i, originalArray) => {
  console.log(raza);
});

/* Method find
    Its to find a element in the array
    It returns the element that is found
    The method indexOf
    Method map
    method sort
*/
