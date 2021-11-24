// function 1
const add = (...numbers) => {
    sum = 0;
    for (num of numbers) sum += num;
    return sum;
  
};

console.log(add(2, 4, 6));

// function 2

const addNumbers = (a, b, c) => {
    return a + b + c;
};
const numbers = [8, 5, 3];

console.log(addNumbers(...numbers));