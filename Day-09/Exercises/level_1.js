import { countries, names, numbers, products } from "./required_files/objects.js";
// Explain the difference between forEach, map, filter, and reduce.

//**
// ForEach: This method is used for iterate every element of an array. It can receive two arguments, the first one its mandatory callback function, the other one is optional.
// Map: This method returns a new array populated with the results of calling a provided function for every element in the array.
// Filter: Evaluates the element in the array to returns a shallow copy of a portion of the array that pass the test implemented in the callback function.
// Reduce: Its a "reducer" callback on every element, iterates the array in order and pass the return value of the calculation between the actual and previous value. At the end of the function it returns as a result a single value.
//  */

// Define a callback function before you use it in forEach, map, filter or reduce.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const forEachCallbackFunction = (element) => {
    console.log(element);
};

const mapCallbackFunction = (element) => {
    return element * 2;
}

const filterCallbackFunction = (element) => {
    return element > 5
}

const reduceCallbackFunction = (previous, currentValue) => {
    return previous + currentValue;
}

array.forEach(forEachCallbackFunction);
console.log(array.map(mapCallbackFunction));
console.log(array.filter(filterCallbackFunction));
//                          function, initialvalue
console.log(array.reduce(reduceCallbackFunction, 0));

// Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));
// Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name));
// Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number));
// Use map to create a new array by changing each country to uppercase in the countries array.
console.log(countries.map(country => country.toUpperCase()));
// Use map to create an array of countries length from countries array.
console.log(countries.map(country => country.length));
// Use map to create a new array by changing each number to square in the numbers array
console.log(numbers.map(number => Math.pow(number, 2)));
// Use map to change to each name to uppercase in the names array
console.log(names.map(name => name.toUpperCase()));
// Use map to map the products array to its corresponding prices.
console.log(products.map(product => product.price));
// Use filter to filter out countries containing land.
console.log(countries.filter(country => country.includes('land')));
// Use filter to filter out countries having six character.
console.log(countries.filter(country => country.length === 6));
// Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter(country => country.length >= 6));
// Use filter to filter out country start with 'E';
console.log(countries.filter(country => country[0] === 'E'));
// Use filter to filter out only prices with values.
console.log(products.filter(product => typeof product.price != "string"));
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const testArr = [1, 2, 3, 4, '', 'hola', 'adios', 'Black Diamond']
const getStringLists = (array) => {
    return array.filter(element => typeof element == "string");
}

console.log(getStringLists(testArr));
// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((previous, actualValue) => previous + actualValue, 0));
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries.reduce((previous, current, index) => {
    if (index === 0) {
        return current;
    } else if (index === countries.length - 1) {
        return `${previous} and ${current} are north European countries`;
    } else {
        return `${previous}, ${current}`;
    }
}, ''));
// Explain the difference between some and every

/**
 * Some: Its an array method that returns true if a single element in the array retrun true for the provided callback function.
 * Every: Its an array method that returns true if every element in the array pass the test implemented by the provided callback function.
 */
// Use some to check if some names' length greater than seven in names array
console.log(names.some(name => name.length > 7)); //true
// Use every to check if all the countries contain the word land
console.log(countries.every(country => country.includes('land'))); //false
// Explain the difference between find and findIndex.
//**
// find: This array method returns the first element that satisfies the provided testing function.
// findIndex: This array method returns the index of the first element that satisfies the provided testing function.
//  */
// Use find to find the first country containing only six letters in the countries array
console.log(countries.find(country => country.length > 6));
// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(country => country.length > 6));
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(country => country === 'Norway'));
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(country => country === 'Russia'));