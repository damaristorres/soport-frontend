import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoService } from '../deposito/deposito.service';
import { EstantesRoutingModule } from './estantes-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, EstantesRoutingModule],
  providers: [DepositoService],
})
export class EstantesModule {}
