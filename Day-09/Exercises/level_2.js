import { products } from "./required_files/objects.js";
import { countries } from "./required_files/countries_data.js";
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log('1. - ', products.filter(product => typeof product.price != "string").map(product => product.price).reduce((accumulator, actual) => accumulator + actual, 0));
// Find the sum of price of products using only reduce reduce(callback))
console.log('2. - ', products.reduce((accumulator, actual) => {
    if (typeof actual.price != "string") {
        return accumulator + actual.price;
    }
    return accumulator;
}, 0));
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const patterns = ['land', 'ia', 'island', 'stan'];
const categories = [];
const categorizeCountries = (pattern) => countries.filter(country => country.name.toLowerCase().includes(pattern));
patterns.map(pattern => {
    categories.push({ [pattern]: categorizeCountries(pattern) });
});
console.log(categories);
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const timesOfFirstLetter = () => {
    const lettersOfCountries = [];
    countries.map(country => {
        let firstLetter = country.name[0];
        const letterObject = lettersOfCountries.find(letter => letter[firstLetter]);
        if (letterObject) {
            //the find method returns a reference to the object in the original array, not a copy. This means that when you modify the object returned by find, you are directly modifying the object in the original array.
            letterObject[firstLetter]++;
        } else {
            lettersOfCountries.push({ [firstLetter]: 1 })
        }
    })
    return lettersOfCountries;
}
console.log(timesOfFirstLetter());

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => {
    // return countries.slice(0, 10);
    const firstTen = [];
    countries.map(country => {
        if (firstTen.length === 10) {
            return firstTen;
        }
        firstTen.push(country);
    });
    return firstTen;
}

console.log(getFirstTenCountries());

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = () => {
    return countries.slice(-10);
}

console.log(getLastTenCountries());
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
console.log(timesOfFirstLetter().sort((a, b) => Object.values(b) - Object.values(a))[0]);

