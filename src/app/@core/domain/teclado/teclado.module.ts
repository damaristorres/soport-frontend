import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/@core/shared/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Dialog, DialogModule } from 'primeng/dialog';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TecladoListComponent } from './teclado-list/teclado-list.component';
import { TecladoEditComponent } from './teclado-edit/teclado-edit.component';
import { TecladoService } from './teclado.service';
import { TecladoRoutingModule } from './teclado-routering.module';


@NgModule({
  imports: [
    CommonModule,
    TecladoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    InputNumberModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    TableModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
  ],
  declarations: [
    TecladoListComponent, TecladoEditComponent
  ],
  providers:[
    TecladoService,
    ConfirmationService,
    Dialog,
    MessageService
  ]
})
export class TecladoModule {}
