import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositoRoutingModule } from './deposito-routing.module';
import { MercaderiaListComponent } from './mercaderia-list/mercaderia-list.component';
import { MercaderiaEditComponent } from './mercaderia-edit/mercaderia-edit.component';


@NgModule({
  declarations: [
    MercaderiaListComponent,
    MercaderiaEditComponent
  ],
  imports: [
    CommonModule,
    DepositoRoutingModule
  ]
})
export class DepositoModule { }
