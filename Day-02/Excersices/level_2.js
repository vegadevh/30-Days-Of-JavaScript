// Using console.log() print out the following statement:

/**
* The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/

console.log('1. -', `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

//Using console.log() print out the following quote by Mother Teresa:

/*
* "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/

console.log('2. -', "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

const checkTypeOf = (value, target) => {
    if (typeof (value) != target) {
        const new_value = Number(value);
        console.log('3. - IF -', typeof (new_value) == typeof (target));
    } else {
        console.log('3. - ELSE -', typeof (value) == typeof (target));
    }
}

checkTypeOf('10', 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

const ItsEqualTo = (value, target) => {
    let float = parseFloat(value)
    if ((float != 10)) {
        const new_value = Math.ceil(float);
        console.log('4. - IF -', new_value == target);
    } else {
        console.log('4. - ELSE -', value == target);
    }
}

ItsEqualTo('9.8', 10);

// Check if 'on' is found in both python and jargon

let python = 'python';
let jargon = 'jargon'

console.log('6. -', python.includes('on'), jargon.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence = 'I hope this course is not full of jargon';

console.log('7. -', sentence.includes('on'));

// Generate a random number between 0 and 100 inclusively.

console.log('8. -', Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.

console.log('9. -', Math.floor(Math.random() * (51) + 50));

// Generate a random number between 0 and 255 inclusively.

console.log('10. -', Math.floor(Math.random() * 256));

// Access the 'JavaScript' string characters using a random number.

let js = 'JavaScript';
console.log('11. -',js.charAt(Math.floor(Math.random()* js.length +1)));

// Use console.log() and escape characters to print the following pattern.

/**
*1 1 1 1 1
*2 1 2 4 8
*3 1 3 9 27
*4 1 4 16 64
*5 1 5 25 125
*/

console.log('12. - ',`
\t1 1 1 1 1\n
\t2 1 2 4 8\n
\t3 1 3 9 27\n
\t4 1 4 16 64\n
\t5 1 5 25 125\n`);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log('13. -',because.substring(31, 54));
