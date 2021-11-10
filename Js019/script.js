// A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = (hero) => {
    return hero.find(({name}) => name === "Spiderman");
};
        
console.log(findSpiderMan(superheroes));
   
// B
const doubleArrayValues = [1, 2, 3];

const multiply = (array) => array.map((number) =>  number * 2);

console.log(multiply(doubleArrayValues));

// C
const highArray = [1, 4, 3, 5, 9, 7, 11];
const lowArray = [1,2,1,2,1,2];

const containsNumberBiggerThanTen = (list) => {
    return list.some((number) => number > 10);
};

console.log(containsNumberBiggerThanTen(highArray));
console.log(containsNumberBiggerThanTen(lowArray));

// D
const theGreatSeven = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

const isItalyInTheGreatSeven = (check) => {
    return check.includes('Italy');
};

console.log(isItalyInTheGreatSeven(theGreatSeven));

// E
const numbers = [1, 4, 3, 6, 9, 7, 11];

const tenFold = (math) => {
    return math.map((number) => number * 10);
};

console.log(tenFold(numbers));

// F
const ages = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isBelowHunderd = (age) => {
    return age.every((birthday) => birthday < 100);
};

console.log(isBelowHunderd(ages));