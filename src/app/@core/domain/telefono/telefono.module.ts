import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonoListComponent } from './telefono-list/telefono-list.component';
import { TelefonoEditComponent } from './telefono-edit/telefono-edit.component';
import { ComputadoraService } from '../computadora/computadora.service';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { Dialog, DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { TelefonoRoutingModule } from './telefono-routering.module';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
   imports: [
    CommonModule,
    TelefonoRoutingModule,
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
    ToolbarModule
  ],
  declarations: [
    TelefonoListComponent, TelefonoEditComponent
  ],
  providers:[
    ComputadoraService,
    ConfirmationService,
    Dialog,
    MessageService
  ]
})
export class TelefonoModule { }
