'use strict';
/*
// Strict mode helps us avoid making bugs. To inoke strict mode, use the following

// Important changes strict mode introduces

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // lets say I mispelled hasDriversLicense. Strict mode will tell us where the bug is and the error

if (hasDriversLicense) console.log("I can drive :D!");


// Strict mode also has reserved words that we can't use. Here are a few examples
const interface = 'Audio';
const private = 534;


// Functions
// Functions is a piece of code that we can reuse over and over again in our code.

function logger() {
    console.log('My name is Joans')
} // all the code within the {} is called the function body and the code will be executed whenever we run this function

// Calling / running / invoking the function
logger(); // How we invoke the function
logger();
logger();

// Functionalities of Functions

function fruitPocessor(Apples, Oranges) { // inside the () we are putting parameters which are values specific to this funtion
    const juice = `Juice with ${Apples} apples and ${Oranges} oranges!`;
    return juice; // return any values produced in the function
}

// To make the return pop up, I need to invoke the function in a declarative statement and log the new statement! Without it, I would only see {5, 0}

const appleJuice = fruitPocessor(5, 0); // Inputs of the fruitProcessor function apples will become 5 and oranges will become 0. These params are called arguments
console.log(appleJuice);
console.log(fruitPocessor(5, 0));

const appleOrangeJuice = fruitPocessor(2, 4);
console.log(appleOrangeJuice);

// Functions without parameters and a return are typically a block of code that we want to reuse over and over again!

// In summation Functions allows us to write resuable chunks of code instead of typing up the code over and over again! Keep our code dry (Don't Repeat Yourself)!


// Function Declarations vs Expressions

// The functions above are function decalarations because we used the function keyword to declare it 

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) { // called an anonymous function
    return 2037 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1, age2);

// Functions are values in JavaScript!

// Use whichever format you'd like! I'd prefer function expressions so that I can organize my code however I would like to. Expressions > Declarations imo


// Arrow Functions

// Normal Function
const calcAge2 = function (birthYear) { // called an anonymous function
    return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1999);

console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntillRetirement(1999, 'Ismaeel'));
console.log(yearsUntillRetirement(1980, 'Bob'));

// Arrow functions are typically used for one liner solutions!

*/