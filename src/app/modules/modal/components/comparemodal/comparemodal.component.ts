import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { Pokemon, GeneralInfo } from '../../../../model/pokemon.model';
import { selectFromStore } from '../../../../ngrx/selectors/pokemons.selectors';

@Component({
  selector: 'app-comparemodal',
  templateUrl: './comparemodal.component.html',
  styleUrls: ['./comparemodal.component.css'],
})
export class ComparemodalComponent {
  pokemonSubscription: Subscription;
  pokemonToCompare: Pokemon;
  pokemonSelected: Pokemon;
  selectedDescription: GeneralInfo;
  genderToCompare: string;

  constructor(private store: Store<{ state: AppState }>) {}

  ngOnInit(): void {
    this.pokemonSubscription = this.store
      .pipe(select(selectFromStore))
      .subscribe((state) => {
        this.pokemonToCompare = state.pokemonToCompare;
        this.pokemonSelected = state.selectedPokemons;
        this.selectedDescription = state.descriptions;
        this.genderToCompare = state.genderToCompare;
      });
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}
