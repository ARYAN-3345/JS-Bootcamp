function calculateArea(length, width=length) {
    return length * width;
}
const rectangleArea = calculateArea(10,5);
console.log(`The area of the rectangle is: ${rectangleArea}`);

//Call function with only one parameter, using the default:
const squareArea = calculateArea(8);
console.log(`The area of the square is: ${squareArea}`);