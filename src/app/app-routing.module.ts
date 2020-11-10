import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/principal/components/home/home.component';
import { PokemonsComponent } from './modules/pokemon/components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
