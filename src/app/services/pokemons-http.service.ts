import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemon, GeneralInfo, ApiType } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsHttpService {
  constructor(private http: HttpClient) {}

  getPokemons(offset: number): Observable<ApiType> {
    return this.http.get<ApiType>(environment.apiUrl + offset);
  }

  getSelectedPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.selectedUrl + name);
  }

  getDescription(url: string): Observable<GeneralInfo> {
    return this.http.get<GeneralInfo>(url);
  }
}
