import { Pokemon } from "./class.js";
import mockedPokemons from "./mockedPokemons.js";
const btn = document.querySelector('button');

const pokemonsList = mockedPokemons.map((pokemon)=>{ 
const {name,abilities, base_experience: experience, sprites: {front_default : image} } = pokemon

const abilitiesName = abilities.map((el)=> {
    const {
        ability: {name},
    } = el;
    return name
})

return new Pokemon(name, abilitiesName,experience, image)
})


btn.addEventListener('click',(event)=>{
const cardlist = document.querySelector('.card-list')
cardlist.append(pokemonsList)
})