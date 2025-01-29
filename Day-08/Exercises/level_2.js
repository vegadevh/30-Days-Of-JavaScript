import { users, countries } from "./required_files/objects.js";

// Find the person who has many skills in the users object.
//users is an object
const userWithMoreSkills = () => {
    let mostSkilled = '';
    let maxSkills = 0;
    Object.keys(users).forEach(user => {
        if (users[user].skills.length > maxSkills) {
            maxSkills = users[user].skills.length;
            mostSkilled = user;
        };
    });
    return `The user with more skills is ${mostSkilled}, and has ${maxSkills} skills: ${users[mostSkilled].skills}`;
};
console.log('1. - ', userWithMoreSkills());

// Count logged in users, count users having greater than equal to 50 points from the following object.
const findGreaterThanEqualToPointsUser = () => {
    let usersWithMorePoints = {};
    Object.keys(users).forEach(user => {
        if (users[user].points >= 50) {
            usersWithMorePoints[user] = users[user].points;
        };
    });
    return usersWithMorePoints;
};
console.log('2. - ', findGreaterThanEqualToPointsUser());

// Find people who are MERN stack developer from the users object
const findMERNStackDevelopers = () => {
    const MERN = ['MongoDB', 'Express', 'React', 'Node'];
    const MERNDevelopers = [];
    Object.keys(users).forEach(user => {
        if (MERN.every(skill => users[user].skills.includes(skill))) {
            MERNDevelopers.push(user);
        }
    });
    return MERNDevelopers;
};
console.log('3. - ', findMERNStackDevelopers());

// Set your name in the users object without modifying the original users object
const addingName = () => {
    let newUsers = Object.assign({}, users);
    newUsers['Diego'] = {
        email: 'mail@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 27,
        isLoggedIn: false,
        points: 40,
    };
    return newUsers;
};
console.log('4. - ', addingName());

// Get all keys or properties of users object
const getAllKeys = () => {
    return Object.keys(users);
};
console.log('5. - ', getAllKeys());

// Get all the values of users object
const getAllValues = () => {
    return Object.values(users);
};
console.log('6. - ', getAllValues());
// Use the countries object to print a country name, capital, populations and languages.
const getRandomCountryInfo = () => {
    const countryKey = Math.floor(Math.random() * Object.keys(countries).length);
    return `${countries[countryKey].capital} is the capital of ${countries[countryKey].name}. With a population of ${countries[countryKey].population}. They speak: ${countries[countryKey].languages}`;
};

console.log('7. - ', getRandomCountryInfo());
