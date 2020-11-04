import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Store, select } from '@ngrx/store';
import {
  fetchPokemons,
  fetchSelectedPokemon,
  addFavorite,
  removeFavorite,
} from '../../ngrx/actions/pokemons.actions';
import AppState from 'src/app/ngrx/pokemons.state';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[];
  state$: Observable<AppState>;
  pokemonSubscription: Subscription;
  isCompared: boolean;
  pokemonToCompare: Pokemon;
  offset: number;
  favoritePokemons: number[];
  imgUrl: string = environment.imageUrl;

  constructor(
    private modalService: NgbModal,
    private store: Store<{ state: AppState }>
  ) {}

  ngOnInit(): void {
    this.pokemonSubscription = this.store
      .pipe(select('state'))
      .subscribe((state) => {
        if (state.offset === 0) {
          this.store.dispatch(fetchPokemons({ offset: 0 }));
        }
        this.pokemons = state.searchedPokemons;
        this.isCompared = state.isCompared;
        this.pokemonToCompare = state.pokemonToCompare;
        this.offset = state.offset;
        this.favoritePokemons = state.favoritePokemons;
      });
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

  open(name: string) {
    this.store.dispatch(fetchSelectedPokemon({ name }));
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = name;
  }

  onScroll() {
    this.store.dispatch(fetchPokemons({ offset: this.offset }));
  }

  favorite(index: number) {
    this.favoritePokemons.includes(index)
      ? this.store.dispatch(removeFavorite({ index }))
      : this.favoritePokemons.length === 5
      ? window.alert('You just can select 5 favorite Pokemons')
      : this.store.dispatch(addFavorite({ index }));
  }
}
