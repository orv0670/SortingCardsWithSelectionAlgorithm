/* eslint-disable */
import "bootstrap";
import "./style.css";
// funcion generadora de cartas aleatorias
function myFunction() {
  var cartas = document.getElementById("carta").value;
  console.log(cartas);
  randomCardNumberGenerator(cartas);
  cardGenerator(arrFinal);
  console.log(arrFinal);
}
//funcion que devuelve las cartas ordenadas de menor a mayor
function arrOrdenado() {
  selection(arrFinal);
  cardGenerator(ordenado);
}
// funcion que ejecuta el algoritmo selection(selection Sort)
function selection(arr) {
  console.log(arr);
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min].num > arr[j].num) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i].num;
      arr[i].num = arr[min].num;
      arr[min].num = tmp;
    }
  }
  Array.prototype.push.apply(ordenado, arr);
  console.log(ordenado);
}
// seccion donde se configura la accion que ejecutan los botones en el HTML
var btn = document.getElementById("draw");
btn.onclick = myFunction;
var btn2 = document.getElementById("sort");
btn2.onclick = arrOrdenado;
//bloques de vectores (arrays)
let suiteArray = ["&#9824", "&#9827", "&#9829", "&#9830"];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var arrFinal = [];
var ordenado = [];
//funcion que genera los valores aleatorios
const randomCardNumberGenerator = inputValue => {
  for (let i = 0; i < inputValue; i++) {
    var suit = suiteArray[Math.floor(Math.random() * suiteArray.length)];
    let numb = numberArray[Math.floor(Math.random() * numberArray.length)];
    arrFinal.push({ suit: suit, num: numb });
  }
};
//funcion que genera los cuerpos y los objectos que contienen las cartas
const cardGenerator = anArrayOfObjects => {
  var newArrayOfObjects = anArrayOfObjects.map(item => {
    let cardContainer = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardFooter = document.createElement("div");
    cardContainer.className =
      "custom-card justify-content-center border rounded px-2 mt-5 col mr-2";
    cardHeader.className = "custom-card-header";
    cardFooter.className = "custom-card-footer";
    cardBody.className = "custom-card-body";
    console.log(item);
    //If que determinan el color del simbolo de la carta
    if (item.suit == "&#9829" || item.suit == "&#9830") {
      cardHeader.style.color = "red";
      cardFooter.style.color = "red";
    }

    cardHeader.innerHTML = item.suit;
    cardBody.innerHTML = item.num;
    cardFooter.innerHTML = item.suit;
    document.querySelector("#main-container").appendChild(cardContainer);
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);
    cardContainer.appendChild(cardFooter);
    console.log(arrFinal);
    return item;
  });
};
