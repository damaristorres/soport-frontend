import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefonoEditComponent } from './telefono-edit/telefono-edit.component';
import { TelefonoListComponent } from './telefono-list/telefono-list.component';

const routes: Routes = [
 
      { path: '', component: TelefonoListComponent },
      { path: 'form', component: TelefonoEditComponent },
      { path: 'form/:id', component: TelefonoEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonoRoutingModule {}
