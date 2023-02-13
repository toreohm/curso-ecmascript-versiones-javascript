/*Los métodos privados consiste en limitar el acceso a propiedades y métodos 
agregando el caracter numeral (#). 
Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, 
es decir, se puede acceder a ellos fuera de la clase. */

class UnaClase {
  constructor(valor) {
    this.valor = valor;
  }

  #private(valor){
    console.log(valor);
  }
  
  public(valor){
    console.log(valor);
  }

  get #getValor() {
    return this.valor;
  }

  set #setValor(valor) {
    this.valor = valor;
  }
}

const objClase = new UnaClase(100);
objClase.public("Hola");  // 'Hola'
console.log(objClase.getValor); //undefined
console.log(objClase.setValor = 200); //200
console.log(objClase.valor); //100
objClase.private("Hola"); // TypeError: objClase.private is not a function

/*Promise.any() es otra forma de manejar varias promesas, que retornará la PRIMERA promesa
 que sea resuelta y rebotará si todas las promesas son rechazadas.*/

const promesa1 = Promise.reject("Ups promesa 1 falló");
const promesa2 = Promise.reject("Ups promesa 2 falló");
const promesa3 = Promise.resolve("Promesa 3");
const promesa4 = Promise.resolve("Promesa 4");

Promise.any([promesa1, promesa2, promesa3, promesa4])
    .then(respuesta => console.log(respuesta, typeof respuesta)) // Promise 3 - string
    .catch(error => console.log(error));

/*Si todas las promesas fallan */

  Promise.any([Promise.reject("Aquí puede ir una funcion, false (boolean), valor numerico 0, un mensaje personalizado, etc")])
  .catch((e) => {
    console.log(e instanceof AggregateError); // true
    console.log(e.message, typeof e.message); // "All Promises rejected" "string"
    console.log(e.name, typeof e.name);  // "AggregateError" "string"
    console.log(e.errors, e.errors[0]); // Aquí puede ir una funcion, false (boolean), valor numerico 0, un mensaje personalizado, etc
  });
