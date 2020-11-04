import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GeneralInfo, Pokemon } from '../../model/pokemon.model';
import { comparePokemon, removeComparedPokemon } from '../../ngrx/actions/pokemons.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() name;
  state$: Observable<AppState>;
  pokemonSubscription: Subscription;
  selectedPokemon: string;
  selectedPokemons: Pokemon;
  descriptions: GeneralInfo;
  isCompared: boolean;
  pokemonToCompare: Pokemon;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private store: Store<{ state: AppState }>
  ) {
    this.state$ = store.pipe(select('state'));
  }

  ngOnInit(): void {
    this.pokemonSubscription = this.state$
      .pipe(
        map((state) => {
          this.selectedPokemon = state.selectedPokemon;
          this.selectedPokemons = state.selectedPokemons;
          this.descriptions = state.descriptions;
          this.isCompared = state.isCompared;
          this.pokemonToCompare = state.pokemonToCompare;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

  compare() {
    this.store.dispatch(
      comparePokemon({ pokemonToCompare: this.selectedPokemons })
    );
  }
removeCompare() {
    this.store.dispatch(
      removeComparedPokemon()
    );
  }

}
