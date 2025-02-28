const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Find a union b
const c = [...a, ...b];
console.log('Union: ', c);
// Find a intersection b
const A = new Set(a);
const B = new Set(b);
let d = a.filter((number) => B.has(number));
console.log('Intersection: ', d);
// Find a with b ??? maybe find what difference between arrays???
const difference = a.filter((number) => !B.has(number));
console.log('Difference: ', difference);