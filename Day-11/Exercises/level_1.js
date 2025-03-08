import { constants, countries, rectangle } from "./required_files/data.js";

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor

const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Destructure the rectangle object by its properties or keys.

const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);
