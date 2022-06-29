import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/@core/shared/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ComputadoraRoutingModule } from './computadora-routering.module';
import { ComputadoraEditComponent } from './computadora-edit/computadora-edit.component';
import { ComputadoraListComponent } from './computadora-list/computadora-list.component';

@NgModule({
  imports: [
    CommonModule,
    ComputadoraRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [ComputadoraListComponent, ComputadoraEditComponent],
})
export class ComputadoraModule {}
