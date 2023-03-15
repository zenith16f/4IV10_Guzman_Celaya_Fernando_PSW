//* Timer
import Timer from "./timer.js";

new Timer(document.querySelector(".timer"));

//* Memory game
const tilesContainer = document.querySelector(".tiles");
const colors = [
  "aqua",
  "crimson",
  "gainsboro",
  "blue",
  "dodgerblue",
  "greenyellow",
  "teal",
  "gold",
  "DarkRed",
  "LightPink",
  "violet",
  "Tomato",
  "SlateBlue",
  "SeaGreen",
  "SandyBrown",
  "OrangeRed",
  "Lavender",
  "#48284A",
];
const colorsPicklist = [...colors, ...colors];
const tileCuantity = colorsPicklist.length;

// Variables
let revealedCount = 0;
let activeTile = null;
let awaitinEndOfMove = false;

// Functions
function buildTile(color) {
  const element = document.createElement("div");

  element.classList.add("tile");
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed", "false");

  element.addEventListener("click", () => {
    const revealed = element.getAttribute("data-revealed");

    if (awaitinEndOfMove || revealed === "true" || element === activeTile) {
      return;
    }

    element.style.backgroundColor = color;

    if (!activeTile) {
      activeTile = element;

      return;
    }

    // Match
    const colorToMatch = activeTile.getAttribute("data-color");

    if (colorToMatch === color) {
      activeTile.setAttribute("data-revealed", "true");
      element.setAttribute("data-revealed", "true");

      awaitinEndOfMove = false;
      activeTile = null;
      revealedCount += 2;

      if (revealedCount === tileCuantity) {
        alert("Has ganado");
      }
      return;
    }

    // Not match
    awaitinEndOfMove = true;

    setTimeout(() => {
      element.style.backgroundColor = null;
      activeTile.style.backgroundColor = null;

      awaitinEndOfMove = false;
      activeTile = null;
    }, 1000);
  });

  return element;
}

// Creating the tiles
for (let i = 0; i < tileCuantity; i++) {
  const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
  const color = colorsPicklist[randomIndex];
  const tile = buildTile(color);

  colorsPicklist.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}
