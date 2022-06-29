import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadoraEditComponent } from './computadora-edit/computadora-edit.component';
import { ComputadoraListComponent } from './computadora-list/computadora-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ComputadoraListComponent },
      { path: 'form', component: ComputadoraEditComponent },
      { path: '/form:id', component: ComputadoraEditComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputadoraRoutingModule {}
