import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromState from '../pokemons.state';
import AppState from '../pokemons.state';

export const selectFeatures = createFeatureSelector<AppState>('state');

export const selectFromStore = createSelector(
  selectFeatures,
  (state: AppState) => state
);
