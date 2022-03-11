import { namePokemonFilter, typePokemon } from '../src/data.js';
//import {pokemonInfo} from '../src/data/pokemon/pokemon.js';

const pokemonInfo =  [{
 
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
 
},
{
 
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
 

  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ],
  
},
{

  "name": "ampharos",
  "generation": {
    "num": "generation ii",
    "name": "johto"
  },
 
  "pokemon-rarity": "normal",
  "type": [
    "electric"
  ]
}]

describe('namePokemonFilter', () => {
  it('filters pokemon for name', () => {
    const listaPokemones = [{
      "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]

  
}]
    expect(namePokemonFilter(pokemonInfo,"bulbasaur")).toEqual(listaPokemones);
  
  });

});




describe('typePokemon', () => {
  it('filters pokemon for type', () => {
    const listaPokemones =[{
 
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ],
     
    },
  
    {
    
      "name": "ampharos",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
     
      "pokemon-rarity": "normal",
      "type": [
        "electric"
      ]
    }]
    
    expect(typePokemon(pokemonInfo,"grass")).toEqual(listaPokemones);
  
  });

});


/*describe('regionPokemon', () => {
  it('filters pokemon for region', () => {

  
    expect(regionPokemon(pokemonInfo)).toBe('region');
  });

});

describe('typePokemon', () => {
  it('filter type pokemon', () => {

  
    expect(typePokemon(pokemonInfo)).toBe('type');
  });

});

describe('sortData', () => {
  it('order data', () => {

  
    expect(sortData(pokemonInfo)).toBe('az');
  });

});



/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
