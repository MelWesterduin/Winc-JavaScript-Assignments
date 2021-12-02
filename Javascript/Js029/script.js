const getPokemon = async () => {
  let processedResponse;
  const random = Math.floor(Math.random() * 100) + 1;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${random}/`;

  try {
    const response = await fetch(apiUrl, { method: 'GET' });
    processedResponse = await response.json();
  } catch (error) {
    console.log(error);
  }

  const item = document.getElementById('random-pokemon');
  item.innerHTML = '';
  const listItem = document.createElement('li');
  const pokemonTypes = processedResponse.types.map((type) => type.type.name);
  listItem.innerHTML = `Name: ${processedResponse.name}` +'<br>'+ ` Length: ${processedResponse.height} inch` +'<br>' + ` Type: ${pokemonTypes}`;
  item.appendChild(listItem);
  if (item.style.display === 'none') {
    item.style.display = 'block';
  };
};

const pokemonBtn = document.getElementById('pokemon');
const clickBtn = pokemonBtn.addEventListener('click', getPokemon);