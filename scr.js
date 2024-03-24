const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonInfo = document.getElementById('pokemon-info');

let tg = window.Telegram.WebApp;

tg.expand();

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

var card = document.querySelector('.card')


card.addEventListener('animationend', function() {
  if (!this.classList.contains('rotate')) {
    setTimeout(() => {
      loadPokemonData();
    }, 500);
  }
});
