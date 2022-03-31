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

const poke = new Pokemon(name, abilitiesName,experience, image)
return poke;
})



const cardlistAdd = document.querySelector('.card-list')

const addRandomCard = (pokemonList) => {
    const cardAdd = document.querySelector('.card')
    const cloneCardAdd = cardAdd.cloneNode(true)
    const title = cloneCardAdd.querySelector('h3');
    const image = cloneCardAdd.querySelector('img');
    const propertiesText = cloneCardAdd.querySelector('.properties p')
    const description = cloneCardAdd.querySelector(".description")
    title.innerText = pokemonList.name;
    image.src = pokemonList.image;
    propertiesText.innerText = `Experience ${pokemonList.experience}`;
    
    description.innerHTML = `
    <h4> Abilities: </h4>
    <ul>
    ${pokemonList.abilities.map((el) => `<li> ${el} </li>`).join('')}
    </ul>
    `
    cardlistAdd.append(cloneCardAdd)
    };

btn.addEventListener('click',(event)=>{
    const random = pokemonsList[Math.floor(Math.random() * pokemonsList.length)]
    addRandomCard(random)
         })


  