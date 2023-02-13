// De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async

async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2

//Otro ejemplo
async function forAwait() {
  console.log("Dentro de la función asincrona");
  const nombres = ["Alexa", "Oscar", "David"];
  for await (let valor of nombres) {
    console.log(valor);
  }
}

forAwait();
console.log("After: Esto no se espera a que termine de ejecutarse la funcion asincrona.");

//Generadores asíncronos: Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.

{
  async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
  }
  
  const generator = anotherGenerator();
  generator.next().then(response => console.log(response.value));
  generator.next().then(response => console.log(response.value));
  generator.next().then(response => console.log(response.value));
  console.log('Hello!');
}

//Promesa -> FINALLY
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      resolve("Operación terminada con exito.");
    } else {
      reject("Operación rechazada.");
    }
  });
 };

 //En este caso ejecutamos la función para que devuelva la promesa.
 anotherFunction()
  .then(respuesta => console.log(respuesta)) // Promesa resuelta
  .catch(error => console.warn(error)) // Promesa rechazada
  .finally(() => console.log("Independientemente del estado final de la promesa, esto se tiene que hacer... (Ejecutar una función, regresar algun código http, esto, aquello.)"));

//Finally con async - await

{
  const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if(true) {
        resolve("Operación terminada con exito.");
      } else {
        reject("Operación rechazada.");
      }
    });
   };

  const anotherFunction2 = (valor) => {
    return new Promise((resolve, reject) => {
      if(false) {
        resolve("Operación con exito: -> Valor es: " + valor);
      } else {
        reject("Operación rechazada. Valor es: " + valor);
      }
    });
   };
  
  (async () => {
    try {
      const result1 = await anotherFunction();
      const result2 = await anotherFunction2(result1);
      console.log(result2);
    } catch(err) {
      throw new Error(`Something failed: ${err}`);
    } finally {
      console.log(`All Tasks are Done`);
    }
  })();
}

