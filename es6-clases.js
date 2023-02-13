//Declarando una clase
class User {
  //constructor
  constructor(name, age) {
    console.log("Nuevo usuario " + name);
    this.name = name;
    this.age = age;
  }
  
  //metodos
  speak() {
    return "Hello";
  }

  saludo() {
    return `${this.speak()} ${this.name}`;
  }

  //getters y setters
  get userAge() {
    return this.age;
  }

  set userAge(n) {
    this.age = n;
  }

}

//Instancia de una clase.
const yetAnotherUser = new User("Marimar", 18);
console.log(yetAnotherUser.age);
console.log(yetAnotherUser.userAge);
console.log(yetAnotherUser.userAge = 20);

const newUser = new User("Mario", 43);
console.log(newUser.saludo());

const anotherUser = new User("Rebeca", 23);
console.log(anotherUser.saludo());

