//import { showAll, example, anotherExample } from "./data.js";
// import data from './data/lol/lol.js';
import {tipoPokemon} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(pokemonInfo,showAll(pokemonInfo));


    const pokemones = pokemonInfo.pokemon;
    function mostrarHTML(pokemonInfo) {
    let pokemones = pokemonInfo.pokemon;
    let contenedor = document.getElementById("pokemones")
    let contenedor = document.getElementById("pokemones");
    for (let i = 0; i < pokemones.length; i = i + 1) {
    let pokemon = pokemones[i];
    let imgPokemon = pokemon.img;
    let nodo = document.createElement("img")
    nodo.src=imgPokemon
    contenedor.appendChild(nodo);

    let tagImgPokemon = pokemon.img;
    let namePokemon = pokemon.name;
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon-div";
    let imgPokemon = document.createElement("img");
    imgPokemon.src = tagImgPokemon;
    imgPokemon.className= "pokemon-img"
    let nodoNombre = document.createElement("spam")
    //nodoNombre.textContent = namePokemon
    nodoNombre.className = "nombre-item"
    divPokemon.appendChild(imgPokemon);
    //divPokemon.appendChild(nodoNombre);
    contenedor.appendChild(divPokemon);
    //contenedor.appendChild(nodoNombre);
    //contenedor.appendChild imgPokemon);
  }
}


mostrarHTML(pokemonInfo);



console.log(tipoPokemon(pokemones,"grass"))