// Declare a function fullName and it print out your full name.
const fullName = () => {
    console.log('1. - ', 'Diego Edgardo Vega Herrera');
};
fullName();
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName2 = (firstName, lastName) => {
    console.log('2. - ', `${firstName} ${lastName}`);
};
fullName2('Diego', 'Vega');
// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addnumbers = (num1, num2) => {
    return num1 + num2;
};
console.log('3. - ', addnumbers(5, 10));
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
    return length * width;
};
console.log('4. - ', areaOfRectangle(5, 10));
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
    return 2 * (length + width);
};
console.log('5. - ', perimeterOfRectangle(5, 10));
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => {
    return length * width * height;
};
console.log('6. - ', volumeOfRectPrism(5, 10, 15));
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (radius) => {
    return Math.PI * radius ** 2;
}
console.log('7. - ', areaOfCircle(5));
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (radius) => {
    return (2 * Math.PI * radius).toFixed(2);
};
console.log('8. - ', circumOfCircle(5));
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => {
    return (mass / volume).toFixed(2);
};
console.log('9. - ', density(5, 10));
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speedOfMovingObject = (distance, time) => {
    return distance / time;
}
console.log('10. - ', speedOfMovingObject(5, 10));
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weightofSubstance = (mass, gravity) => {
    return (mass * gravity).toFixed(2);
};
console.log('11. - ', weightofSubstance(3, 9.8));
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * (9 / 5)) + 32;
};
console.log('12. - ', convertCelsiusToFahrenheit(24));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
/* 
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
const calculateBMI = (weight, height) => (weight / (height * height)).toFixed(2);

const evaluateBMI = (bmi) => {
    if (bmi < 18.5) {
        return `Your BMI's ${bmi}. You are in status: Underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI's ${bmi}. You are in status: Normal weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        return `Your BMI's ${bmi}. You are in status: Overweight.`;
    } else {
        return `Your BMI's ${bmi}. You are in status: Obese.`;
    }
};

console.log('13. - ', evaluateBMI(calculateBMI(71, 1.66)));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const djf = ['december', 'january', 'february'];
const mam = ['march', 'april', 'may'];
const jja = ['june', 'july', 'august'];
const son = ['september', 'october', 'november'];
const checkSeason = (month) => {
    const monthComparator = month.trim().toLowerCase();
    if (son.includes(monthComparator)) {
        return 'Autumn';
    } else if (djf.includes(monthComparator)) {
        return 'Winter';
    } else if (mam.includes(monthComparator)) {
        return 'Spring';
    } else if (jja.includes(monthComparator)) {
        return 'Summer';
    } else {
        return 'NO CONCIDENCES. Check if you type something wrong.';
    }
};
console.log('14. - ', checkSeason('june'));
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
/* 
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/ 
const findMax = (...args) => {
    return args.reduce((previous, current) => {
        return current > previous ? current : previous;
    }, -Infinity);
};

console.log('15. - ', findMax(0, 10, 5));