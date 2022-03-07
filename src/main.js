import {regionPokemon, typePokemon, pokemonDescending, pokemonUpward, namePokemonFilter} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";

//console.log(pokemonInfo,showAll(pokemonInfo));

const listaPokemones = pokemonInfo.pokemon

function agregarPokemones(pokemones, contenedor) {
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
  }
}
//HTML
const contenedor = document.getElementById("pokemones");
const divRegiones = document.getElementById("region");
const divKanto = document.getElementById("kanto");
const divJohto = document.getElementById("johto");
const btnRegion = document.getElementById("btnRegion");
const divFire = document.getElementById("typeFire")
const select = document.getElementById("selection")
const divAscendente = document.getElementById("ascendente")

agregarPokemones(listaPokemones, contenedor);

let pokemonKanto = regionPokemon(listaPokemones,"kanto");
let pokemonJohto = regionPokemon(listaPokemones,"johto");
divRegiones.appendChild(divKanto)
divRegiones.appendChild(divJohto)
//agregarPokemones(pokemonJohto, divJohto);
//agregarPokemones(pokemonKanto, divKanto);
//divRegiones.appendChild(divKanto)
//divRegiones.appendChild(divJohto)

function pageRegion() {
  agregarPokemones(pokemonJohto, divJohto);
  agregarPokemones(pokemonKanto, divKanto);
}
function nextPage(){
  contenedor.className = "oculto"
  divRegiones.className = "visible"
}


btnRegion.addEventListener("click", pageRegion)
btnRegion.addEventListener("click", nextPage)


let firePokemon = typePokemon (listaPokemones, "fire")
//console.log (firePokemon)

function addFire(){
  agregarPokemones(firePokemon, divFire)
}

function nextPageFire(){
  contenedor.className="oculto"
  divFire.classname="visible"
}
// select.addEventListener("input", addFire);
// select.addEventListener("input", nextPageFire);
select.addEventListener('change', e => {
  console.log (typePokemon(listaPokemones, e.target.value))
})

//orden alfabetico 

const ordenAscendente = pokemonUpward (listaPokemones)

function addAscendete(){
agregarPokemones (ordenAscendente, divAscendente)
}




//btnRegion.addEventListener("click", agregarPokemones(pokemonJohto, divRegiones))






//mostrarHTML(pokemonKanto);
//mostrarHTML(pokemonJohto)

