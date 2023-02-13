/*El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el computador, 
al iniciar la compilación crea un objeto global.
El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. 
Dependiendo la plataforma, este objeto global tendrá un nombre diferente. 
En el navegador el objeto global es window, para Node.js es global, y así para cada entorno.
Sin embargo, en Node.js no podrás acceder a window, ni en el navegador podrás acceder a global.
Para estandarizar el objeto global se creó globalThis, un objeto compatible para cualquier plataforma.*/

{
  // Ejecuta el siguiente código y observa que muestra
  console.log(window);  //Navegador
  console.log(globalThis); //Node y Navegador
  console.log(global);  //Node
  console.log(self); //webworker - funciona en el navegador

  // En la consola del navegador
  console.log(window === globalThis); // true
  console.log(self === globalThis); // true

  // En Node.js
  console.log(global === globalThis); // true
}

/*El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico
 a partir de una expresión regular, colocada como argumento: string.matchAll(regex).
 Si no hay coincidencia devuelve -1.
 En el iterable, existe una propiedad denominada index con el índice del string donde la búsqueda coincide. */

{
  const regex = /\b(Apple)+\b/g;
  const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. Apple etc. etc.";
  // Tranformación del iterable retornado a array
  const array = [...fruit.matchAll(regex)];
  console.log(array);

  for(let match of fruit.matchAll(regex)) {
    console.log(match, match[1]);  
  }
}

/*Reto Platzi: Cortar todo el string hasta antes de la tercera repetición de "Apple".
Si no hay coincidencias regresar false*/
function retoPlatzi() {
  const regex = /\b(Apple)+\b/g;
  const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc.Apple etc. etc.";
  const array = [...fruit.matchAll(regex)];
  const indices = [];
  let indice;
  
  if(array.length === 0) {
    return false;
  }
  
  for(let match of array) {
    indices.push(match["index"]);  
  }
  indice = indices[indices.length - 1];

  return fruit.slice(0, indice);
}

console.log(retoPlatzi());
  

