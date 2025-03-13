import { countries } from "./required_files/data.js";
// Display the countries array as a table
console.table(countries);
// Display the countries object as a table
console.table(countries[0]);
// Use console.group() to group logs
console.group('Countries');
console.log(countries);
console.groupEnd();