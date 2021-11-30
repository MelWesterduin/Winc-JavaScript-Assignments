const listOfCountries = () => {
    const persons = randomPersonData;
    const items = document.getElementById('country-list');
    persons.map((person) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${person.region}`;
        items.appendChild(listItem);
    });
};

const countriesBtn = document.getElementById('country-list-button');
countriesBtn.addEventListener('click', listOfCountries);


const listOfCapricorns = () => {
    const persons = randomPersonData;
    const capricorns = document.getElementById('capricorn-women');
    persons.map((person) => {
        if (person.gender === 'female' && person.age >= 30){
        const listItem = document.createElement('li');
        listItem.innerHTML = `${person.name}`+ ` ${person.surname}` + ` ${person.photo}`;
        capricorns.appendChild(listItem);
        };
    });
};

const capricornBtn = document.getElementById('capricorn');
capricornBtn.addEventListener('click', listOfCapricorns);


