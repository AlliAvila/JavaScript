 /*
 //This is my first JavaScript code!
  console.log('Hello World');

let name = 'Allison';  //String literal
let age = 15; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined;
let selectedColor = null;
console.log(name);

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot containn a space or hypen (-)

let firstName = 'Allison';
let lastName = 'Avila';

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);


let person = {
name:'Name',
age: 102
};

//Dot Notation
person.name = 'Word';

//Bracket Notation
let selection = 'nam';
person[Selection] = 'Jen';

console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);
*/
function greet(name, lastName) {
  console.log(name + ' ' + lastName + ' is the best programmer');
}

greet('Allison','Avila');

/*
//calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));
*/
function area(base, height) {
  return base * height / 2;
} 

console.log (area(12,17));


for (let i = 0; i >= 100; i--) {
  console.log('Hello World' , i);
}
/*
if (1 % 2 !==0) console.log(i);
*/
function power(base, exponent) {
  result = 1;
for (let i = 0; i < exponent; i++){
  result = result*base;
}
return result;
}
console.log(power(2,4))

/*
if (base % power !==0) console.log(i(1,4));
*/
