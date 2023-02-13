/*El método at de arrays sirve para acceder a los elementos a partir del índice. array.at(índice).
La utilidad más importante de este método es para manejar índices negativos. 
Algo que no se puede con la notación de corchetes. */

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"];

console.log(nombres.at(-1)); // "Richard"
console.log(nombres[-1]); // undefined
console.log(nombres.at(-3)); // "Ana"
console.log(nombres[nombres.length -1]); // "Richard"
