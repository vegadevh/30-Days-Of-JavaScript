// Check the speed difference among the following loops: while, for, for of, forEach

const range = (start, stop, step) =>
    Array.from(
        { length: Math.ceil((stop - start) / step) },
        (_, i) => start + i * step,
    );

let numbers = range(0, 1001, 1);
let total = 0;
let index = 0;

console.time()
while (index < numbers.length) {
    total += numbers[index];
    index++;
}
console.log('While', total);
console.timeEnd();

total = 0;

console.time()
for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
}
console.log('For', total);
console.timeEnd();

total = 0;

console.time()
for (const number of numbers) {
    total += number;
}
console.log('For of', total);
console.timeEnd();

total = 0;

console.time()
numbers.forEach(number => {
    total += number;
});
console.log('forEach', total);
console.timeEnd();