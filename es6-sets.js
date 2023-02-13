const listUnica = new Set();

listUnica.add('item 1');
listUnica.add('item 2').add('item 3');

console.log(listUnica);

//Otro ejemplo

{
  const x = [1,1,1,1,2,2,2,3,3,3];
  const miSet = new Set(x);
  console.log(miSet);
  console.log(miSet.has(3));
  console.log(miSet.has(4));
  console.log(miSet.size);
  console.log(miSet.delete(3));
  console.log(miSet.size);
  miSet.add("valor 1");
  console.log(miSet);
  miSet.clear();
  console.log(miSet);
}