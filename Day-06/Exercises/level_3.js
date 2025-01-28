import { countries, webTechs, mernStack } from './required_files/arrays.js';
// Copy countries array(Avoid mutation)
const countriesCopy = [...countries];
// Testing mutation
countriesCopy.push('El Salvador')
console.log(countriesCopy);
console.log(countries);
countriesCopy.pop();
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countries].sort();
console.log(sortedCountries);
// Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());
// Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);
// Find the country containing the hightest number of characters in the countries array
console.log(`${countries.reduce((previus, current) => current.length > previus.length ? current : previus)}`);
// Extract all the countries contain the word 'land' from the countries array and print it as array
console.log(countriesWithLand);
// Extract all the countries containing only four characters from the countries array and print it as array
console.log(countries.filter(country => country.length === 4));
// Extract all the countries containing two or more words from the countries array and print it as array
console.log(countries.filter(country=>country.split(' ').length>1));
// Reverse the countries array and capitalize each country and stored it as an array
console.log(countries.reverse().map(country=>country.toUpperCase()));
