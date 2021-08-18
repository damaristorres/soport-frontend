import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstantesEditComponent } from './estantes-edit/estantes-edit.component';
import { EstantesListComponent } from './estantes-list/estantes-list.component';
import { DepositoService } from '../deposito/deposito.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ], 
  providers:[
    DepositoService
  ]
})
export class EstantesModule { }
