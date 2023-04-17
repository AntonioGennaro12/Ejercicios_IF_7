/*
Algoritmo que detecta un palabra  o una 
secuencia de caracteres (caden) dentro
de una frase o cadena de texto previamente ingresada.
*/

let cadenaIngresada = prompt("Ingrese una frase, o cadena, que contenga varios caracteres o una o más plabras");
let palabraBuscada = prompt("Ingrese los caracteres o palabra o que desea buscar en la cadena anterior (agregue espacios al principio y/o al final si busca palabras completas).");

if (cadenaIngresada.includes(palabraBuscada)) {
  document.write("<h3>La palabra o cadena '" + palabraBuscada + 
    "' Sí se encuentra en la cadena ingresada anteriormente.</h3>");
} else {
  document.write("<h4>La palabra o cadena '" + palabraBuscada + 
    "' NO se encuentra en la cadena ingresada anteriormente.</h4>");
}
