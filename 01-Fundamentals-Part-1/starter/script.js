/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "coder";
let mySecondJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

// Using var is a bad idea because var exists outside of the scope
// let is block scoped while var is function scoped.
var job = "programmer";
job = "teacher";

lastName = "Schmedtmann"
console.log(lastName)


// Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// Aside from mathematical equations, you can use the + operator to concatenate (join) strings
const firstName = "Jonas";
const lastName = "Schmidtmann";
console.log(firstName + " " + lastName);

// Assignment operator which is the = sign, +=, *=, ++, --
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x)

// Comparison Operators, >, <, >=, <= use to compare boolean values
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

// Concatenate String
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job + '!';
console.log(jonas);

// Template Literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Less efficient way to create multi-line strings
console.log("String with \n\
multiple \n\
lines");

// Template Literal multi-line strings SO MUCH EASIER
console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another 
    ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I'm " + 23 + " years old"); // Converts the number into a string. JS does this automatically, the + operator makes things strings
console.log('23' - '10' - 3); // Converts strings to numbers. The - operator does the opposite of the + operator.
console.log('23' * 2); // Same as the - operator
console.log('23' / 2); // Same as the - operator

// Guess what n becomes
let n = '1' + 1; // n becomes 11
n = n - 1; // Converted to a number due to -
console.log(n); // n = 10
*/
