/*Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined.
Al acceder a una propiedad más profunda de un objeto, que previamente fue evaluada como undefined, 
el programa se detendrá y mostrará un error de tipo.
 */
{
  const usuario = {};
  console.log(usuario.redes.facebook);
}

/*Es como intentar ejecutar undefined.facebook, lo cual es un error de tipo, 
debido a que undefined es un primitivo, no es un objeto. 

El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto 
cuando el valor es undefined o null antes del (?.), retornando undefined sin detener el programa por un error.*/

{
  const usuario = {};
  console.log(usuario.redes?.facebook); // undefined
}
 

//Ejemplo Platzi

{
  const users = {
    toreohm: {
      country: 'MX'
    },
    ana: {
      country: 'PE'
    }
  };
  console.log(users.toreohm?.country);
  console.log(users.toreohm2?.country);
}

/*NOTA: Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría 
“ocultarlo” por un undefined, provocando que el debugging sea más complicado. 
Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se 
debería escribir usuario.redes?.facebook y NO usuario?.redes?.facebook.*/
