import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ComparemodalComponent } from './components/comparemodal/comparemodal.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsHttpService } from './services/pokemons-http.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './ngrx/reducers/pokemons.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './ngrx/effects/pokemons.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    ComparemodalComponent,
    GraphicsComponent,
    HomeComponent,
    PokemonsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    InfiniteScrollModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ state: reducer }),
    EffectsModule.forRoot([PokemonsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [PokemonsHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
