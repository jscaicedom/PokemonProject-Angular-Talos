import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchPokemon } from '../../ngrx/actions/pokemons.actions';
import AppState from 'src/app/ngrx/pokemons.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private store: Store<{ state: AppState }>) {}

  change(text: string) {
    console.log(text);
    this.store.dispatch(searchPokemon({ text }));
  }
}
