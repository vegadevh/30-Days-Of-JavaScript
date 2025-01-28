import { countries } from '../../Day-06/Exercises/required_files/arrays.js';
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
const solveLinEquation = (a, b, c, x, y) => {
    if (x === 'x') {
        x = -c - b * y / a;
    } else if (y === 'y') {
        y = -c - a * x / b;
    };
    return { x, y };
}
console.log('1. - ', solveLinEquation(1, 2, 3, 'x', 5), solveLinEquation(1, 2, 3, 10, 'y'));

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
/*
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
 */
const solveQuadEquation = (a, b, c = undefined) => {
    if (a, b, c === undefined) {
        return [0];
    } else {
        return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a === (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a ? [(-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a] : [(-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a, (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a]
    }
}
console.log('2. - ', solveQuadEquation()) // {0}
console.log('2. - ', solveQuadEquation(1, 4, 4)) // {-2}
console.log('2. - ', solveQuadEquation(1, -1, -2)) // {2, -1}
console.log('2. - ', solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log('2. - ', solveQuadEquation(1, 0, -4)) //{2, -2}
console.log('2. - ', solveQuadEquation(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (array) => {
    array.forEach(element => {
        console.log('3. - ', element);
    });
};
printArray([1, 2, 3, 4, 5]);
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
/*
showDateTime()
08/01/2020 04:08
 */
const showDateTime = () => {
    let date = new Date();
    const formatter = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    // const formatter = Intl.DateTimeFormat('es', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    return formatter;
}
console.log('4. - ', showDateTime());
// Declare a function name swapValues. This function swaps value of x to y.
/*
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
 */
let x = 3;
let y = 4;
const swapValues = (x, y) => {
    let temporal = x;
    x = y;
    y = temporal;
    console.log('5. - ', `x => ${x}, y => ${y}`);
};
swapValues(x, y);
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
/*
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
*/
const reverseArray = (array) => {
    const reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    };
    return reverse;
};
console.log('6. - ', reverseArray(['A', 'B', 'C']));
console.log('6. - ', reverseArray([1, 2, 3, 4, 5]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (array) => {
    return array.map(element => element.toUpperCase());
};
console.log('7. - ', capitalizeArray(countries));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (item) => {
    countries.push(item);
    return countries;
};
console.log('8. - ', addItem('China'));
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (index) => {
    if (index >= 0 && index < countries.length) {
        countries.splice(index, 1);
        return countries;
    } else {
        return `It's not possible to use this index. Index not in array lenght.`;
    };
};
console.log('9. - ', removeItem(1));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (rangeLimit) => {
    const numbers = [];
    for (let i = 0; i <= rangeLimit; i++) {
        numbers.push(i);
    };
    return numbers;
};
console.log('10. - ', sumOfNumbers(120));
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (rangeLimit) => {
    const numbers = [];
    for (let i = 0; i <= rangeLimit; i++) {
        if (i % 2 !== 0) {
            numbers.push(i);
        }
    };
    return numbers;
};
console.log('11. - ', sumOfOdds(120));
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (rangeLimit) => {
    const numbers = [];
    for (let i = 0; i <= rangeLimit; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    };
    return numbers;
};
console.log('12. - ', sumOfEven(120));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
/*
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
const evensAndOdds = (limit) => {
    let evenSum = 0;
    let oddsSum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            evenSum++;
        } else {
            oddsSum++;
        };
    };
    return `The number of odds are ${oddsSum}.
The number of evens are ${evenSum}.`
};
console.log('13. - ', evensAndOdds(100));

// Write a function which takes any number of arguments and return the sum of the arguments
/*
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // ->  10
*/
const sumArguments = (...args) => {
    return args.reduce((previous, current) => previous + current, 0);
};
console.log('14. - ', sumArguments(1, 2, 3));
console.log('14. - ', sumArguments(1, 2, 3, 4));
// Writ a function which generates a randomUserIp.
const randomUserIp = () => {
    let ip = '';
    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            ip += `${Math.floor(Math.random() * 256)}`;
        } else {
            ip += `.${Math.floor(Math.random() * 255)}`;
        };
    };
    return ip;
};
console.log('15. - ', randomUserIp());

// Write a function which generates a randomMacAddress
const randomMacAddress = () => {
    let mac = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        if (i === 0) {
            mac += `${characters[Math.floor(Math.random() * characters.length)]}${characters[Math.floor(Math.random() * characters.length)]}`;
        } else {
            mac += `:${characters[Math.floor(Math.random() * characters.length)]}${characters[Math.floor(Math.random() * characters.length)]}`;
        }
    };
    return mac;
};
console.log('16. - ', randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/*
console.log(randomHexaNumberGenerator());
'#ee33df'
*/
const randomHexaNumberGenerator = () => {
    // return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    let hexa = '#';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        hexa += characters[Math.floor(Math.random() * characters.length)];
    };
    return hexa;
};
console.log('17. - ', randomHexaNumberGenerator());

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
/* 
console.log(userIdGenerator());
41XTDbE
*/
const userIdGenerator = () => {
    let id = '';
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 7; i++) {
        id += characters[Math.floor(Math.random() * characters.length)];
    };
    return id;
};
console.log('18. - ', userIdGenerator());
