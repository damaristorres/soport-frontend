import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoService } from '../deposito/deposito.service';
import { EstantesRoutingModule } from './estantes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstantesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [DepositoService],
})
export class EstantesModule {}
