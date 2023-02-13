const fruits = () => {
  if(true) {
    var fruit1 = "apple"; //function scope; Se reconoce dentro de la función
    let fruit2 = "banana"; //block scope; Se reconoce sólo dentro del if 
    const fruit3 = "kiwi"; //block scope; Se reconoce sólo dentro del if
  }
  console.info(fruit1);
  console.info(fruit2);
  console.info(fruit3);
}

fruits();

//En General un arrow function es
{
  const square = (num) => {
    return num * num;
  }
  square(2);
}

//Si existe un solo parámetro, puedes omitir los paréntesis.
{
  const porDos = num => {
    return num * 2;
}  
  porDos(10);   
}

//Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada return, para que el código sea escrito en una sola línea. PERO, sí tienes más lógica (más de una linea de código) SÍ tienes que poner el return y las llavesitas {} en el cuerpo de la función.
{
  const suma = (num1, num2) => num1 + num2;
  suma(5,6);
}

//Si no hay parametros, se ponen los parentesis.
{
  const decirHello = () => console.log("Hello");
  decirHello();
}
