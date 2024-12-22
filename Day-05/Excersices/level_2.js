// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from "./require_files/countries.js";
import { webTechs } from "./require_files/web_techs.js";

console.log(countries);
console.log(webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
/*
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

> 13
*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(" ");
console.log('2. - ', words, words.length);

// In the following shopping cart add, remove, edit items
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const checkedCart = [...shoppingCart];

const checkShoppingCart = () => {
    let allergic = false;

    !checkedCart.includes('Meat')

    if (!checkedCart.includes('Meat')) {
        checkedCart.unshift('Meat');
    }
    if (!checkedCart.includes('Sugar')) {
        checkedCart.push('Sugar');
    }
    if (allergic) {
        let honeyIndex = checkedCart.indexOf('Honey');
        checkedCart.splice(honeyIndex, 1);
    }
    let teaIndex = checkedCart.indexOf('Tea');
    checkedCart[teaIndex] = 'Green Tea';
};

checkShoppingCart();

console.log('3. - ', shoppingCart, checkedCart);


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable.
/* 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)

["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

