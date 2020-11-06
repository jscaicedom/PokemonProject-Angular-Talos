import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsHttpService {
  constructor(private http: HttpClient) {}

  getPokemons(offset: number) {
    return this.http.get(environment.apiUrl + offset);
  }

  getSelectedPokemon(name: string) {
    return this.http.get(environment.selectedUrl + name);
  }

  getDescription(url: string) {
    return this.http.get(url);
  }
}
