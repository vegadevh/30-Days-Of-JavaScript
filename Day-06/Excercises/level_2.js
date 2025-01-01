import { countries, webTechs, mernStack } from './required_files/arrays.js';
// Develop a small script which generate any number of characters random id:
/*
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/
const idGenerator = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
};

console.log(idGenerator(10));
// Write a script which generates a random hexadecimal number.
/*
'#ee33df'
*/
const hexGenerator = () => {
    const characters = '0123456789ABCDEF';
    let id = '#';
    for (let i = 0; i < 6; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
};
console.log(hexGenerator());
// Write a script which generates a random rgb color number.
/*
rgb(240,180,80)
*/
const rgbGenerator = () => {
    return Math.floor(Math.random() * 256);
};
console.log(`rgb(${rgbGenerator()},${rgbGenerator()},${rgbGenerator()})`);
// Using the above countries array, create the following new array.
/*
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const countriesUpperCase = [...countries].map(country => country.toUpperCase());
console.log(countriesUpperCase);
// Using the above countries array, create an array for countries length'.
/*
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
const countriesLength = [...countries].map(country => country.length);
console.log(countriesLength);
// Use the countries array to create the following array of arrays:
/*
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
const countriesInfo = [];
const countryInfo = (country) => {
    return [country, country.toUpperCase().slice(0, 3), country.length];
}
countries.forEach(element => {
    countriesInfo.push(countryInfo(element));
});
console.log(countriesInfo);
// In above countries array, check if there is a country or countries containing the word 'land'.If there are countries containing 'land', print it as array.If there is no country containing the word 'land', print 'All these countries are without land'.
/*
['Finland', 'Ireland', 'Iceland']
*/
let count = 0;
const landCountries = [];
countries.forEach(country => {
    if (country.includes('land')) {
        landCountries.push(country);
        count++;
    }
});
console.log(`${count > 0 ? landCountries : 'All these countries are without land'}`);

// In above countries array, check if there is a country or countries end with a substring 'ia'.If there are countries end with, print it as array.If there is no country containing the word 'ai', print 'These are countries ends without ia'.
/*
['Albania', 'Bolivia', 'Ethiopia']
*/
count = 0;
const iaCountries = [];
countries.forEach(country => {
    if (country.includes('ia')) {
        iaCountries.push(country);
        count++;
    }
});
console.log(`${count > 0 ? iaCountries : 'There are countries ends without ia'}`);
// Using the above countries array, find the country containing the biggest number of characters.
/*
Ethiopia
*/
console.log(`${countries.reduce((previousValue, currentValue) => currentValue.length > previousValue.length ? currentValue : previousValue)}`);

// Using the above countries array, find the country containing only 5 characters.
/*
['Japan', 'Kenya']
*/
console.log(`${countries.filter(country => country.length === 5)}`);
// Find the longest word in the webTechs array
console.log(`${webTechs.reduce((previousValue, currentValue) => currentValue.length > previousValue.length ? currentValue : previousValue)}`);
// Use the webTechs array to create the following array of arrays:
/*
[["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5], ["Redux", 5], ["Node", 4], ["MongoDB", 7]]
*/
const webTechsInfo = [];
const webTechInfo = (webTech) => {
    return [webTech, webTech.length];
};
webTechs.forEach(webTech => {
    webTechsInfo.push(webTechInfo(webTech));
});
console.log(webTechsInfo);
// An application created using MongoDB, Express, React and Node is called a MERN stack app.Create the acronym MERN by using the array mernStack
let stack = '';
mernStack.forEach(technology => {
    stack += technology.charAt(0).toUpperCase();
});
console.log(stack);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const technology of webTechs) {
    console.log(technology);
};
// This is a fruit array, ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const reverseFruitArray = [];
for (let i = fruitArray.length - 1; i >= 0; i--) {
    reverseFruitArray.push(fruitArray[i]);
};
console.log(reverseFruitArray);
// Print all the elements of array as shown below.
/* 
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
*/

const newFullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

for (const techs of newFullStack) {
    techs.forEach(tech => {
        console.log(tech);
    });
};