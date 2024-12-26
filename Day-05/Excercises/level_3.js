import { countries } from "./require_files/countries.js";
// The following is an array of 10 students ages:


/* 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const findMediumAge = (ageArray) => {
    const middle = Math.floor(ageArray.length / 2)
    if (ageArray.length % 2 == 0) {
        return `We have ${ageArray[middle]} and ${ageArray[middle + 1]} so... ${(ageArray[middle] + ageArray[middle + 1]) / 2}`;
    } else {
        return middle;
    }
};

const findAverage = (ageArray) => {
    const sum = ageArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum;
};
console.log('1. - \n',
    '\tSort ages: ', ages.sort(), `\tMin: ${ages[0]}\tMax: ${ages[ages.length - 1]}\n
    \tMedium ages: ${findMediumAge(ages)}\n
    \tAverage: ${findAverage(ages)}\n
    \tRange of ages: ${ages[ages.length - 1]} - ${ages[0]} = ${ages[ages.length - 1] - ages[0]}\n
    \tComparation:\n
    \tMin - Average: ${ages[0]} - ${findAverage(ages)} = ${Math.abs(ages[0] - findAverage(ages))}
    \tMax - Average: ${ages[ages.length - 1]} - ${findAverage(ages)} = ${Math.abs(ages[ages.length - 1] - findAverage(ages))}`);

// Slice the first ten countries from the countries array
console.log('2. -', countries.slice(10));

// Find the middle country(ies) in the countries array
const findMiddleCountry = (countryArray) => {
    const middle = Math.floor(countryArray.length / 2);

    if (countryArray.length % 2 == 0) {
        return `${countryArray[middle - 1]} and ${countryArray[middle]}`;
    } else {
        return countryArray[middle];
    }
}
console.log('3. - ', findMiddleCountry(countries));

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const evenOrNotHereICome = (countryArray) => {
    const middle = Math.floor(countryArray.length / 2);
    if (countryArray.length % 2 == 0) {
        const firstHalf = [...countryArray];
        const secondHalf = firstHalf.splice(middle, firstHalf.length - 1);
        console.log('4. -', `\tFirst: ${firstHalf}\n\tSecond: ${secondHalf}`);
    } else {
        countryArray.push('El Salvador');
        console.log('4. - ', `Country list: ${countryArray}`);
    }
};

evenOrNotHereICome(countries);