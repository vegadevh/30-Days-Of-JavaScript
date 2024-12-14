// Declare an empty array;

const empty_array = [];

// Declare an array with more than 5 number of elements

const elements = [1, 2, 3, 4, 5];

// Find the length of your array

console.log('3. - Find the length of your array:', elements.length);

// Get the first item, the middle item and the last item of the array
const getElementsFML = (array) => {
    return {
        first: array[0],
        middle: array[Math.floor(array.length / 2)],
        last: array[array.length - 1],
    };
};

console.log('4. -', getElementsFML(elements));

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, true, 'hello', [], undefined, null];
console.log('5. -', mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Print the array using console.log()
console.log('6. -', itCompanies);
// Print the number of companies in the array
console.log('7. -', itCompanies.length);
// Print the first company, middle and last company
console.log('8. -', getElementsFML(itCompanies));
// Print out each company
itCompanies.forEach(company => {
    console.log(`\t${company}`);
});
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => {
    console.log(`\t${company.toUpperCase()}`);
});
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log('11. -', `${itCompanies.slice(0, itCompanies.length - 1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = 'Apple';
console.log('12. -', itCompanies.includes(company));

// Filter out companies which have more than one 'o' without the filter method
const companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    if (itCompanies[i].includes('o')) {
        for (let j = 0; j < itCompanies[i].length; j++) {
            if (itCompanies[i][j] == 'o') {
                count++;
            }
        }
        if (count > 1) {
            companiesWithMoreThanOneO.push(itCompanies[i])
        }
    }
}

console.log('13. -', companiesWithMoreThanOneO);

// Sort the array using sort() method
console.log('14. -', itCompanies.sort());

// Reverse the array using reverse() method
console.log('15. -', itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log('16. -', itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log('17. -', itCompanies.slice(-3));

// Slice out the middle IT company or companies from the array
console.log('18. -', itCompanies.slice(3, -3));
console.log('18. -', itCompanies[Math.floor(itCompanies.length / 2)]);

// Remove the first IT company from the array
console.log('19. -',
    `${itCompanies}\n${itCompanies.splice(0,1)}\n${itCompanies}`
);

// Remove the middle IT company or companies from the array
console.log('20. -',
    `${itCompanies}\n${itCompanies.splice(3, 1)}\n${itCompanies}`
);

// Remove the last IT company from the array
console.log('21. -', itCompanies.pop());

// Remove all IT companies

console.log('22. -', itCompanies.splice());
