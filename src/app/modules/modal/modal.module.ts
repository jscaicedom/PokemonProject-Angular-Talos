import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { ComparemodalComponent } from './components/comparemodal/comparemodal.component';
import { AppRoutingModule } from '../../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [ModalComponent, ComparemodalComponent, GraphicsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [ModalComponent, ComparemodalComponent, GraphicsComponent],
})
export class ModalModule {}
