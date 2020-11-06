import { Pokemon, GeneralInfo } from '../model/pokemon.model';

export default class AppState {
  totalPokemons: Pokemon[];
  offset: number;
  searchedPokemons: Pokemon[];
  favoritePokemons: number[];
  selectedPokemon: string;
  selectedPokemons: Pokemon;
  descriptions: GeneralInfo;
  isCompared: boolean;
  pokemonToCompare: Pokemon;
  genderToCompare: string;
  hola: any;
}

export const initializeState = (): AppState => {
  return {
    totalPokemons: [],
    offset: 0,
    searchedPokemons: [],
    favoritePokemons: [0, 1, 2],
    selectedPokemon: '',
    selectedPokemons: {
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      height: 0,
      weight: 0,
      types: [],
      abilities: [],
      stats: [],
    },
    descriptions: {
      flavor_text_entries: [],
      gender_rate: -1,
    },
    isCompared: false,
    pokemonToCompare: {
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      height: 0,
      weight: 0,
      types: [],
      abilities: [],
      stats: [],
    },
    genderToCompare: 'Genderless',
    hola: 0,
  };
};
