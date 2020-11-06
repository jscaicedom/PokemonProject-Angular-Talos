import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HomeComponent],
})
export class PrincipalModule {}
