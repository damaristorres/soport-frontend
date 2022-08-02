import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecladoEditComponent } from './teclado-edit/teclado-edit.component';
import { TecladoListComponent } from './teclado-list/teclado-list.component';

const routes: Routes = [
 
      { path: '', component: TecladoListComponent },
      { path: 'form', component: TecladoEditComponent },
      { path: 'form/:id', component: TecladoEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladoRoutingModule {}
