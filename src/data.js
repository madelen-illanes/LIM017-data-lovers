export const showAll = (pokemonInfo) => {
  return pokemonInfo;
};

    // TIPOS DE POKEMONES
  export const tipoPokemon = (pokemones, str) => {
  return pokemones.filter(pokemones => pokemones.type == str)}

  //para buscar el pokemon en el imput text
  export const namePokemonFilter = (pokemones, resultPokemon) => {
  const filteredPokemon = pokemones.filter(pokemones => pokemones.name ===resultPokemon);
  return filteredPokemon;
  }

  // ORDEN POKEMONES
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