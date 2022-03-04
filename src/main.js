import {regionPokemon} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";

//console.log(pokemonInfo,showAll(pokemonInfo));
const pokemones = pokemonInfo.pokemon;
function mostrarHTML(pokemones) {
  let contenedor = document.getElementById("pokemones");
  for (let i = 0; i < pokemones.length; i = i + 1) {
    let pokemon = pokemones[i];
    let tagImgPokemon = pokemon.img;
    let namePokemon = pokemon.name;
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon-div";
    let imgPokemon = document.createElement("img");
    imgPokemon.src = tagImgPokemon;
    imgPokemon.className= "pokemon-img"
    let nodoNombre = document.createElement("spam")
    nodoNombre.textContent = namePokemon
    nodoNombre.className = "nombre-item"
    divPokemon.appendChild(imgPokemon);
    divPokemon.appendChild(nodoNombre);
    contenedor.appendChild(divPokemon);
    //contenedor.appendChild(nodoNombre);
    //contenedor.appendChild imgPokemon);
  }
}
let pokemonKanto = regionPokemon(pokemones,"kanto");


let pokemonJohto=regionPokemon(pokemones,"johto")

//mostrarHTML(pokemonKanto);
mostrarHTML(pokemonJohto)

