/*
Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha
suma, repitiendo 50 veces esta operación.

*/

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Array para almacenar el número de apariciones de cada suma posible
let resultados = new Array(11).fill(0);

function simularLanzamientos() {
  let dado1 = tirarDado();
  let dado2 = tirarDado();
  let suma = dado1 + dado2;
  resultados[suma - 2]++;
}

//lanzamiento de dos dados 50 veces
for (let i = 0; i < 50; i++) {
  simularLanzamientos();
}

console.log("Resultados de los lanzamientos:");
for (let j = 0; j < resultados.length; j++) {
  console.log("Suma " + (j + 2) + ": " + resultados[j] + " veces");
}
