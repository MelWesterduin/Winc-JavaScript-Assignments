// A
const words = ['wicked', 'awesome', 'dope'];

const addCool = (listOfWords) => {
    listOfWords.push('cool');
    return listOfWords;
};
console.log(addCool(words));

// B
const fruit = ['apple', 'pear', 'melon', 'banana'];

const lengthOfList = (listOfFruit) => {
    return listOfFruit.length;
};
console.log(lengthOfList(fruit));

// C
const benelux = ["Belgie", "Nederland", "Luxemburg"];

const selectCountry = (countries) => {
    return countries[0];
};
console.log(selectCountry(benelux));

//D
const animals = ["Haas", "Cavia", "Kip", "Schildpad"];

const lastAnimal = (listOfAnimals) => {
    return listOfAnimals[listOfAnimals.length - 1];
}
console.log(lastAnimal(animals));

//E
const presidents = ['Trump', 'Obama', 'Clinton', 'Bush'];

const removeTrump = (listOfPresidents) => {
    const trumpIsGone = listOfPresidents.slice(1);
    return trumpIsGone;
};

const removeBushSplice = (list) => {
    const byeBush = list.splice(0, 3); 
    return byeBush;
};

console.log(removeTrump(presidents));
console.log(removeBushSplice(presidents));

// F
const sentence = ['Winc', 'Academy', 'is', 'leuk', ';-)'];

const stringsTogether = (wholeSentence) => {
    return wholeSentence.join(' ');
};
console.log(stringsTogether(sentence));

// G
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combineArrays = (arraysTogether) => {
    return arraysTogether = numbers.concat(moreNumbers);
};
console.log(combineArrays());