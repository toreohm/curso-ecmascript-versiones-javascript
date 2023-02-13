//Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre.
function newUser(user, age, country, userID) {
  return {user, age, country, id: userID};
}

console.log(newUser("toreohm", 38, "MX", 1));

