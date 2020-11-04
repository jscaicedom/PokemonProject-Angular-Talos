import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  state$: Observable<AppState>;
  pokemonSubscription: Subscription;
  favoritePokemons: number[];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private store: Store<{ state: AppState }>) {
    this.state$ = store.pipe(select('state'));
  }

  ngOnInit(): void {
    this.pokemonSubscription = this.state$
      .pipe(
        map((state) => {
          this.favoritePokemons = state.favoritePokemons;
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
