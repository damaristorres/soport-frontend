import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoService } from '../deposito/deposito.service';
import { EstantesRoutingModule } from './estantes-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, EstantesRoutingModule, SharedModule],
  providers: [DepositoService],
})
export class EstantesModule {}
