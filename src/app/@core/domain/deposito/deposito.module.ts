import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositoRoutingModule } from './deposito-routing.module';
import { DepositoListComponent } from './deposito-list/deposito-list.component';
import { DepositoEditComponent } from './deposito-edit/deposito-edit.component';
import { PrimeNgModule } from 'src/app/@core/shared/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DepositoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [DepositoListComponent, DepositoEditComponent],
})
export class DepositoModule {}
