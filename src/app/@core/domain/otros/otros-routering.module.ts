import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtrosEditComponent } from './otros-edit/otros-edit.component';
import { OtrosListComponent } from './otros-list/otros-list.component';

const routes: Routes = [
 
      { path: '', component: OtrosListComponent },
      { path: 'form', component: OtrosEditComponent },
      { path: 'form/:id', component: OtrosEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosRoutingModule {}
