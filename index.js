//function declaration

function squaring1(number1, number2) {
    squareOne = number1 * number1;
    squareTwo = number2 * number2;
    sumTwoSquares = squareOne + squareTwo;
    squareThree = sumTwoSquares * sumTwoSquares;
    return squareThree;
}

console.log(squaring1(3, 4));

//function expression

const squaring2 = function(number1, number2) {
    squareOne = number1 * number1;
    squareTwo = number2 * number2;
    sumTwoSquares = squareOne + squareTwo;
    squareThree = sumTwoSquares * sumTwoSquares;
    return squareThree;
}

console.log(squaring2(3, 4));

//arrow function

const squaring3 = (number1, number2) => {
    squareOne = number1 * number1;
    squareTwo = number2 * number2;
    sumTwoSquares = squareOne + squareTwo;
    squareThree = sumTwoSquares * sumTwoSquares;
    return squareThree;
}

console.log(squaring3(3, 4));