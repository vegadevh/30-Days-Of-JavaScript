import { countries_data, student } from "./required_files/data.js";
// Destructure the countries object print name, capital, population and languages of all countries

for (const { name, capital, languages, population } of countries_data) {
    console.log(`Name: ${name}, Capital: ${capital}, Languages: ${[...languages]}, Population: ${population}`);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student_1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [, , jsScore, reactScore]] = student_1;
console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

// console.log(convertArrayToObject(students))
// [
//     {
//         name: 'David',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [98, 85, 90, 95]
//     },
//     {
//         name: 'John',
//         skills: ['HTM', 'CSS', 'JS', 'React'],
//         scores: [85, 80, 85, 80]
//     }
// ]

const convertArrayToObject = (students) => {
    let structuredObject = [];
    for (const student of students) {
        const [name, skills, scores] = student;
        structuredObject.push({ 'name': name, 'skilss': skills, 'scores': scores });
    }
    return structuredObject;
}

console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// - Add Bootstrap with level 8 to the front end skill sets
// - Add Express with level 9 to the back end skill sets
// - Add SQL with level 8 to the data base skill sets
// - Add SQL without level to the data science skill sets

let newStudent = { ...student }

newStudent.skills.frontEnd.push({ 'skill': 'Bootstrap', 'level': 8 });
newStudent.skills.backEnd.push({ 'skill': 'Express', 'level': 9 });
newStudent.skills.dataBase.push({ 'skill': 'SQL', 'level': 8 });
newStudent.skills.dataScience.push('SQL');

console.log(JSON.stringify(newStudent));
console.log(newStudent);
