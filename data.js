export const showAll = (pokemonInfo) => {
  return pokemonInfo;
};

export const regionPokemon = (pokemones, str) => {
  return pokemones.filter(pokemon=> {
    return pokemon.generation.name==str
  });

}
export const typePokemon = (pokemones, str) => {
  return pokemones.filter(pokemones=> pokemones.type.includes(str));
}

export const namePokemonFilter = (pokemones, resultPokemon) => {
  const filteredPokemon = pokemones.filter(pokemon => pokemon.name.includes(resultPokemon));
  return filteredPokemon;
  }

export const sortData =(pokemones, sortBy, sortOrder) => {
  if(sortOrder == 'za'){
  return pokemones.sort((pokemonActual,pokemonSiguiente) => {
    if (pokemonActual[sortBy] < pokemonSiguiente[sortBy]){
      return 1;
    }
    if (pokemonActual[sortBy] > pokemonSiguiente[sortBy]) {
      return -1;
    }
    return 0;
  })
  }
  else (sortOrder == 'az')
    return pokemones.sort((pokemonActual,pokemonSiguiente) => {
      if (pokemonActual[sortBy] > pokemonSiguiente[sortBy]) {
        return 1;
      }
      if (pokemonActual[sortBy] < pokemonSiguiente[sortBy]) {
        return -1;
      }
      return 0;
    })
  }

  export const compute = (pokemones, str) => {
    let pokemonesRegion = pokemones.filter(pokemones=> pokemones.type.includes(str));
    let operacion = (pokemonesRegion.length*100)/pokemones.length 
    return Math.round(operacion);
    }
  
