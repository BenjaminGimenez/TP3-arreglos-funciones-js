/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla
*/

const lado1 = parseFloat(prompt('ingrese el valor del primer lado'))
const lado2 = parseFloat(prompt('ingrese el valor del segundo lado'))

function calcularLados (lado1, lado2) {

    return 2 * (lado1 + lado2);
    
}

let perimetro = calcularLados(lado1, lado2);

console.log(`el perimetro del rectangulo es ${perimetro}`)