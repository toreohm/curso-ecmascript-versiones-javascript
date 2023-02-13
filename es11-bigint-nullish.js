/*El nuevo dato primitivo bigint permite manejar números enteros muy grandes.
 Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt */

const number1 = 45999999999999999999999999n;
const number2 = BigInt(45999999999999999999999999);

console.log(typeof number2); // 'bigint'
console.log(number1);
console.log(number2); //BigInt no es tan preciso: 45999999999999996007022592n

/*El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para
 asignarle un valor.
 El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por
  defecto "Andres", caso contrario asigna el valor de usuario.name. */

  {
    const usuario1 = {};
    const nombre1 = usuario1.name ?? "Andres";
    const usuario2 = {name: "Juan"};
    const nombre2 = usuario2.name ?? "Andres";

    console.log(nombre1); // 'Andres' 
    console.log(nombre2); // 'Juan'

    // Probando con null
    const x = {name: null};
    let y = x.name ?? "default";
    console.log(y);
  }

  /*Diferencia entre el operador OR y el Nullish coalescing:
  
  El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto
  booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.
  
  Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no
  sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado 
  erróneo.*/

  {
    const id = 0;
    const orId = id || "Sin id";
    const nullishId = id ?? "Sin id";

    console.log(orId); //  'Sin id'
    console.log(nullishId); // 0
  }