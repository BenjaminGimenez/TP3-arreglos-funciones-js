/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas.
*/

function cadenaTexto () {

    
    const cadena = prompt('ingrese una cadena de texto')
    
    if (cadena === cadena.toUpperCase()) {

        console.log('la cadena esta formada por mayusculas');
        
    }else if (cadena === cadena.toLowerCase()) {

        console.log('la cadena esta formada por minusculas')
        
    }else{
        console.log('la cadena esta formada por mayusculas y minusculas')
    }

}

cadenaTexto();