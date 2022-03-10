// template literal

const fullName = 'Mrt Cltkn';
const city = 'Ağrı';
const yearOfBirth = '2000';

let val;

val = 'my name is '+fullName+ 'I\'m ' +(2021-yearOfBirth)+ ' years old'+ ' and I live in'+city;


//Ternary Operator


val = `my name is ${fullName} I'm ${(2021-yearOfBirth>=18)?'over 18':'under 18'} years old and I live in ${city}`;


console.log(val);