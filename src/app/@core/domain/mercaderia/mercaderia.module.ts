import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercaderiaEditComponent } from './mercaderia-edit/mercaderia-edit.component';
import { MercaderiaListComponent } from './mercaderia-list/mercaderia-list.component';



@NgModule({
  declarations: [
    MercaderiaEditComponent,
    MercaderiaListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MercaderiaModule { }
