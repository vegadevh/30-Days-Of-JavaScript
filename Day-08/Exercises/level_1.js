// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Spike';
dog.legs = 4;
dog.color = 'white';
dog.age = 1;
dog.bark = () => {
    return 'woof woof';
};
// Get name, legs, color, age and bark value from the dog object
console.log(`His name is ${dog.name}, has ${dog.legs}, it's ${dog.color}, it's ${dog.age} years old and he can bark! ${dog.bark()}`);
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Pug';
dog.getDogInfo = () => {
    return `His name is ${dog.name}, has ${dog.legs}, it's ${dog.color}, it's ${dog.age}, it's a ${dog.breed} years old and he can bark! ${dog.bark()}`;
};
console.log(dog.getDogInfo());
