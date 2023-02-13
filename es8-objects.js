//Metodos clave: Object.entries(miObjeto), Object.keys(miObjeto), Object.values(miObjeto) - Tambien funciona con arrays

const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
const countriesArray = ["Mexico", "Colombia", "Chile", "Peru"];

console.log(Object.entries(countries));
console.log(Object.entries(countriesArray));

console.log(Object.values(countries));
console.log(Object.values(countriesArray));

console.log(Object.keys(countries));
console.log(Object.keys(countriesArray));

//De array a objeto
{
  const countriesArray = [[0, "Mexico"], [1, "Colombia"], [2, "Chile"], [3, "Peru"]];
  const newObj = Object.fromEntries(countriesArray);
  console.log(newObj);
}

