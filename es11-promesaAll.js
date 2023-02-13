/*El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un
 array de promesas. Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. 
 Si al menos una promesa es rechazada, Promise.all será rechazada. */
{
  const promise1 = new Promise((resolve, reject) => reject(false));
  const promise2 = new Promise((resolve, reject) => resolve("Resuelta 2"));
  const promise3 = new Promise((resolve, reject) => resolve("Resuelta 3"));

  Promise.all([promise1, promise2, promise3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
  
  // Sí todas las promesas se cumplen, se ejecuta el metodo then() y el parametro respuesta es un array:
  ['resuelta 1', 'Resuelta 2', 'Resuelta 3'];

  //Sí al menos una es rechazada, se ejecuta el metodo catch y el parametro error es lo que le envíes: un string, booleano, numero 0, etc.
  false;
}

/*Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el
estado y el valor de cada promesa, haya sido resuelta o rechazada. */

{
  const promesa1 = Promise.reject("Ups promesa 1 falló");
  const promesa2 = Promise.resolve("Promesa 2 sí cumplió");
  const promesa3 = Promise.reject("Ups promesa 3 falló");

  Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta));
  
  //El resultado, se ejecuta el metodo then() y el parametro respuesta sería este array:
  [
    { status: 'rejected', reason: 'Ups promesa 1 falló' },
    { status: 'fulfilled', value: 'Promesa 2 sí cumplió' },
    { status: 'rejected', reason: 'Ups promesa 3 falló' }
  ];
}
