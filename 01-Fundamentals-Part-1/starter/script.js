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


// Truthy / Falsy values: When converted to a boolean, values can become one of either:


// 5 Falsy Values: 0, '', undefined, null, NaN

// Everything else would be truthy an empty object {} is truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));


const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("HEIGHT is UNDEFINED");
}


// Equality Operators == vs ===

// Rule of thumb: If you want to use the boolean operators you're better off using === and manually changing it for type coercion!
const age = 18;
if (age === 18) console.log("You just became an adult! (strict)"); // === is strict equality where type coercion does not happen

if (age == 18) console.log("You just became an adult! (loose)"); // lets say '18' == 18 we will get a true since type coercion happens here. JS makes '18' a number

const favorite = Number(prompt("What's ypu're favorite number?"));
console.log(favorite);
console.log(typeof (favorite));

if (favorite === 23) { // '23' == 23
    console.log("Why would you like 23? Why not 25?");
} else if (favorite === 7) {
    console.log("7 is a cool number");
} else if (favorite === 9) {
    console.log("9 is a cool number");
} else {
    console.log("Number is not 7, 9, or 23");
}

if (favorite !== 23) console.log("Why not 23?");


// Boolean Logic: The AND, OR & NOT OPERATORS

// And operator requires all to be true for a true to be returned

// OR operator requires one to be true

// NOT operator requires inverts true/false value (if a is true it will become false. if it is false it will be true) uses !

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); // && means AND. // If both are true console.log will return true.
console.log(hasDriverLicense || hasGoodVision); // || means OR. If at least one is true console.log will return as true
console.log(!hasDriverLicense); // ! means NOT operator which will turn the BOOLEAN value to the opposite one.

// if (hasDriverLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive!");
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive!");
}


// Switch statment
// A different way of writing a complicated if else statement when we want to compare one value to multiple different options

const day = "Monday"; // Change this value to test the switch case statements!!

switch (day) {
    case 'Monday': // same as writing day === 'Monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // Essentially tells the code to stop here
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend :D');
        break;
    default: // Executes if al other cases fails; like an else statement
        console.log('Not a valid day!');
}


// Challenge (Make the switch case example with an if / else if statement) && or ||? Which one should you use depending on the day?
if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day == 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record Videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


// Statmenets and Expressions

// An Expression is a piece of code that produces a value 3 + 4 is an expression
// 1991 is an expression as well because it gives a value.
//Boolean values are also expressions

// Statements are bigger pieces of code that does not produce a value on itself.
// Think of it as creating a sentence
// If / Else statements are statements.
// Strings itself is an expression and the act of delcaring a variable for a string is a statement:
// const str = 'String';
// If it ends with a semi colon ';' it is a statement!
// __________________________________________________________________________
*/