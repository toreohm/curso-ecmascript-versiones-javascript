function* miGenerador() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const generator = miGenerador();

console.log(generator.next());

for(let valor of generator) {
  console.log(valor);
}

// Otro ejemplo

function* iterate(array) {
  for(let value of array) {
    yield value;
  }
}

const it = iterate(["Oscar", "Ulises", "Hector", "Ana", "David"]);
console.log(it);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());
console.log(it.next());
console.log(it.next());

