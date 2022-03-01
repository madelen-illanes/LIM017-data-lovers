//import { showAll, example, anotherExample } from "./data.js";
// import data from './data/lol/lol.js';
import pokemonInfo from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(pokemonInfo,showAll(pokemonInfo));


function mostrarHTML(pokemonInfo) {
  let pokemones = pokemonInfo.pokemon;
let contenedor = document.getElementById("pokemones")
  for (let i = 0; i < pokemones.length; i = i + 1) {
    let pokemon = pokemones[i];
    let imgPokemon = pokemon.img;
    let nodo = document.createElement("img")
    nodo.src=imgPokemon
    contenedor.appendChild(nodo);

  }
}


mostrarHTML(pokemonInfo);



