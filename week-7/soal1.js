const SquareCalc = require('./calc_module/SquareCalc.js');
const RectangleCalc = require('./calc_module/RectangleCalc.js');
const square_calc = new SquareCalc();
const rectangle_calc = new RectangleCalc();

console.log("Luas Persegi : ", square_calc.getArea(10));
console.log("Keliling Persegi : ", square_calc.getPerimeter(10));

console.log("Luas Persegi : ", rectangle_calc.getArea(5, 10));
console.log("Keliling Persegi : ", rectangle_calc.getPerimeter(5, 10));