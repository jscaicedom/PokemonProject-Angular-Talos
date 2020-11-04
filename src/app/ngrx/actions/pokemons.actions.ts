import { createAction, props } from '@ngrx/store';
import { Pokemon, GeneralInfo } from '../../model/pokemon.model';

export const fetchPokemons = createAction(
  '[Pokemons] Load Pokemons',
  props<{ offset: number }>()
);

export const fetchPokemonsSuccess = createAction(
  '[Pokemons] Load Pokemons Success',

  props<{ allPokemons: Pokemon[]; offset: number }>()
);

export const searchPokemon = createAction(
  '[Search] Search Pokemons',
  props<{ text: string }>()
);

export const showSearch = createAction(
  '[Search] Search Pokemons Show',
  props<{ searchedPokemons: Pokemon[] }>()
);

export const fetchSelectedPokemon = createAction(
  '[Select] fetch Pokemon',
  props<{ name: string }>()
);

export const fetchDescription = createAction(
  '[Select] fetch Description',
  props<{ general: Pokemon; url: string; name: string }>()
);

export const selectedSuccess = createAction(
  '[Select] Select Pokemon',
  props<{ general: Pokemon; description: GeneralInfo; name: string }>()
);

export const comparePokemon = createAction(
  '[Compare] Compare Pokemon',
  props<{ pokemonToCompare: Pokemon }>()
);

export const removeComparedPokemon = createAction(
  '[Compare] Remove Compared Pokemon'
);

export const removeFavorite = createAction(
  '[favorite] remove favorite',
  props<{ index: number }>()
);

export const addFavorite = createAction(
  '[favorite] add favorite',
  props<{ index: number }>()
);
