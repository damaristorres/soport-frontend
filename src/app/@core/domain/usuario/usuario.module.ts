import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './usuario.service';
import { NuevoUsuarioComponent } from '../nuevo-usuario/nuevo-usuario.component';
import { UsuarioComponent } from './usuario-list/usuario.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    UsuarioComponent,
    // NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    DialogModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TooltipModule,
    InputTextareaModule,
    InputNumberModule,
    OverlayPanelModule,
    SharedModule
  ],
  providers: [ 
    UsuariosService,
  ]
})
export class UsuarioModule { }
