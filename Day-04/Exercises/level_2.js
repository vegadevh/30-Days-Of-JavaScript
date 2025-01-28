const readline = require('node:readline');
// Write a code which can give grades to students according to theirs scores:
/* 
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
 */

const score = 55;
if (score >= 80 && score <= 100) {
    console.log(`You got an A`);
} else if (score >= 70 && score <= 89) {
    console.log(`You got an B`);
} else if (score >= 60 && score <= 69) {
    console.log(`You got an C`);
} else if (score >= 50 && score <= 59) {
    console.log(`You got an D`);
} else if (score >= 0 && score <= 49) {
    console.log(`You got an E`);
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
/*
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
 */
const getMonth = () => {
    const seasonInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    seasonInput.question('Enter a month name: ', month => {
        const monthComparator = month.trim().toLowerCase();
        if (['september', 'october', 'november'].includes(monthComparator)) {
            console.log(`Autumn`);
        } else if (['december', 'january', 'february'].includes(monthComparator)) {
            console.log(`Winter`);
        } else if (['march', 'april', 'may'].includes(monthComparator)) {
            console.log(`Spring`);
        } else if (['june', 'july', 'august'].includes(monthComparator)) {
            console.log(`Summer`);
        } else {
            console.log('NO CONCIDENCES. Check if you type something wrong.');
        }
        seasonInput.close();
    });
};

// Check if a day is weekend day or a working day. Your script will take day as an input.
/* 
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.
*/
const getDay = () => {
    const dayInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    dayInput.question('Enter a day of the week: ', dayOfWeek => {
        const day = dayOfWeek.trim().toLowerCase();
        if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day)) {
            console.log(`${day} is a working day`);
        } else if (['saturday', 'sunday'].includes(day)) {
            console.log(`${day} is a weekend`);
        } else {
            console.log('NO CONCIDENCES. Check if you type something wrong.');
        }
        dayInput.close();
    });
};

// getMonth();
getDay();