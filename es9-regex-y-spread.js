const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2022-01-01");
console.table(matchers);

//spread operator
const user = {username: 'gndx', age: 34, country: 'CO'};
const {username, ...values} = user;
console.log(username, values);

