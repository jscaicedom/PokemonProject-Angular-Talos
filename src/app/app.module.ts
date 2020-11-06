import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsHttpService } from './services/pokemons-http.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './ngrx/reducers/pokemons.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './ngrx/effects/pokemons.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalModule } from './principal/principal.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { ModalModule } from './modal/modal.module';
import { HeaderComponent } from './principal/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ state: reducer }),
    EffectsModule.forRoot([PokemonsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    PrincipalModule,
    ModalModule,
    PokemonModule,
  ],
  providers: [PokemonsHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
