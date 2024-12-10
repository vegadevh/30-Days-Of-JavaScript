const readline = require('node:readline');
// Write a program which tells the number of days in a month.
/* 
Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days.
*/
// Write a program which tells the number of days in a month, now consider leap year.

const inputter = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

inputter.question('Enter a month day: ', monthInput => {
    inputter.question('Enter a year day: ', yearInput => {
        const monthOperator = monthInput.trim().toLowerCase();
        const year = yearInput;
        const date = new Date(year, months.indexOf(monthOperator) + 1, 0);

        console.log(`${monthOperator.charAt(0).toUpperCase().concat(monthOperator.substring(1))} has ${date.getDate()} days.`);
        inputter.close();
    });
});