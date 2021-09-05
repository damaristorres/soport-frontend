import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoEditComponent } from './deposito-edit/deposito-edit.component';
import { DepositoListComponent } from './deposito-list/deposito-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DepositoListComponent },
      { path: 'form', component: DepositoEditComponent },
      { path: 'form/:id', component: DepositoEditComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositoRoutingModule {}
