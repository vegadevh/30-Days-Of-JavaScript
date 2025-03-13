// 10 > 2 * 10 use console.assert()
let number = 10;
console.assert(number > 2 * 10, `The number ${number} doesn't meet the condition: <number> greater than 2 * 10.`)
number = 30;
console.assert(number > 2 * 10, `The number ${number} doesn't meet the condition: <number> greater than 2 * 10.`)
// Write a warning message using console.warn()
console.warn('This is a warning');
// Write an error message using console.error()
console.error('This is an error');