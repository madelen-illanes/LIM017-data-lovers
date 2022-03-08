export const regionPokemon = (pokemones, str) => {
  return pokemones.filter(pokemones=> pokemones.generation.name==str);
}
export const typePokemon = (pokemones, str) => {
  return pokemones.filter(pokemones=> pokemones.type==str);
}

export const pokemonDescending = (pokemones) => {
  return pokemones.sort((a,b) => {
    if (a['name'] < b['name']) {
      return 1;
    }
    if (a['name'] > b['name']) {
      return -1;
    }
    return 0;
  })
}
 
export const pokemonUpward = (pokemones) => {
  return pokemones.sort((a,b) => {
    if (a['name'] > b['name']) {
      return 1;
    }
    if (a['name'] < b['name']) {
      return -1;
    }
    return 0;
  })
}

export const namePokemonFilter = (pokemones, resultPokemon) => {
  const filteredPokemon = pokemones.filter(pokemones => pokemones.name===resultPokemon);
  return filteredPokemon;
  }

