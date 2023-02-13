const hello = () => {
  console.log("Hello!");
};
/*
export const add = (x,y) => {
  return x + y;
};
*/

const darRespuesta = (elem) => {
  elem.innerHTML = "<mark>Hello there!!!</mark>";
  console.log("Se ejecuto la función");
};

const add = (x,y) => {
  return x + y;
};

const restar = (x,y) => {
  return x - y;
};


//Sí solo es una sola variable o función se puede usar export default sin llaves {}
//export default hello;

export {hello, add, restar, darRespuesta};