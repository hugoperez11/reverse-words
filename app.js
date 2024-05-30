
import { dividirEnPalabras, invertirArray } from './reverse.js';

// Función principal para invertir las palabras en una cadena
function invertirPalabras(cadena) {
    let palabras = dividirEnPalabras(cadena);
    let palabrasInvertidas = invertirArray(palabras);
    return palabrasInvertidas.join(' ');
    // el metodo join se utiliza para unir las palabras invertidas en una sola cadena
    //si no lo usamos apararecería asi[ 'Mundo', 'Hola' ]
}


console.log(invertirPalabras("Hola Mundo"));        