//Arrays destructuring

{
  let fruits = ["apple", "orange", "banana"];
  let [a, b, c] = fruits;
  console.info(a, b, c);
  console.info(a, b, fruits[2]);
}

//Arrays: Desestructuración para valores retornados de una función
{
  function updateValue() {
    //codigo...
    return;
  }
  function useState(value) {
    return [value, updateValue()];
}

//Sin desestructuración 
  const estado = useState(3);
  const valor1 = estado[0];
  const actualizador1 = estado[1];

//Con desestructuración 
  const [valor, actualizador] = useState(3);
}

//Object destructuring

{
  let user = {name: "Hector", age: 38};
  let {name, age} = user;
  console.log(name, age, user.age);
}

//Cambiar el nombre de las variables con desestructuración

{
const usuario = {nombre: "Andres", edad: 23, plataforma: "Platzi"};

const {nombre: name, edad: age, plataforma: platform} = usuario;

console.log(name);  // 'Andres' 
console.log(age);  // 23
console.log(platform);  // 'Platzi'

console.log(nombre);   // Uncaught ReferenceError: nombre is not defined
}

//Desestructuración en parámetros de una función
{
const usuario = {nombre: "Andres", edad: 23, plataforma: "Platzi"};

function mostrarDatos({nombre, edad, plataforma}) {
  console.log(nombre, edad, plataforma);
}

mostrarDatos(usuario); // 'Andres', 23, 'Platzi'
}

//Lo que puedes hacer con desestructuración, pero NO ES RECOMENDABLE

/*1) Si necesitas un elemento en cierta posición, 
puedes utilizar la separación por comas para identificar la variable que necesitas. */
{
  const array1 = [1, 2, 3, 4, 5];

  const [,,,,cinco] = array1;

  console.log(cinco); // 5

}

//Lo que puedes hacer con desestructuración, pero NO ES RECOMENDABLE
/*Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando un nombre para la variable. */

{
  const array1 = [1, 2, 3, 4, 5];

  const {3: cuatro} = array1;

  console.log(cuatro); // 4
}


