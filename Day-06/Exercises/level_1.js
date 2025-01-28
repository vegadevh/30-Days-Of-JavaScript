// Iterate 0 to 10 using for loop, do the same using while and do while loop
let number = 0;

for (let i = 0; i <= 10; i++) {
    console.log('for up', i);
};

while (number <= 10) {
    console.log('while up', number);
    number++;
};

number = 0;

do {
    console.log('do while up', number);
    number++;
} while (number <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
number = 10;
for (let i = 10; i >= 0; i--) {
    console.log('for down', i);
};

while (number >= 0) {
    console.log('while down', number);
    number--;
};

number = 10;

do {
    console.log('do while down', number);
    number--;
} while (number >= 0);
// Iterate 0 to n using for loop
let n = 100;
for (let i = 0; i <= n; i++) {
    console.log('for up to n', i);
};
// Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */
let lines = 7;
for (let i = 1; i <= lines; i++) {
    console.log('*'.repeat(i));
};
// Use loop to print the following pattern:

/* 0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
};
// Using loop print the following pattern
/*
i    i ^ 2   i ^ 3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
    */
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`);
};
// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
};
// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i < 101; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    };
};
// Use for loop to iterate from 0 to 100 and print only prime numbers
let counter = 0;
for (let i = 2; i < 101; i++) {
    counter = 0;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            counter++;
        }
    }
    if (counter === 0) {
        console.log(i);
    }
};
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/*
The sum of all numbers from 0 to 100 is 5050.
*/
counter = 0;
for (let i = 0; i < 101; i++) {
    counter += i;
    console.log(i);
};
console.log(`The sum of all numbers from 0 to 100 is ${counter}.`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/*
The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
*/
counter = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        counter += i;
    }
};
console.log(`The sum of all evens from 0 to 100 is ${counter}. And the sum of all odds from 0 to 100 is ${counter}.`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
/*
[2550, 2500]
*/
const sumEvens = (init, end) => {
    let counter = 0;
    for (let i = init; i <= end; i++) {
        if (i % 2 === 0) {
            counter += i;
        };
    };
    return counter;
};

const sumOods = (init, end) => {
    let counter = 0;
    for (let i = init; i <= end; i++) {
        if (i % 2 !== 0) {
            counter += i;
        };
    };
    return counter;
};
const evenAndOdds = [sumEvens(0, 100), sumOods(0, 100)];
console.log(evenAndOdds);
// Develop a small script which generate array of 5 random numbers
const randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
};
console.log(randomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const randomUniqueNumbers = [];
let randomNumber = 0;
for (let i = 0; i < 5; i++) {
    randomNumber = Math.floor(Math.random() * 100);
    if (randomUniqueNumbers.length !== 0) {
        randomUniqueNumbers.push(randomNumber);
    } else if (randomNumber !== randomUniqueNumbers[i - 1]) {
        randomUniqueNumbers.push(randomNumber);
    }
};
console.log(randomUniqueNumbers);
// Develop a small script which generate a six characters random id:
/* 
5j2khz
*/
const randomId = () => {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id
}

console.log(randomId());
