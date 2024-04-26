//EJERCICIO 2 

/*
 Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/


function llamarCiudades () {

    const ciudades = []

    while (true) {

        let ciudad = prompt('ingrese la ciudad que desee visitar');

        //si el usuario preciona cancelar
        if (ciudad===null) {

            break;
        }

        //validar que no sean espacios en blanco
        if (ciudad.trim() !== ' ') {
            ciudades.push(ciudad.trim())
        }else{
            alert('no se ingreso ninguna ciudad. ingrese una ciudad valida')
        }
    }

    //se agrega la ciudad paris al ultimo
    ciudades.push('Paris')

    //Mostrar todas las ciudades ingresadas por consola
    console.log("Ciudades ingresadas:");
    ciudades.forEach(function(ciudad, index) {
        console.log(`${index + 1} - ${ciudad}`);
    });

    // Mostrar la cantidad total de ciudades
    console.log("Número de ciudades ingresadas: " + ciudades.length);

   
}


llamarCiudades();




// Sustituir el elemento en la segunda posición por 'Barcelona'

/*
if (ciudades.length >= 2) {
    ciudades[1] = 'Barcelona';
    console.log("El elemento en la segunda posición ha sido sustituido por 'Barcelona'.");
} else {
    console.log("No hay suficientes ciudades ingresadas para sustituir el elemento en la segunda posición.");
}
*/