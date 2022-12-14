/* Assignment #1

// Lecture VValues and Variables
const country = "USA";
const continent = "North America";
let population = 329500000

console.log(country, continent, population)

// Lecture Data Types
const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

// Lecture let, const and var
language = "English";
console.log(language);

// Lecture basic operators
let countryInHalf = population / 2;
console.log(countryInHalf);

countryInHalf++

console.log(countryInHalf);

let finlandPopulation = 6000000;

console.log(population > finlandPopulation);

let averageCountryPop = 33000000;

console.log(population < averageCountryPop);

const description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);


// Assignment Number 2

// Lecuture Strings and Template Literals
const description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);


// Lecture taking decisions if / else statements
let usaPopulation = 329500000;
let avgPopulation = 33000000;

let popDifference = avgPopulation - usaPopulation;

if (usaPopulation > avgPopulation) {
    console.log("USA population is above average!");
} else {
    console.log(`usa Population is ${popDifference} below average!`);
}



// Type conversion and Coercion
// Predict the results and check if I am right
const quest1 = '9' - '5'; // 4
const quest2 = '19' - '13' + '17'; // 617
const quest3 = '19' - '13' + 17; // 23
const quest4 = '123' < 57; // false
const quest5 = 5 + 6 + '4' + 9 - 4 - 2; // 117

console.log(quest1, quest2, quest3, quest4, quest5);


// Equality Operators: == vs ===

let numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1) {
    console.log("Only 1 border!");
} else if (numNeighbors > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders!");
}


// Logical Operators: Sarah wants to live in a country that speaks English, has less than 50 Million people, and isn't an island
const country = "USA"
const countryLanguage = "English";
const countryPopulation = 329500000;
const isIsland = false;

if (countryLanguage === "English" && countryPopulation < 50000000 && isIsland === false) {
    console.log(`Sarah should live in ${country}!`);
} else {
    console.log(`${country} doesn't meet your criteria! :(`);
}


// The Switch Case Statement

const language = 'English';

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!')
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers!')
        break;
    case 'English':
        console.log('3rd most spoken language!')
        break;
    case 'Hindi':
        console.log('4th most spoken language')
        break;
    case 'Arabic':
        console.log('5th most spoken language!')
        break;
    default:
        console.log('Great Language Too! :D')
}
*/

// The Conditional (Ternary) Operator

const myCountry = 'USA'
const unitedStatesPop = 329500000;

const population = unitedStatesPop > 33000000 ? console.log(`${myCountry} population is above average!`) : console.log(`${myCountry} population is below average!`);