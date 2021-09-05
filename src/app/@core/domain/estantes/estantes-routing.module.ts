import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstantesEditComponent } from './estantes-edit/estantes-edit.component';
import { EstantesListComponent } from './estantes-list/estantes-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EstantesListComponent },
      { path: 'form', component: EstantesEditComponent },
      { path: 'form/:id', component: EstantesEditComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstantesRoutingModule {}
