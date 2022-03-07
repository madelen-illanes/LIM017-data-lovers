import {tipoPokemon} from "./data.js";
import {namePokemonFilter} from "./data.js";
import {pokemonDescending} from "./data.js";
import {pokemonUpward} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";
//console.log(pokemonInfo,showAll(pokemonInfo));


const pokemones = pokemonInfo.pokemon;
function mostrarHTML(pokemonInfo) {
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


   // button ordenar falta definir
  /*const imputext = document.getElementById("resulPokemon");
  imputext.addEventListener("keyup",() => {
  const pokemones= document.getElementById("pokemones").value;
  const  resultPokemon = document.getElementById("resultPokemon").value;
  const pokemonList= resultPokemon.map(function(pokemones){
  return `<li class="contenedor">
  <img class="tagImgPokemon" src"${"pokemon.img"}>
  </li>`

})

})
imputext.innerHtml= `${pokemonList}`;*/


  // buscar definir
  const buttonorder = document.getElementById("order-btn");
  buttonorder.addEventListener("click",function(){
  const pokemones= document.getElementById('pokemones').value;
  const result=document.getElementById('result');
  const resultOrder=pokemonDescending(pokemones);
  const pokemonlist= resultOrder.map(function(pokemon){
    return `<li class="contenedor">
    <p class ="imgPokemon">${pokemon.img}</p>
    </li>`
  });
  result.innerHtml= `${pokemonList}`;





//display none y block
/*const startbutton = document.getElementById("start-btn");  
startbutton.addEventListener("click",() =>{
document.getElementById("go").style.display = "none";
document.getElementById("logo").style.display = "block";
document.getElementById("pokemones").style.display = "block";
document.getElementById("inputs").style.display = "block";
}
)*/


//PRUEBAS CONSOLE Long
//console.log (tipoPokemon(pokemones,"grass"))
//console.log(namePokemonFilter(pokemones,"onix"))
//console.table(pokemonDescending(pokemones))
//console.table(pokemonUpward(pokemones))