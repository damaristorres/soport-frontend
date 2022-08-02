import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpsEditComponent } from './ups-edit/ups-edit.component';
import { UpsListComponent } from './ups-list/ups-list.component';

const routes: Routes = [
 
      { path: '', component: UpsListComponent },
      { path: 'form', component: UpsEditComponent },
      { path: 'form/:id', component: UpsEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpsRoutingModule {}
