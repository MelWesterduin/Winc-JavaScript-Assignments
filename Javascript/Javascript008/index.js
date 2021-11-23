function numberChecker(number) {
  if (number > 100) {
    return 'true';
  } else number < 100;
  return 'false';
};

const result = numberChecker(98);
console.log(result);

function bouncer(currentNrOfPeople, age, capacity) {
  if (age < 18) {
    return 'This is a club for adults';
  } else if (currentNrOfPeople > capacity) {
    return "It's too busy now, come back later";
  } else {
    return 'come in';
  }
};

const guest = bouncer(98, 21, 100);
const guestOne = bouncer(88, 17, 100);
console.log(guest);
console.log(guestOne);

const average = function(numberA, numberB, numberC, numberD, numberE) {
    const result = numberA + numberB + numberC + numberD + numberE / 5;
    return Math.round(result);
};

console.log(average(5, 6, 7, 7, 8));
console.log(average(5.6, 6, 7.8, 7, 8));
