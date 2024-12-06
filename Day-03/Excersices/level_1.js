// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

export let name = 'Diego';
export let lastname = 'Vega';
let country = 'El Salvador';
let city = 'Santa Tecla';
export let age = 27;
let isMarried = false;
let year = 2024;

console.log('1. - ',
    typeof (name),
    typeof (lastname),
    typeof (country),
    typeof (city),
    typeof (age),
    typeof (is),
    typeof (year)
);

// Check if type of '10' is equal to 10

console.log('2. - ', '10' === 10);

// Check if parseInt('9.8') is equal to 10

console.log('3. - ', parseInt('9.8') == 10);

// Boolean value is either true or false.

/**
* - Write three JavaScript statement which provide truthy value.
* - Write three JavaScript statement which provide falsy value.
*/

console.log('4. - \t',
    1 == true,
    undefined == null,
    2 > 1,
    '\n\t',
    0 == true,
    3 < 1,
    1 === true
);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

/**
* - 4 > 3
* - 4 >= 3
* - 4 < 3
* - 4 <= 3
* - 4 == 4
* - 4 === 4
* - 4 != 4
* - 4 !== 4
* - 4 != '4'
* - 4 == '4'
* - 4 === '4'
* - Find the length of python and jargon and make a falsy comparison statement.
*/

console.log('5. - ',
    `\tExpression\t\t\t\tMy Answer\tAnswer`,
    `\n\t 4 > 3\t\t\t\t\ttrue\t\t`, 4 > 3,
    `\n\t 4 >= 3\t\t\t\t\ttrue\t\t`, 4 >= 3,
    `\n\t 4 < 3\t\t\t\t\tfalse\t\t`, 4 < 3,
    `\n\t 4 <= 3\t\t\t\t\tfalse\t\t`, 4 <= 3,
    `\n\t 4 == 4\t\t\t\t\ttrue\t\t`, 4 == 4,
    `\n\t 4 === 4\t\t\t\ttrue\t\t`, 4 === 4,
    `\n\t 4 != 4\t\t\t\t\tfalse\t\t`, 4 != 4,
    `\n\t 4 !== 4\t\t\t\tfalse\t\t`, 4 !== 4,
    `\n\t 4 != '4'\t\t\t\tfalse\t\t`, 4 != '4',
    `\n\t 4 == '4'\t\t\t\ttrue\t\t`, 4 == '4',
    `\n\t 4 === '4'\t\t\t\tfalse\t\t`, 4 === '4',
    `\n\t 'python'.length != 'jargon'.length\tfalse\t\t`, 'python'.length != 'jargon'.length,
);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

/**
* - 4 > 3 && 10 < 12
* - 4 > 3 && 10 > 12
* - 4 > 3 || 10 < 12
* - 4 > 3 || 10 > 12
* - !(4 > 3)
* - !(4 < 3)
* - !(false)
* - !(4 > 3 && 10 < 12)
* - !(4 > 3 && 10 > 12)
* - !(4 === '4')
* - There is no 'on' in both dragon and python
*/

console.log('6. - ',
    `\tExpression\t\t\t\t\t\t\tMy Answer\tAnswer`,
    `\n\t 4 > 3 && 10 < 12\t\t\t\t\t\ttrue\t\t`, 4 > 3 && 10 < 12,
    `\n\t 4 > 3 && 10 > 12\t\t\t\t\t\tfalse\t\t`, 4 > 3 && 10 > 12,
    `\n\t 4 > 3 || 10 < 12\t\t\t\t\t\ttrue\t\t`, 4 > 3 || 10 < 12,
    `\n\t 4 > 3 || 10 > 12\t\t\t\t\t\ttrue\t\t`, 4 > 3 || 10 > 12,
    `\n\t !(4 > 3)\t\t\t\t\t\t\tfalse\t\t`, !(4 > 3),
    `\n\t !(4 < 3)\t\t\t\t\t\t\ttrue\t\t`, !(4 < 3),
    `\n\t !(false)\t\t\t\t\t\t\ttrue\t\t`, !(false),
    `\n\t !(4 > 3 && 10 < 12)\t\t\t\t\t\tfalse\t\t`, !(4 > 3 && 10 < 12),
    `\n\t !(4 > 3 && 10 > 12)\t\t\t\t\t\ttrue\t\t`, !(4 > 3 && 10 > 12),
    `\n\t !(4 === '4')\t\t\t\t\t\t\ttrue\t\t`, !(4 === '4'),
    `\n\t 'dragon'.includes('on') && 'python'.includes('on') \t\ttrue\t\t`, 'dragon'.includes('on') && 'python'.includes('on'),
);

// Use the Date object to do the following activities

/**
* - What is the year today?
* - What is the month today as a number?
* - What is the date today?
* - What is the day today as a number?
* - What is the hours now?
* - What is the minutes now?
* - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const now = new Date();
console.log('7. - ',
    `\tExpression\t\t\t\t\t\t\t\tAnswer`,
    `\n\tWhat is the year today?\t\t\t\t\t\t\t${now.getFullYear()}`,
    `\n\tWhat is the month today as a number?\t\t\t\t\t${now.getMonth()}`,
    `\n\tWhat is the date today?\t\t\t\t\t\t\t${now.getDate()}`,
    `\n\tWhat is the day today as a number?\t\t\t\t\t${now.getDay()}`,
    `\n\tWhat is the hours now?\t\t\t\t\t\t\t${now.getHours()}`,
    `\n\tWhat is the minutes now?\t\t\t\t\t\t${now.getMinutes()}`,
    `\n\tFind out the numbers of seconds elapsed from January 1, 1970 to now.\t${now.getTime()}`,
);
