import { Action, createReducer, on } from '@ngrx/store';

import * as PokemonsActions from '../actions/pokemons.actions';
import AppState, { initializeState } from '../pokemons.state';

export const initialState = initializeState();

const pokemonsReducer = createReducer(
  initialState,
  on(PokemonsActions.fetchPokemonsSuccess, (state: AppState, action) => {
    return {
      ...state,
      totalPokemons: state.totalPokemons.concat(
        action.allPokemons.map((pokemon, fetchIndex) => {
          const index = fetchIndex + state.totalPokemons.length + 1;
          let isFavorite = false;
          return { ...pokemon, index, isFavorite };
        })
      ),
      searchedPokemons: state.totalPokemons.concat(
        action.allPokemons.map((pokemon, fetchIndex) => {
          const index = fetchIndex + state.totalPokemons.length + 1;
          let isFavorite = false;
          return { ...pokemon, index, isFavorite };
        })
      ),
      offset: state.offset + 20,
    };
  }),
  on(PokemonsActions.searchPokemon, (state: AppState, action) => {
    return {
      ...state,
      searchedPokemons: state.totalPokemons.filter((pokemon) => {
        if (pokemon.name.startsWith(action.text)) return pokemon;
      }),
    };
  }),
  on(PokemonsActions.selectedSuccess, (state: AppState, action) => {
    return {
      ...state,
      selectedPokemon: action.name,
      selectedPokemons: action.general,
      descriptions: action.description,
    };
  }),
  on(PokemonsActions.comparePokemon, (state: AppState, action) => {
    return {
      ...state,
      pokemonToCompare: action.pokemonToCompare,
      isCompared: true,
    };
  }),
  on(PokemonsActions.removeComparedPokemon, (state: AppState) => {
    return {
      ...state,
      isCompared: false,
    };
  }),
  on(PokemonsActions.removeFavorite, (state: AppState, action) => {
    return {
      ...state,
      favoritePokemons: state.favoritePokemons.filter((index) => {
        return index != action.index;
      }),
    };
  }),
  on(PokemonsActions.addFavorite, (state: AppState, action) => {
    return {
      ...state,
      favoritePokemons: state.favoritePokemons.concat(action.index),
    };
  })
);

export function reducer(state: AppState | undefined, action: Action) {
  return pokemonsReducer(state, action);
}
