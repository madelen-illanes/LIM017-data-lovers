/* eslint-disable no-undef */
import {regionPokemon, typePokemon, sortData, namePokemonFilter, compute} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";


const listaPokemones = pokemonInfo.pokemon;
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

const logoPokemon = document.getElementById("logoPokemon");
const contenedor = document.getElementById("pokemones");
const select = document.getElementById("selection");
const select1 = document.getElementById("selection1");
const select2 = document.getElementById("selection2");
const inputSearch = document.getElementById("search");
const botonPorcentaje = document.getElementById("porcentaje");
const divPorcentaje = document.getElementById("chart_div");

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
  let order = sortData(listaPokemones, "name", e.target.value);
  contenedor.innerHTML = "";
  agregarPokemones(order, contenedor);
});

inputSearch.addEventListener("keyup", (e) => {
  let searchPokemon = namePokemonFilter(listaPokemones, e.target.value);
  contenedor.innerHTML = "";
  agregarPokemones(searchPokemon, contenedor);
});

botonPorcentaje.addEventListener("click", porcentaje);
function porcentaje(){
  contenedor.innerHTML = "";
  drawChart()
  contenedor.appendChild(divPorcentaje)
}

let listaTipos = new Set();
for (let i = 0; i < listaPokemones.length; i = i + 1) {
  let pokemonType = listaPokemones[i].type;
  for (let j = 0; j < pokemonType.length; j = j + 1) {
    let tipo = pokemonType[j];
    listaTipos.add(tipo);
  }
}

google.charts.load("current", { packages: ["corechart"] });

function drawChart() {
  
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Tipo");
  data.addColumn("number", "Pocentaje");
  listaTipos.forEach(tipo => data.addRow([tipo, compute(listaPokemones, tipo)]))
  var options = {
    title: "Porcentaje de Pokemones por tipo",
    width: 500,
    height: 400,
    chartArea: {
      width: 600
    }
  };

  var chart = new google.visualization.PieChart(divPorcentaje);
  chart.draw(data, options);
}