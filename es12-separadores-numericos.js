/*Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. 
Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución 
del programa. 
Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.*/

{
  // 🔽 Baja legibilidad
  const numero1 = 3501548945;
  console.log(numero1); // 3501548945

  // ✅ Alta legibilidad
  const numero2 = 3_501_548_945
  console.log(numero2); // 3501548945
}

/*El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.
Este método recibe dos argumentos: El patrón a reemplazar, puede ser un string o una expresión regular y
El nuevo elemento que sustituye al reemplazado.*/

{
  const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";

  console.log(mensaje.replace("JavaScript", "Python"));
  // 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

  console.info(mensaje.replaceAll("JavaScript", "Python"));
  // 'Python es maravilloso, con Python puedo crear el futuro de la web.'

  console.log(mensaje.replaceAll(/a/g, "*"));
  // 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
}

