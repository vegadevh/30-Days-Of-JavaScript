import { countries } from "../required_files/data.js";
// Ejercicios del mismo nivel:
// Contar los idiomas únicos en la lista de países
const uniqueLanguages = () => {
    const languages = [];
    countries.map(country => {
        const countryLanguages = country.languages;
        countryLanguages.forEach(language => {
            const langObj = languages.find(lang => lang.language === language);
            if (!langObj) {
                languages.push({ language });
            }
        })
    })
    return languages;
}

console.log(uniqueLanguages());

// Crea una función que devuelva un objeto donde las claves sean los idiomas hablados en los países y los valores sean el número de veces que aparecen en la lista.
const countDifferentLanguages = (countriesArray, numberOfLanguagesToShow) => {
    let differentLanguages = [];
    countriesArray.map(country => {
        let langObj = country.languages;
        langObj.forEach(language => {
            const languageObj = differentLanguages.find(lang => lang.language === language);
            if (languageObj) {
                languageObj.count++;
            } else {
                differentLanguages.push({ 'language': language, 'count': 1 });
            }
        })
    })
    const topLanguages = differentLanguages.sort((a, b) => b.count - a.count).slice(0, numberOfLanguagesToShow);
    return topLanguages.map(language => ({ [language.language]: language.count }))
}

console.log(countDifferentLanguages([...countries], 3));
// Contar las monedas únicas en la lista de países
const uniqueCurrencies = (countriesArray, numberOfCurrenciesToShow) => {
    let differentCurrencies = [];
    countriesArray.map(country => {
        const currencyObj = differentCurrencies.find(currency => currency.currency.toLowerCase() === country.currency.toLowerCase());
        if (!currencyObj) {
            differentCurrencies.push({ 'currency': country.currency })
        }
    })
    return differentCurrencies;
}
console.log(uniqueCurrencies([...countries], 10));
// Crea una función que devuelva un objeto donde las claves sean las monedas utilizadas en los países y los valores sean el número de países que usan esa moneda.
const currencyAndHowManyCountriesUseIt = (countriesArray) => {
    let currencies = [];
    countriesArray.map(country => {
        const currencyObj = currencies.find(curr => curr.currency.toLowerCase() === country.currency.toLowerCase());
        if (currencyObj) {
            currencyObj.countriesInUsed++;
        } else {
            currencies.push({ 'currency': country.currency, 'countriesInUsed': 1 })
        }
    })
    currencies.sort((a, b) => b.countriesInUsed - a.countriesInUsed);
    return currencies;
}
console.log(currencyAndHowManyCountriesUseIt([...countries]));

// Ejercicios de mayor dificultad:

// Crea una función que devuelva el país con la mayor cantidad de idiomas oficiales en la lista.
const countryWithMoreLanguages = (countriesArray) => {
    let countries = []
    countriesArray.map(country => {
        countries.push({ 'country': country.name, 'spoken_languages': country.languages.length });
    });
    countries.sort((a, b) => b.spoken_languages - a.spoken_languages);
    return countries;
}

console.log(countryWithMoreLanguages([...countries]));