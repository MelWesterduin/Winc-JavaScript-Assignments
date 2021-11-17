// Part 1
const animalBtn = document.querySelectorAll('.big-five-button');

animalBtn.forEach((animal) => {
    animal.addEventListener('click', () => {
        const newAnimal = document.createElement('li');
        newAnimal.innerHTML = animal.innerHTML;
        const menu = document.getElementById("spotted-animals-list");
        menu.appendChild(newAnimal);
        console.log(menu);
        console.log(animal.innerHTML);
        
    });
});

// Part 2

const removeFirstItem = document.getElementById('remove-first-item-button');

removeFirstItem.addEventListener('click', () => {
    const parent = document.getElementById('spotted-animals-list');
    const removeFirstItem = parent.getElementsByTagName('li')[0];
    parent.removeChild(removeFirstItem);
    console.log(parent);
});

// Part 3

const removeAllAnimals = document.getElementById('remove-all-button');

removeAllAnimals.addEventListener('click', () => {
    const parent = document.getElementById('spotted-animals-list');
    parent.innerHTML = '';
});

