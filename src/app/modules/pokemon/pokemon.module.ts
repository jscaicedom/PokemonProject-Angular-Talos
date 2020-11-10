import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AppRoutingModule } from '../../app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [PokemonsComponent],
  imports: [CommonModule, AppRoutingModule, InfiniteScrollModule, ModalModule],
  exports: [PokemonsComponent],
})
export class PokemonModule {}
