import { Pokemon } from "./class.js";

const meowth = new Pokemon("Meowth",['scratch','sarcasm'],null,'./image/meowht.webp')
const slowpoke = new Pokemon("Slowpoke",['psycho','slowly'],101,'./image/slowpoke.jpeg')
console.log(meowth,slowpoke)

const cardlist = document.querySelector('.card-list')

const fillPokemonCard = (pokemon) => {
const card = document.querySelector('.card')
const cloneCard = card.cloneNode(true)
const title = cloneCard.querySelector('h3');
const image = cloneCard.querySelector('img');
const propertiesText = cloneCard.querySelector('.properties p')
const description = cloneCard.querySelector(".description")
title.innerText = pokemon.name;
image.src = pokemon.image;
propertiesText.innerText = `Experience ${pokemon.experience}`;

description.innerHTML = `
<h4> Abilities: </h4>
<ul>
${pokemon.abilities.map((el) => `<li> ${el} </li>`).join('')}
</ul>
`
cardlist.append(cloneCard)
};

[meowth, slowpoke].forEach(fillPokemonCard);