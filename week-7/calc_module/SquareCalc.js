class SquareCalc {
    constructor(square_side) {
        this.square_side = square_side;
    }
    // Luas / Area
    getArea(square_side) {
        return square_side * square_side;
    }
    // Keliling / Perimeter
    getPerimeter(square_side) {
        return 4 * square_side;
    }
}

module.exports = SquareCalc; 