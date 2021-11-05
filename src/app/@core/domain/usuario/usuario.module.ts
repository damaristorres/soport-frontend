import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioService } from './usuario.service';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioEditComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ 
    UsuarioService,
  ]
})
export class UsuarioModule { }
