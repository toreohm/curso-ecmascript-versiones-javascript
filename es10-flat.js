/*El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.
Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original. 
Este método recibe un argumento: La profundidad del aplanamiento, por defecto, tiene un valor de 1. */
const array = [1,2,[3,4],5,6];
const result = array.flat(); 
console.log(result);// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat(); 
console.log(result2);// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]];
const result3 = array3.flat(2); 
console.log(result3);// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const result4 = array4.flat(Infinity); 
console.log(result4);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/*flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos
 del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat). 
 Esto sería equivalente a esto: array.map(...args).flat() 
 Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.*/
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num * 2);

console.log(flattened);
// Expected output: Array [2, 4, 6, NaN, 12, 0]

//Ejemplo de Platzi
{
  const miArray = [1, 2, 3, 4, 5];
  console.log(miArray.flatMap(v => [v, v * 2]));
}

/*Existen tres métodos para eliminar espacios en blanco de un string:
1) El método trim elimina los espacios en blanco al inicio y al final.
2) El método trimStart o trimLeft elimina los espacios al inicio.
3) El método trimEnd o trimRight elimina los espacios al final. */

{
  const saludo = "      hola      ";
  const result1 = saludo.trim();
  const result2 = saludo.trimStart();
  const result3 = saludo.trimEnd();

  console.log(result1); // 'hola'
  console.log(result2); // 'hola      '
  console.log(result3); // '      hola'
}
