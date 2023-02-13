//Antes de ES6
function newUser(name, age, country) {
  var name = name || "Liberty";
  var age = age || 25;
  var country = country || "MX";
  console.log(name, age, country);
}
newUser();
newUser("Hector", 38);

//Ahora con ES6
function experimento(a = 5, b = "hola", c = 100, d = [1,2,3]) {
  return {a, b, c, d};
}

experimento();
experimento(50, "adios", 500, true);
experimento(undefined, undefined, null, true);

//Function Rest Parameter: The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
  	sum += arg;
 }
  return sum;
}

let x = sum(1, 2, 3, 4, 5, 6);
console.log(x);

