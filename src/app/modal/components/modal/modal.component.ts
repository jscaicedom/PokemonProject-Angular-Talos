import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { GeneralInfo, Pokemon } from '../../../model/pokemon.model';
import {
  comparePokemon,
  removeComparedPokemon,
} from '../../../ngrx/actions/pokemons.actions';
import { selectFromStore } from '../../../ngrx/selectors/pokemons.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() name;
  pokemonSubscription: Subscription;
  selectedPokemon: string;
  selectedPokemons: Pokemon;
  descriptions: GeneralInfo;
  isCompared: boolean;
  pokemonToCompare: Pokemon;
  genderToCompare: string;
  favoritePokemons: number[];

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private store: Store<{ state: AppState }>
  ) {}

  ngOnInit(): void {
    this.pokemonSubscription = this.store
      .pipe(select(selectFromStore))
      .subscribe((state) => {
        this.selectedPokemon = state.selectedPokemon;
        this.selectedPokemons = state.selectedPokemons;
        this.descriptions = state.descriptions;
        this.isCompared = state.isCompared;
        this.pokemonToCompare = state.pokemonToCompare;
        this.favoritePokemons = state.favoritePokemons;
      });
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

  compare() {
    if (this.descriptions.gender_rate > 4) {
      this.genderToCompare = 'Female';
    } else if (this.descriptions.gender_rate === -1) {
      this.genderToCompare = 'Genderless';
    } else this.genderToCompare = 'Male';

    this.store.dispatch(
      comparePokemon({
        pokemonToCompare: this.selectedPokemons,
        gender: this.genderToCompare,
      })
    );
  }
  removeCompare() {
    this.store.dispatch(removeComparedPokemon());
  }
}
