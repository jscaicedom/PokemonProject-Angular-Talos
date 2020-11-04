import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsHttpService {
  constructor(private http: HttpClient) {}

  getPokemons(offset: number): Observable<Object> {
    return this.http.get(environment.apiUrl + offset);
  }

  getSelectedPokemon(name: string): Observable<Object> {
    return this.http.get(environment.selectedUrl + name);
  }

  getDescription(url: string): Observable<Object> {
    return this.http.get(url);
  }
}
