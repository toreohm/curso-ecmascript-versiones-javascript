function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if(producto === 'taza') {
        resolve('Ordenando una taza con el logo de freeCodeCamp...');
      } else {
        reject('Este producto no esta disponible actualmente.');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000);
  });
}
//*******************con async await 
/*La función de la palabra await es 'obligar' a que el codigo asincrono termine de ejecutarse antes de continuar con el codigo sincrono. Si se omite la palabra await, la ejecución de la función devolvería  la promesa en estado pendiente. Siempre que se use await, la función que ejecuta dicho código tendrá que tener la palabra 'async'.*/ 
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('respuesta recibida...');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  }
  catch(error) {
    console.info(error);
  }
} 
realizarPedido('taza');

//************************************* con .then() y .catch()
ordenarProducto("taza")
  .then((respuesta) => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch((error) => {
    console.error(error);
  });
//************************************ 

// Otro ejemplo de Platzi

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true) 
    ? setTimeout(() => {
      return resolve("Todo bien, ASYNC!!");
    }, 2000) 
    : reject(new Error("Error - Banana!!!!"));
  });
};

const anotherAsyncFn = async () => {
  try {
    let respuesta = await fnAsync();
    console.log("respuesta: ", respuesta);
    console.log("Texto dentro del 'try'...");

  } catch(error) {
    console.warn(error);
  }
};

console.log("Before");
anotherAsyncFn();
console.log("After");

//RETO PLATZI - tomado de un compañero y mejorado.

const getCapitalCity = (country) => {
  const countries = {panama: "Ciudad de panamá", venezuela: "Caracas", argentina: "Buenos Aires", colombia: "Bogotá", espana: "madrid", italia: "roma", china:"Pekín", rusia:"moscú"};

  return new Promise((resolve , reject) => {
    setTimeout(()=>{
      countries[country]
      ? resolve(`La capital de ${country} es ${countries[country]}`)
      : reject((`la capital de ${country} no se encuentra en esta lista`));     
      },2000)
  });
};

const getCapitalCountries = async (pais) => {
  try {
    console.log("Buscando información...");
    let respuesta = await getCapitalCity(pais);
    console.info(respuesta);
  } catch(error) {
    console.log(error);
  }        
};

getCapitalCountries("venezuela");
