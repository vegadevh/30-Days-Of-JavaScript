import { countries } from "./required_files/data.js";
// Create an empty set
const mySet = new Set();
console.log(mySet);
// Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
    mySet.add(i);
}
console.log(mySet);
// Remove an element from a set
mySet.delete(Math.floor(Math.random() * 11))
console.log(mySet);
// Clear a set
mySet.clear();
console.log(mySet);
// Create a set of 5 string elements from array
const test_countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const anotherSet = new Set(test_countries);
console.log(anotherSet);
// Create a map of countries and number of characters of a country
const mapOfCountries = new Map();
for (const country of countries) {
    mapOfCountries.set(country.name, country.name.length);
}
console.log(mapOfCountries);
