import { users, student } from "./required_files/data.js";

// Iterate through the users array and get all the keys of the object using destructuring

for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
}

// Find the persons who have less than two skills

const personsWithLessThanTwoSkills = (persons) => {
    const listOfPersons = persons.filter(person => person.skills.length < 2);
    return listOfPersons;
}

console.log(personsWithLessThanTwoSkills(users));
