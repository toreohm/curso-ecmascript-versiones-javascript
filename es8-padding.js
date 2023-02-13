/*El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.
El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado. */

{
  const cadena = "Hello";
  console.log('abc'.padStart(10)); // "       abc"
  console.log('abc'.padStart(10, "foo")); // "foofoofabc"
  console.log('abc'.padStart(6,"123465")); // "123abc"
  console.log('abc'.padStart(8, "0")); // "00000abc"
  console.log('abc'.padStart(1)); // "abc"
  console.log(cadena.padStart(cadena.length + 1, "_")); // "_abc"
}

{
  const cadena = "Hello";
  console.log('abc'.padEnd(10)); // "abc       "
  console.log('abc'.padEnd(10, "foo")); // "abcfoofoof"
  console.log('abc'.padEnd(6, "123456")); // "abc123"
  console.log('abc'.padEnd(1)); // "abc"
  console.log(cadena.padEnd(cadena.length + 1, "_")); // "abc_"
  console.log("I".padEnd(10, "X")); //IXXXXXXXXX
}

//Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.

{
  const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23, //<-- Trailing comma
  };

const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", //<-- Trailing comma
  ];
}

//Ejemplo practico
{
  const array = [1,2,3,4, , , 7];
  console.log(array);
  console.log(array.length);
  console.log(typeof array[5]);
}
