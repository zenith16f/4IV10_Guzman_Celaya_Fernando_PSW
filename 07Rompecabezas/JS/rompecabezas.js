// Primero tenemos que hacer un mapeo sobre las imagenes que se van a trabajar para el rompecabezas, porque debemos saber en dondes esta situada cada pieza y a partri de ello compararla con la imagen principal si hacen match ganamos sino hay que seguir comparando el orden hasta que coincidan todas las piezas

var instrucciones = [
  "Utiliza las flechas de navegación para mover las piezas del rompecabezas",
  "Ordena las piezas hasta alcanzar el objetivo",
];

// Arrows here
var movimientos = [];

// Vamos a crear la matriz para las posiciones del rompecabezas
var rompe = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var rompeCorrecto = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Tenemos que identificar donde esta el punto de partida de la pieza vacia
var filaVacia = 2;
var columnaVacia = 2;

// Necesito una funcion para pasar por cada elemento
function mostrarInstucciones(instrucciones) {
  for (let i = 0; i < instrucciones.length; i++) {
    // Ortra funcion que enliste la intrsuccion
    mostrarInstuccionesEnLista(instrucciones[i], "lista-instrucciones");
  }
}

function mostrarInstuccionesEnLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  // Creamos un li
  var li = document.createElement("li");
  // Agregamos el texto
  li.textContent = instruccion;
  ul.appendChild(li);
}

// Funcion para chequear si el Rompecabezas esta en la posicion ganadora
function checarSiGane() {
  // Comparamos la matriz con la original y comprobamos si son iguales
  for (let i = 0; i < rompe.length; i++) {
    for (let j = 0; j < rompe[i].length; j++) {
      var rompeActual = rompe[i][j];
      if (rompeActual !== rompeCorrecto[i][j]) {
        return false;
      }
    }
  }
  return true;
}

// Funcion para mostrar que ganaste
function mostrarCartelGanador() {
  if (checarSiGane()) {
    alert("Ganaste");
  }
  return false;
}

/* 
Vamos a crear una funcion para intercambiar las posiciones de las piezas, porque dentro del rompecabezas necesitamos mover
arreglo[1][2]=arreglo[0][0]
arreglo[0][0] = arreglo[1][2];
*/

function intercambiarPosicionesRompe(
  filaPos1,
  columnaPos1,
  filaPos2,
  columnaPos2
) {
  // Variables de las posiciones
  var pos1 = rompe[filaPos1][columnaPos1];
  var pos2 = rompe[filaPos2][columnaPos2];

  // Intercambiamos los valores
  rompe[filaPos1][columnaPos1] = pos2;
  rompe[filaPos2][columnaPos2] = pos1;
}

// Tenemos que actualizar la pieza vacia ya que esa es la que se va a mover
function actualizarPosicionVacia(nuevaFila, nueVaColumna) {
  filaVacia = nuevaFila;
  columnaVacia = nueVaColumna;
}

// Tengo que validar si la posicion dentro del rompecabezas es la correcta de la pieza
function posicionValida(fila, columna) {
  return fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2;
}

// Ahora viene la parte del movimiento de las piezas, a lo que el hueco es lo que se estara moviendo e intercambiando de posicion para ello tenemos que saber que teclas de navegacion se estan presionando, y hacia que direccion debe moverse:
// Arriba -> 38, Abajo -> 40 , Izquierda -> 37, Derecha -> 39

function moverEnDireccion(direccion) {
  var nuevaFilaVacia;
  var nueVaColumnaVacia;

  // Si se mueve hacia abajo
  if (direccion === codigosDireccion.ABAJO) {
    nuevaFilaVacia = filaVacia + 1;
    nuevacolumnaVacia = columnaVacia;
  }
  // Si se mueve hacia arriba
  else if (direccion === codigosDireccion.ARRIBA) {
    nuevaFilaVacia = filaVacia - 1;
    nuevacolumnaVacia = columnaVacia;
  }
  // Si se mueve haca la derecha
  else if (direccion === codigosDireccion.DERECHA) {
    nuevaFilaVacia = filaVacia;
    nuevacolumnaVacia = columnaVacia + 1;
  }
  // Si se mueve haca la izquierda
  else if (direccion === codigosDireccion.IZQUIERDA) {
    nuevaFilaVacia = filaVacia;
    nuevacolumnaVacia = columnaVacia - 1;
  }

  // Tengo que checar si la nueva posicion es valida y si no intercambiarla
  if (posicionValida(nuevaFilaVacia, nueVaColumnaVacia)) {
    // Intercambio
    intercambiarPosicionesRompe(
      filaVacia,
      columnaVacia,
      nuevaFilaVacia,
      nueVaColumnaVacia
    );
    // Actualizar la posicion
    actualizarPosicionVacia(nuevaFilaVacia, nueVaColumnaVacia);
    // Agregar el ultimo movimiento
    agregarUltimoMovimiento(direccion);
  }
}

// Funcion para intercambiar las posiciones
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
  // Vamos a intercambiar posiciones de acuerdo a las piezas
  var pieza1 = rompe[fila1][columna1];
  var pieza2 = rompe[fila2][columna2];

  // Mando a llamar a intercambiar las posiciones del rompecabezas
  intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);

  // Falta crear una funcion que cambie las posiciones en el DOM
  intercambiarPosicionesDOM("pieza" + pieza1, "pieza" + pieza2);
}

function intercambiarPosicionesDOM(idPieza1, idPieza2) {
  // Obtengo los elementos del DOM
  var elementoDeLaPieza1 = document.getElementById(idPieza1);
  var elementoDeLaPieza2 = document.getElementById(idPieza2);

  // Creo al padre
  var padre = elementoDeLaPieza1.parentNode;

  var cloneElemento1 = elementoDeLaPieza1.cloneNode(true);
  var cloneElemento2 = elementoDeLaPieza2.cloneNode(true);

  padre.replaceChild(cloneElemento1, cloneElemento2);
  padre.replaceChild(cloneElemento2, cloneElemento1);
}

// Vamos a identificar los codigos de la direccion de la flecha
var codigosDireccion = {
  IZQUIERDA: 37,
  ARRIBA: 38,
  DERECHA: 39,
  ABAJO: 40,
};

// Vamos a actulizar los movimientos
function actualizarUltimoMovimiento(direccion) {
  // Obtenemos el elemento del DOM
  var ultimoMovimiento = document.getElementById("flecha");
  switch (direccion) {
    case codigosDireccion.ARRIBA:
      ultimoMovimiento.textContent = "↑";
      break;
    case codigosDireccion.ABAJO:
      ultimoMovimiento.textContent = "↓";
      break;
    case codigosDireccion.DERECHA:
      ultimoMovimiento.textContent = "→";
      break;
    case codigosDireccion.IZQUIERDA:
      ultimoMovimiento.textContent = "←";
      break;

    default:
      break;
  }
}

// Vamos a mezclar las piezas
function mezclarPiezas(veces) {
  if (veces <= 0) {
    alert("Hola");
    return;
  }
  var direcciones = [
    codigosDireccion.ABAJO,
    codigosDireccion.ARRIBA,
    codigosDireccion.DERECHA,
    codigosDireccion.IZQUIERDA,
  ];

  // Ahora vamos a meter en un random las direcciones
  var direccion = direcciones[Math.floor(Math.random) * direcciones.length];

  // Mando a llamar a mover en direccion
  moverEnDireccion(direccion);

  // Mando un retraso
  setTimeout(function () {
    mezclarPiezas(veces - 1);
  }, 100);
}

// Vamos a crear una funcion para saber que tecla esta precionando el jugador
function capturarTeclas() {
  document.body.onkeydown = function (evento) {
    if (
      evento.which === codigosDireccion.ABAJO ||
      evento.which === codigosDireccion.ARRIBA ||
      evento.which === codigosDireccion.DERECHA ||
      evento.which === codigosDireccion.IZQUIERDA
    ) {
      // Como ya se que tecla mando a llamar a mover en direccion
      moverEnDireccion(evento.which);
      // Actualizo el ultimo movimiento
      actualizarUltimoMovimiento(evento.which);

      var gano = checarSiGane();
      if (gano) {
        setTimeout(function () {
          mostrarCartelGanador();
        }, 500);
      }
      evento.preventDefault();
    }
  };
}

// Funcion para iniciar el proceso
function iniciar() {
  mezclarPiezas(10);
  capturarTeclas();
}

iniciar();

mostrarInstucciones(instrucciones);
