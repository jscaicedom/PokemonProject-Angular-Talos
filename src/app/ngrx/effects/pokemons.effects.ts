import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PokemonsHttpService } from 'src/app/services/pokemons-http.service';
import * as PokemonsActions from '../../ngrx/actions/pokemons.actions';
import { Pokemon, GeneralInfo } from '../../model/pokemon.model';

@Injectable()
export class PokemonsEffects {
  fethcPokemons$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonsActions.fetchPokemons),
      mergeMap((action) =>
        this.httpService.getPokemons(action.offset).pipe(
          map((data) => {
            return PokemonsActions.fetchPokemonsSuccess({
              allPokemons: data['results'],
              offset: action.offset,
              hola: data,
            });
          })
        )
      )
    )
  );

  fethcSelectedPokemons$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonsActions.fetchSelectedPokemon),
      mergeMap((action) =>
        this.httpService.getSelectedPokemon(action.name).pipe(
          map((data: Pokemon) => {
            return PokemonsActions.fetchDescription({
              general: {
                id: data.id,
                name: data.name,
                sprites: {
                  front_default: data.sprites.front_default,
                },
                height: data.height,
                weight: data.weight,
                types: data.types,
                abilities: data.abilities,
                stats: data.stats,
              },
              url: data['species'].url,
              name: action.name,
            });
          })
        )
      )
    )
  );

  selectedSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonsActions.fetchDescription),
      mergeMap((action) =>
        this.httpService.getDescription(action.url).pipe(
          map((data: GeneralInfo) => {
            return PokemonsActions.selectedSuccess({
              general: action.general,
              description: {
                flavor_text_entries: data.flavor_text_entries,
                gender_rate: data.gender_rate,
              },
              name: action.name,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private httpService: PokemonsHttpService
  ) {}
}
