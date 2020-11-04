import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import AppState from 'src/app/ngrx/pokemons.state';
import { Store, select } from '@ngrx/store';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  state$: Observable<AppState>;
  pokemonSubscription: Subscription;
  favoritePokemons: number[];
  imgUrl: string = environment.imageUrl;

  constructor(private store: Store<{ state: AppState }>) {}

  ngOnInit(): void {
    this.pokemonSubscription = this.store
      .pipe(select('state'))
      .subscribe((state) => {
        this.favoritePokemons = state.favoritePokemons.map((favorite) => {
          return favorite + 1;
        });
      });
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}
