import { countries } from "./required_files/countries_data.js";
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortByName = () => {
    return countries.sort((a, b) => a.name.localeCompare(b.name))
}

const sortByCapital = () => {
    return countries.sort((a, b) => a.capital.localeCompare(b.capital))
}

const sortByPopulation = () => {
    return countries.sort((a, b) => a.population - b.population)
}

console.log(sortByName());
console.log(sortByCapital());
console.log(sortByPopulation());


// Find the 10 most spoken languages:

// console.log(mostSpokenLanguages(countries, 10))
// [
//     { country: 'English', count: 91 },
//     { country: 'French', count: 45 },
//     { country: 'Arabic', count: 25 },
//     { country: 'Spanish', count: 24 },
//     { country: 'Russian', count: 9 },
//     { country: 'Portuguese', count: 9 },
//     { country: 'Dutch', count: 8 },
//     { country: 'German', count: 7 },
//     { country: 'Chinese', count: 5 },
//     { country: 'Swahili', count: 4 }
// ]

// console.log(mostSpokenLanguages(countries, 3))
// [
//     { country: 'English', count: 91 },
//     { country: 'French', count: 45 },
//     { country: 'Arabic', count: 25 }
// ]

const mostSpokenLanguages = (countriesArray, numberOfCountries) => {
    const countingLanguages = [];
    countriesArray.map(country => {
        let languages = country.languages; //This is an array.
        languages.forEach((language) => {
            const languageObj = countingLanguages.find(lang => lang.country === language);
            if (languageObj) {
                languageObj.count++;
            } else {
                countingLanguages.push({ 'country': language, count: 1 })
            }
        });
    })
    countingLanguages.sort((a, b) => b.count - a.count);
    return countingLanguages.slice(0, numberOfCountries);
}

console.log(mostSpokenLanguages([...countries], 10));
console.log(mostSpokenLanguages([...countries], 3));
// Use countries_data.js file create a function which create the ten most populated countries

// console.log(mostPopulatedCountries(countries, 10))

// [
//     { country: 'China', population: 1377422166 },
//     { country: 'India', population: 1295210000 },
//     { country: 'United States of America', population: 323947000 },
//     { country: 'Indonesia', population: 258705000 },
//     { country: 'Brazil', population: 206135893 },
//     { country: 'Pakistan', population: 194125062 },
//     { country: 'Nigeria', population: 186988000 },
//     { country: 'Bangladesh', population: 161006790 },
//     { country: 'Russian Federation', population: 146599183 },
//     { country: 'Japan', population: 126960000 }
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
//     { country: 'China', population: 1377422166 },
//     { country: 'India', population: 1295210000 },
//     { country: 'United States of America', population: 323947000 }
// ]

const mostPopulatedCountries = (countriesArray, numberOfCountries) => {
    const countPopulation = [];
    countriesArray.map(country => {
        countPopulation.push({ 'country': country.name, 'population': country.population });
    });
    countPopulation.sort((a, b) => b.population - a.population);
    return countPopulation.slice(0, numberOfCountries);
}
console.log(mostPopulatedCountries([...countries], 10));
console.log(mostPopulatedCountries([...countries], 3));

// Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

const statistics = {
    count: (arr = ages) => {
        return arr.length
    },
    sum: (arr = ages) => {
        return arr.reduce((accumulator, current) => accumulator + current);
    },
    min: () => {
        return Math.min.apply(null, ages);
    },
    max: () => {
        return Math.max.apply(null, ages);
    },
    range: () => {
        return statistics.max() - statistics.min();
    },
    mean: (arr = ages) => {
        return statistics.sum(arr) / statistics.count(arr);
    },
    median: () => {
        const agesArray = [...ages].sort((a, b) => a - b);
        const middle = Math.floor(statistics.count() / 2);
        if (statistics.count() % 2 !== 0) {
            return agesArray[middle];
        } else {
            return (agesArray[middle - 1] + agesArray[middle]) / 2;
        }
    },
    frecuency: () => {
        let frequent = [];
        ages.map(age => {
            const ageObj = frequent.find(fre => fre.mode === age);
            if (ageObj) {
                ageObj.count++;
            } else {
                frequent.push({ 'mode': age, 'count': 1 });
            }
        })
        frequent.sort((a, b) => b.count - a.count);
        return frequent;
    },
    mode: () => {
        return statistics.frecuency()[0];
    },
    var: () => {
        // Each age minus the value of mean
        let deviationFromMean = [...ages].map(age => age - statistics.mean());
        // Each deviationFromMean (mean score) is multiplied by itself.
        let squaredDebiation = deviationFromMean.map(deviation => deviation * deviation);
        return statistics.mean(squaredDebiation);
    },
    std: () => {
        return Math.sqrt(statistics.var());
    },
    freqDist: () => {
        return statistics.frecuency();
    }
}

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
// https://latrobe.libguides.com/maths/measures-of-central-tendency
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
// https://latrobe.libguides.com/maths/measures-of-variability
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
