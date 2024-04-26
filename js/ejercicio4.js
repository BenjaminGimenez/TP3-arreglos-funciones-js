/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.
*/


function llamarNumeros (numero) {

    if (numero % 2 === 0) {
        alert('el numero es Par')
    }else{
        alert('el numero es Impar')
    }
}

function mostrarResultado(numero, resultado){
    
    console.log(`el numero ${numero} es ${resultado}`)
}
 
let continuar = true;

while (continuar) {
    let pedirNumero = prompt('ingrese un numero para verificar, sino ingrese la opcion "salir" para terminar')

    if (pedirNumero.toLowerCase() === 'salir') {

        continuar = false;

        console.log('termino el programa')

    }else{

        let numero = parseInt(pedirNumero);

        if(!isNaN(numero)){

            let resultado = llamarNumeros(numero);
            mostrarResultado(numero, resultado);
        }else{
            console.log('el valor ingresado no es un numero entero valido')
        }
    }
}

