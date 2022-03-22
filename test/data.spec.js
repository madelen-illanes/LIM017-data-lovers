//import { example, anotherExample } from '../src/data.js';


import { namePokemonFilter, typePokemon, regionPokemon, sortData, compute} from '../src/data.js';
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
    }]
expect(typePokemon(pokemonInfo,"grass")).toEqual(listaPokemones);
});
})

describe('regionPokemon', () => {
  it('filters pokemon for region', () => {
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
    }]
expect(regionPokemon(pokemonInfo,"kanto")).toEqual(listaPokemones);
});
})

describe('sortData', () => {
  it('filters pokemon for alphabet', () => {
    const listaPokemones = [
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
      },
      {
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
    }]
expect(sortData(pokemonInfo, "name", "az")).toEqual(listaPokemones);
});
})

describe('compute', () => {
  it('porcentage pokemon by region', () => {
expect(compute(pokemonInfo, "grass")).toEqual(67);
});
})
