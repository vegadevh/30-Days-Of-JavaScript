// Calculate the total annual income of the person from the following text. 
const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const pattern = /\d+/g;
const income = text.match(pattern);

const annualIncome = income.reduce((accumulator, actual) => {
    return accumulator + parseInt(actual);
}, 0);

console.log('1. - ', annualIncome);

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const textAboutParticles = "The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
const particlePattern = /\-?\d+/g;

const particles = textAboutParticles.match(particlePattern).map(particle => parseInt(particle));
const maxValue = Math.max(...particles);
const minValue = Math.min(...particles);
console.log('2. - ', `The particles positions are ${particles}. The distance between the furthest particles is ${maxValue - minValue}.`);

// Write a pattern which identify if a string is a valid JavaScript variable

const is_valid_variable = (string) => {
    const jsPattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return jsPattern.test(string);
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))