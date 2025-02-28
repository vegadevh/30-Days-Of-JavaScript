import { countries } from "./required_files/data.js";
// How many languages are there in the countries object file.
const languages = new Set();
for (const country of countries) {
    for (const language of country.languages) {
        languages.add(language);
    }
}
console.log(`There are ${languages.size} languages in the countries object.`);
// Use the countries data to find the 10 most spoken languages:
const mostSpokenLanguages = (countriesArray, numberOfCountries) => {
    const countingLanguages = [];
    countriesArray.map(country => {
        let languages = country.languages; //This is an array.
        languages.forEach((language) => {
            const languageObj = countingLanguages.find(lang => lang.language === language);
            if (languageObj) {
                languageObj.count++;
            } else {
                countingLanguages.push({ 'language': language, count: 1 })
            }
        });
    })
    countingLanguages.sort((a, b) => b.count - a.count);
    const topLanguages = countingLanguages.slice(0, numberOfCountries);
    return topLanguages.map(lang => ({ [lang.language]: lang.count }))
}

console.log(mostSpokenLanguages([...countries], 10));
console.log(mostSpokenLanguages([...countries], 3));
// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 },
//     { Spanish: 24 },
//     { Russian: 9 },
//     { Portuguese: 9 },
//     { Dutch: 8 },
//     { German: 7 },
//     { Chinese: 5 },
//     { Swahili: 4 },
//     { Serbian: 4 }
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 }
// ]