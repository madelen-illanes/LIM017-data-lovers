import {
  regionPokemon,
  typePokemon,
  sortData,
  namePokemonFilter,
} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";

//console.log(pokemonInfo,showAll(pokemonInfo));

const listaPokemones = pokemonInfo.pokemon;
let nombre1 = listaPokemones[1]["generation"]["name"];
console.log(nombre1);
function agregarPokemones(pokemones, contenedor) {
  for (let i = 0; i < pokemones.length; i = i + 1) {
    let pokemon = pokemones[i];
    let tagImgPokemon = pokemon.img;
    let namePokemon = pokemon.name;
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon-div";
    let imgPokemon = document.createElement("img");
    imgPokemon.src = tagImgPokemon;
    imgPokemon.className = "pokemon-img";
    let nodoNombre = document.createElement("span");
    nodoNombre.textContent = namePokemon;
    nodoNombre.className = "nombre-item";
    divPokemon.appendChild(imgPokemon);
    divPokemon.appendChild(nodoNombre);
    contenedor.appendChild(divPokemon);
  }
}
//HTML
const logoPokemon = document.getElementById("logoPokemon");
const contenedor = document.getElementById("pokemones");
const select = document.getElementById("selection");
const select1 = document.getElementById("selection1");
const select2 = document.getElementById("selection2");
const inputSearch = document.getElementById("search");

agregarPokemones(listaPokemones, contenedor);

function refresh() {
  contenedor.innerHTML = ""
  agregarPokemones(listaPokemones, contenedor);
}
logoPokemon.addEventListener("click", refresh);

select.addEventListener("change", (e) => {
  const type = typePokemon(listaPokemones, e.target.value);
  contenedor.innerHTML = "";
  agregarPokemones(type, contenedor);
});

select1.addEventListener("change", (e) => {
  let region = regionPokemon(listaPokemones, e.target.value);
  contenedor.innerHTML = "";
  agregarPokemones(region, contenedor);
});

select2.addEventListener("change", (e) => {
  console.log(e.target.value);
  let order = sortData(listaPokemones, "name", e.target.value);
  contenedor.innerHTML = "";
  agregarPokemones(order, contenedor);
});

inputSearch.addEventListener("keyup", (e) => {
  let searchPokemon = namePokemonFilter(listaPokemones, e.target.value);
  contenedor.innerHTML = "";
  agregarPokemones(searchPokemon, contenedor);
});
