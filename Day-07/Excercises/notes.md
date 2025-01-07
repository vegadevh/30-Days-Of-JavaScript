# Day 07 - NOTES

In JavaScript you can use diferent methods to manage diferent solutions with arrays. You can iterate an array or even return a new array that evaluate a certain case and work with every element of the original.

## Array.prototype.reduce()

This method iterates the elements in the array in ascending order and accumulates them into a single one value as accumulator.

```
const findMax = (...args) => {
    return args.reduce((accumulator, current) => {
        return current > accumulator ? current : accumulator;
    }, -Infinity);
};

console.log('15. - ', findMax(0, 10, 5));
```

## Array.prototype.map()

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

```
const capitalizeArray = (array) => {
    return array.map(element => element.toUpperCase());
};
console.log('7. - ', capitalizeArray(countries));
```

## Array.prototype.filter()

This method creates a shallow copy of the portion of the given array, filtered down the elements of the array that pass the test or match the case provided for the function.

```
console.log(`${countries.filter(country => country.length === 5)}`);
```
## Alternative option to resolve excercise 17 - randomHexaNumberGenerator - Provided by Copilot 
The active selection is a JavaScript function named 

randomHexaNumberGenerator

That generates a random hexadecimal color code. Hexadecimal color codes are commonly used in web development to specify colors in a format that browsers can interpret. These codes start with a `#` followed by six hexadecimal digits, where each pair of digits represents the red, green, and blue components of the color.

```
const randomHexaNumberGenerator = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};
```

### Math.random()

Generates a random floating-point number between 0 (inclusive) and 1 (exclusive). Multiplying this number by `16777215` (which is `0xFFFFFF` in hexadecimal) scales it up to a range between 0 and 16777215. This range covers all possible values for a 24-bit color, which corresponds to the six-digit hexadecimal color code.
### Math.floor()

Is used to round down the random number to the nearest whole number. This ensures that the result is an integer within the desired range.
### toString(16)

 method converts the integer to a hexadecimal string.
### Formatting the Result

The function returns a template string that starts with `#` followed by the hexadecimal string. This forms a valid hexadecimal color code.

The function ensures that each time it is called, it generates a unique and valid hexadecimal color code, which can be used in web development for styling elements with random colors.

> ### Reference:  
> - **Array.prototype.reduce()**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
> - **Array.prototype.map()**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
> - **Array.prototype.filter()**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

