class RectangleCalc {
    constructor(rectangle_length, rectangle_width) {
        this.rectangle_length = rectangle_length;
        this.rectangle_width = rectangle_width;
    }
    // Luas / Area
    getArea(rectangle_length, rectangle_width) {
        return rectangle_length * rectangle_width;
    }
    // Keliling / Perimeter
    getPerimeter(rectangle_length, rectangle_width) {
        return 2 * (rectangle_length + rectangle_width);
    }
}

module.exports = RectangleCalc;