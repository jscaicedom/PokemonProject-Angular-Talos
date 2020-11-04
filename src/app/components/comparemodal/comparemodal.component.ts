import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-comparemodal',
  templateUrl: './comparemodal.component.html',
  styleUrls: ['./comparemodal.component.css'],
})
export class ComparemodalComponent {
  state$: Observable<AppState>;
  pokemonSubscription: Subscription;
  pokemonToCompare: Pokemon;
  pokemonSelected: Pokemon;

  constructor(private store: Store<{ state: AppState }>) {
    this.state$ = store.pipe(select('state'));
  }

  ngOnInit(): void {
    this.pokemonSubscription = this.state$
      .pipe(
        map((state) => {
          this.pokemonToCompare = state.pokemonToCompare;
          this.pokemonSelected = state.selectedPokemons;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}
