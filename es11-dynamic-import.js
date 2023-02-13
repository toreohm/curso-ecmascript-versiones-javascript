/*La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar,
 y no al iniciar la aplicación. Esto permite que la página web sea más rápida, 
 porque descarga menos recursos.
 La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y 
 devuelve una promesa. */

 const boton = document.querySelector("#btn");
 const parrafo = document.querySelector("#respuesta");

 boton.addEventListener("click", async function () {
   try {
      const modulo = await import('./es6-export.js');
      modulo.darRespuesta(parrafo);
   } catch(error) {
    window.alert(error);
   }
 });


 //De acuerdo a la documentación de Platzi en la sección de recursos, tenemos esto:

{
  const ruta = "./modulo.js"

  // Utilizando promesas
  import(ruta)
    .then( modulo => {
        modulo.funcion1();
        modulo.funcion2();
    })
    .catch(error => console.log(error));
    
  // Utilizando async/await
  async function importarModulo(rutaDelModulo) {
    const modulo = await import(rutaDelModulo);
    modulo.funcion1();
    modulo.funcion2();  
  }

  importarModulo(ruta);
}