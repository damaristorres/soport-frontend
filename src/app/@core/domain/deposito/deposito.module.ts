import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositoRoutingModule } from './deposito-routing.module';
import { DepositoListComponent } from './deposito-list/deposito-list.component';
import { DepositoEditComponent } from './deposito-edit/deposito-edit.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { StatusPipe } from 'src/app/shared/pipes/status.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DepositoRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
  declarations: [DepositoListComponent, DepositoEditComponent, StatusPipe],
})
export class DepositoModule {}
