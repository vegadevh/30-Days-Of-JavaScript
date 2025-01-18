import { countries } from "./required_files/arrays.js";

import readline from 'node:readline';
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/*
userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
const userIdGeneratedByUser = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the number of characters for your userId: ', numCharacters => {
        rl.question('Enter how many ids you want to generate? ', numIds => {
            const numberCharacters = numCharacters;
            const numberIds = numIds;

            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let id = '';
            for (let i = 0; i < numberIds; i++) {
                for (let j = 0; j < numCharacters; j++) {
                    id += characters[Math.floor(Math.random() * characters.length)];
                };
                console.log(id);
                id = '';
            };
            rl.close();
        });
    });
};

// userIdGeneratedByUser();
// Write a function name rgbColorGenerator and it generates rgb colors.
/*
rgbColorGenerator()
rgb(125,244,255)
*/
const rgbColorGenerator = () => {
    let rgb = 'rgb(';
    for (let i = 0; i < 3; i++) {
        rgb += `${Math.floor(Math.random() * 256)}`;
        if (i !== 2) {
            rgb += ',';
        }
    };
    rgb += ')';
    return rgb;
};
console.log('2. - ', rgbColorGenerator());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const hexColorGenerator = () => {
    const characters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += characters[Math.floor(Math.random() * characters.length)];
    };
    return hex;
};

const arrayOfHexaColors = (times) => {
    const hexColors = [];
    for (let i = 0; i < times; i++) {
        hexColors.push(hexColorGenerator());
    };
    return hexColors;
};

console.log('3. - ', arrayOfHexaColors(4));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = (times) => {
    const rgbColors = [];
    for (let i = 0; i < times; i++) {
        rgbColors.push(rgbColorGenerator());
    };
    return rgbColors;
};

console.log('4. - ', arrayOfRgbColors(4));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (hexColor) => {
    const hex = hexColor.replace('#', '');
    const r = hex.slice(0, 2);
    const g = hex.slice(2, 4);
    const b = hex.slice(4);

    return `${hexColor} -> rgb(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)})`;
};

console.log('5. - ', convertHexaToRgb(hexColorGenerator()));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHexa = (rgbColor) => {
    const rgb = rgbColor.replace('rgb(', '').replace(')', '').split(',');
    let hex = '#';
    rgb.forEach(element => {
        hex += parseInt(element).toString(16);
    });
    return `${rgbColor} -> ${hex}`;
};

console.log('6. -', convertRgbToHexa(rgbColorGenerator()));

// Write a function generateColors which can generate any number of hexa or rgb colors.
/*
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/

const generateColors = (type, times) => {
    if (type === 'hexa') {
        if (times === 1) {
            return arrayOfHexaColors(times)[0];
        }
        return arrayOfHexaColors(times);
    } else if (type === 'rgb') {
        if (times === 1) {
            return arrayOfRgbColors(times)[0];
        }
        return arrayOfRgbColors(times);
    } else {
        return 'Invalid type';
    };
};

console.log('7. - ', generateColors('hexa', 3));
console.log('7. - ', generateColors('hexa', 1));
console.log('7. - ', generateColors('rgb', 3));
console.log('7. - ', generateColors('rgb', 1));
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (array) => {
    const shuffleArray = [];
    const arrayCopy = [...array];
    const times = array.length;
    for (let i = 0; i < times; i++) {
        shuffleArray.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
    };
    return `Original array: ${arrayCopy} -> Shuffle Array: ${shuffleArray}`;
};
console.log('8. - ', shuffleArray(arrayOfHexaColors(5)));
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (number) => {
    let output = 1;
    for (let i = number; i > 0; i--) {
        output *= i;
    };
    return output;
};
console.log('9. - ', factorial(5));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
const isEmpty = (element) => {
    if (element === null || element === undefined) {
        return `${element}: ${true}`;
    } else if (typeof element === 'string' || Array.isArray(element)) {
        return `${element}: ${element.length === 0}`;
    } else if (typeof element === 'object') {
        return `${element}: ${Object.keys(element).length === 0}`;
    }
    return false;
};

console.log('10. - ', isEmpty(null));
console.log('10. - ', isEmpty(undefined));
console.log('10. - ', isEmpty(''));
console.log('10. - ', isEmpty('hola'));
console.log('10. - ', isEmpty([]));
console.log('10. - ', isEmpty([1]));
console.log('10. - ', isEmpty({}));
console.log('10. - ', isEmpty({ name: 'Diego' }));

// Call your function sum, it takes any number of arguments and it returns the sum.
const sum = (...args) => {
    const numbers = args;
    let result = 0;
    numbers.forEach(element => {
        result += element;
    });
    return `${numbers} -> ${result}`;
};

console.log('11. - ', sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
const sumOfArrayItems = (...args) => {
    const numbers = args;
    let result = 0;
    let checkTypes = {};
    let notNumbers = 0;
    numbers.forEach(element => {
        if (typeof element === 'number') {
            result += element;
        } else {
            notNumbers++;
            checkTypes[element] = typeof element;
        };
    });
    return `The sum of all elements is: ${result}, you got ${notNumbers} elements that are not numbers. ${JSON.stringify(checkTypes)}`;
};

console.log('12. - ', sumOfArrayItems(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('12. - ', sumOfArrayItems(1, 2, 3, 4, 5, 6, 'Hola', 'Saludos', 7, 8, 9, 10));

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
const average = (...args) => {
    const parameters = args;
    let result = 0;
    let checkTypes = {};
    let notNumbers = 0;
    parameters.forEach(element => {
        if (typeof element === 'number') {
            result += element;
        } else {
            notNumbers++;
            checkTypes[element] = typeof element;
        }
    });
    return `The average of all elements is: ${result / (parameters.length - notNumbers)}, you got ${notNumbers} elements that are not numbers. ${JSON.stringify(checkTypes)}`;
};

console.log('13. - ', average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('13. - ', average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Hola', 'Adios', 'Saludos'));
console.log('13. - ', average(1, 2, 3, 4, 5, 6, 'Hola', 'Adios', 'Saludos'));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
/*
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
'Not Found'
*/
const modifyArray = (array, indexToModify) => {
    if (array.length < indexToModify || indexToModify === undefined) {
        return `Item Not Found.`;
    } else {
        array.at(indexToModify).toUpperCase();
        return array;
    };
};

console.log('14. - ', modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'], 5));
console.log('14. - ', modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
console.log('14. - ', modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM'], 5));
console.log('14. - ', modifyArray(['Google', 'Facebook', 'Apple', 'Amazon'], 5));

// Write a function called isPrime, which checks if a number is prime number.
const isPrime = (number) => {
    let counter = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            counter++;
        };
    };
    return counter === 2 ? `The number ${number} is prime` : `The number ${number} is not prime`;
};
const checkingNumbers = () => {
    for (let i = 1; i < 101; i++) {
        console.log(isPrime(i));
    };
};
// console.log('15. - ', isPrime(97));
checkingNumbers();

// Write a functions which checks if all items are unique in the array.
const checksUniqueValues = (array) => {
    const uniqueValues = new Set(array);
    return array.length === uniqueValues.size;
};
console.log('16. - ', checksUniqueValues([1, 2, 4, 5, 6, 7, 7]));
console.log('16. - ', checksUniqueValues([1, 2, 4, 5, 6, 7]));

// Write a function which checks if all the items of the array are the same data type.
const checkTypes = (array) => {
    const type = typeof array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== type) {
            return `${array} so... ${false}`;
        };
    };
    return `${array} so... ${true}`;
};

console.log('17. - ', checkTypes([1, 2, 4, 5, 6, 7]));
console.log('17. - ', checkTypes([1, 2, 4, 5, 6, 7, 'help', 'me']));

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
const isValidVariable = (variableIn) => {
    const notValidCharacters = '!@#%^&*()-={}[]|\`~';
    if (!isNaN(parseInt(variableIn[0]))) {
        return `The variable ${variableIn} is invalid for including numbers at the beginning`;
    } else if (variableIn.includes(' ')) {
        return `The variable ${variableIn} is invalid for including spaces ' '`;
    };
    for (let i = 0; i < notValidCharacters.length - 1; i++) {
        if (variableIn.includes(notValidCharacters[i])) {
            return `The variable ${variableIn} is invalid for including the character '${notValidCharacters[i]}'`
        };
    };
    return `The variable ${variableIn} is valid! 🎉`;
};
console.log('18. - ', isValidVariable('Geeks'));
console.log('18. - ', isValidVariable('Geeks_for_Geeks'));
console.log('18. - ', isValidVariable('$Geeks'));
console.log('18. - ', isValidVariable('_Geeks'));
console.log('18. - ', isValidVariable('Geeks123'));
console.log('18. - ', isValidVariable('Geeks-for-Geeks'));
console.log('18. - ', isValidVariable('123Geeks'));
console.log('18. - ', isValidVariable('Geeks for Geeks'));

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
/*
sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
*/
const sevenRandomNumbers = () => {
    let uniqueArrayElements = [];
    let count = 0;
    while (count < 7) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (uniqueArrayElements.length === 0) {
            uniqueArrayElements.push(randomNumber);
            count++;
        } else if (!uniqueArrayElements.includes(randomNumber)) {
            uniqueArrayElements.push(randomNumber);
            count++;
        };
    };
    return uniqueArrayElements;
};

console.log('19. - ', sevenRandomNumbers());

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = (countries) => {
    const workingArray = [...countries];
    return workingArray.reverse();
};

console.log('20. - ', reverseCountries(countries));