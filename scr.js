const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonInfo = document.getElementById('pokemon-info');

function loadPokemonData() {
  fetch('https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 898) + 1))
    .then(response => response.json())
    .then(data => {
      pokemonImage.src = data.sprites.front_default;
      pokemonName.textContent = data.name;
      pokemonInfo.textContent = data.abilities.map(ability => ability.ability.name).join(', ') + '.'
    });
}

loadPokemonData();


card.addEventListener('touchstart', loadPokemonData);

document.querySelector('.card').addEventListener('click', function() {
  if (!this.classList.contains('rotate')) {
    loadPokemonData();
  }
});