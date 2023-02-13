//Si solo es una función se puede omitir las llaves
//import hello from './es6-export.js';

//Con llaves, aqui se importa un par de funciones y se pueden llamar directamente tal cual en el archivo
//import {hello, add} from './es6-export.js';

//Una forma de importar (todo) es:
import * as modulo from './es6-export.js'

modulo.hello();
console.log(modulo.add(2,2));