//ANTES DE ES6
let palabra1 = "Hello";
let palabra2 = "world";
let resultado = palabra1 + " " + palabra2 + "!";
console.log(resultado);

//ES6 Template literals
let resultado2 = `${palabra1}    ${palabra2}!`;

let resultado3 = `${palabra1}    
   texto---       texto----
   texto....      texto.....               ${palabra2}!`;
                  
console.log(resultado2);
console.log(resultado3);

