//Operador Exponencial
console.log(3 ** 4);

/* Array includes: El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente. Este metodo puede recibir un segundo parametro opcional: El índice inicial desde donde comparar hasta el último elemento.*/

/*Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.
[0,1,2,3, ...., lenght-1] */
/*Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.
[-lenght, ...,  -3, -2, -1] */


{
  let numbers = [1,2,3,4,5,6,7];
  console.info(numbers.includes(5));
  console.info(numbers.includes(15));
  console.info(numbers.includes("5"));
  console.info(numbers.includes(1,1));
}

//Utilizando strings 

{
  const saludo = "Hola mundo";

  console.log(saludo.includes("Hola")); // true
  console.log(saludo.includes("hola")); // false
  console.log(saludo.includes("Mundo")); // false
  console.log(saludo.includes(" ")); // true
  console.log(saludo.includes("Hola", 1)); // false
  console.log(saludo.includes("mundo", -5)); // true
}


