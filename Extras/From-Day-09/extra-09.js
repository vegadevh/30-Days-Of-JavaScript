import { countries } from "../required_files/data.js";
// Ejercicios del mismo nivel:
// Contar los idiomas únicos en la lista de países
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

// Crea una función que devuelva un objeto donde las claves sean los idiomas hablados en los países y los valores sean el número de veces que aparecen en la lista.
// Contar las monedas únicas en la lista de países

// Crea una función que devuelva un objeto donde las claves sean las monedas utilizadas en los países y los valores sean el número de países que usan esa moneda.
// Ejercicios de mayor dificultad:
// Agrupar países por continente

// Suponiendo que cada país tiene una propiedad continent, crea una función que devuelva un objeto donde las claves sean los continentes y los valores sean arrays con los nombres de los países de cada continente.
// Encontrar el país con más idiomas oficiales

// Crea una función que devuelva el país con la mayor cantidad de idiomas oficiales en la lista.
// País con la población más densa

// Agrega una propiedad area a cada país y crea una función que devuelva el país con mayor densidad de población(población / área).
// Estos ejercicios te ayudarán a mejorar tu manejo de métodos como reduce(), map(), filter(), sort(), y estructuras de datos en JavaScript. ¡Avísame si quieres ayuda con alguno! 