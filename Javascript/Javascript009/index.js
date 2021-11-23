function sumOne(number1, number2) {
  const multiply = number1 * number1 + number2 * number2;
  return multiply * multiply;
}

console.log(sumOne(4, 2));

const sumTwo = function (number3, number4) {
  const multiply = number3 * number3 + number4 * number4;
  return multiply * multiply;
};

console.log(sumTwo(4, 2));

const sumThree = (number5, number6) => {
  const multiply = number5 * number5 + number6 * number6;
  return multiply * multiply;
};

console.log(sumThree(4, 2));
