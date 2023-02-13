//spread operator
{
  let person = {name: 'Hector', age: 38};
  let country = 'MX';
  let data = {country, ...person, id: 1};
  console.info(data);
}

{
  // Para strings
  const array = [..."Hola"];    // [ 'H', 'o', 'l', 'a' ]

  // En arrays
  const otherArray = [...array];   //[ 'H', 'o', 'l', 'a' ]
}

{
  //Cómo unir arrays y añadir elementos con el operador de propagación
  const array1 = [1,2,3];
  const number = 4;
  const array2 = [5,6,7];
  const otherArray = [...array1, number, ...array2];
  console.log(otherArray); // [1,2,3,4,5,6,7]
}

{
  /*El operador de propagación sirve para producir una copia en un solo nivel de profundidad.
    Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original. Recientemente salió una forma de producir una copia profunda con el metodo global StructuredClone*/

    const originalArray = [1, [2, 3], 4, 5];
    const copyArray = structuredClone(originalArray);
    
    originalArray === copyArray;  // false
    originalArray[1] === copyArray[1]; // false    
}



//rest parameter
{
  function sum(num1, ...valores) {
    return [num1, ...valores].reduce((total, valor) => total + valor);
  }
  console.log(sum(1,2,3,4,5));
}

{
  function hola (primero, segundo, ...resto) {
    console.log(primero, segundo);  // 1 2
    console.log(resto); // [3,4,5,6]
  }
  
  hola(1,2,3,4,5);
}

{
  //Rest con destructuración
  let [primero, segundo, ...resto] = [1,2,3,4,5,6,7,8];
  console.log(primero);
  console.log(segundo);
  console.log(resto);
}


