/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido
por el usuario.
*/

function tablaNumero(numero) {
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

let pedirNumero = prompt("ingrese un numero para mostrar su tabla del 1 al 10");

let numero = parseInt(pedirNumero);

if (!isNaN(numero)) {
  tablaNumero(numero);
} else {
  console.log("el valor ingresado no es un numero valido");
}
