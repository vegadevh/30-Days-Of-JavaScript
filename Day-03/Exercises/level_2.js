import { name, lastname, age } from "./level_1.js";
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

/**
* - Enter base: 20
* - Enter height: 10
* - The area of the triangle is 100
*/
const base = prompt('Enter base');
const height = prompt('Enter height');
alert('The area of the triangle is', 0.5 * base * height);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

/**
* - Enter side a: 5
* - Enter side b: 4
* - Enter side c: 3
* - The perimeter of the triangle is 12
*/

const a = prompt('Enter side a');
const b = prompt('Enter side b');
const c = prompt('Enter side c');
alert('The perimeter of the triangle is', parseInt(a) + parseInt(b) + parseInt(c));

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const length = prompt('Enter lenght');
const width = prompt('Enter width');
alert(`The perimeter of the rectangle is ${2 * (parseInt(length) + parseInt(width))}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const radius = prompt('Enter radius');
alert(Math.PI*Math.pow(2,2));

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope its equals to b (y = nx + b)
const slope = 'y = 2x -2'.match(/\d+(?=x)/gi);
// y-intercept its equals to b (y = nx + b)
const y_intercept = 'y = 2x -2'.match(/[+-]\d/gi);
// x-intercept occurs when y 0. So ... 2/2 = x
const x_intercept = -(parseInt(y_intercept)) / parseInt(slope[0]);
console.log('5. -',
    `\n\tSlope: ${parseInt(slope[0])}\n`,
    `\ty-intercept: ${parseInt(y_intercept)}\n`,
    `\tx-intercept: ${parseInt(x_intercept)}`
);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const point_a = [2, 2];
const point_b = [6, 10];
console.log('6. - ',
    `Slope = ${(point_b[1] - point_a[1]) / (point_b[0] - point_a[0])}`,
);

// Compare the slope of above two questions.

console.log('7. - ', `Slope from excersice 5 (${parseInt(slope[0])}) is equal to the slope from excersice 6 (${(point_b[1] - point_a[1]) / (point_b[0] - point_a[0])})? ${parseInt(slope[0]) == (point_b[1] - point_a[1]) / (point_b[0] - point_a[0])}`);


// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = -4;
let y = Math.pow(3, 2) + 6 * x + 9;
console.log('8. - ', y);

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

/**
 * - Enter hours: 40
 * - Enter rate per hour: 28
 * - Your weekly earning is 1120
 * - If the length of your name is greater than 7 say, your name is long else say your name is short.
*/

const hours = prompt('Enter your hours');
const rate_per_hour = prompt('Enter rate per hours');
alert(hours * rate_per_hour);
name.length > 7 ? alert('Your name is long') : alert('Your name is short');

// Compare your first name length and your family name length and you should get this output.

/**
* - let firstName = 'Asabeneh'
* - let lastName = 'Yetayeh'
* - Your first name, Asabeneh is longer than your family name, Yetayeh
*/

console.log('10. - ', `Your ${name}, Asabeneh is longer than your family name, ${lastname}`);

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

/**
* - let myAge = 250
* - let yourAge = 25
* - I am 225 years older than you.
*/

let someone_else_age = 30;
someone_else_age > age ? console.log('11. - ', `Someone else is ${someone_else_age - age} year older than you`) : console.log('11. - ', `Someone else is ${age - someone_else_age} year younger than you`);


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/**
* - Enter birth year: 1995
* - You are 25. You are old enough to drive
*
* - Enter birth year: 2005
* - You are 15. You will be allowed to drive after 3 years.
*/

const birth_year = prompt('Enter your birth year');
const now = new Date();
const user_age = now.getFullYear()-birth_year;
user_age >= 18 ? alert(`You are ${user_age}. You are old enough to drive.`): alert(`You are ${user_age}. You will be allowed to drive after ${18-user_age} years.`);

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

/**
* - Enter number of years you live: 100
* - You lived 3153600000 seconds.
*/

const lived_years = prompt('How many years do you lived?');
const seconds_in_year = 31536000;
alert(`You have lived ${(lived_years * seconds_in_year)} seconds`);

// Create a human readable time format using the Date time object

/**
* - YYYY-MM-DD HH:mm
* - DD-MM-YYYY HH:mm
* - DD/MM/YYYY HH:mm
*/

console.log('14. -\n',
    `${now.toLocaleDateString('en-CA')} ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23" })}\n`,
    `${now.toLocaleDateString('en-GB').replace(/\//g, '-')} ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23" })}\n`,
    `${now.toLocaleDateString('en-GB')} ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23" })}`,
);

