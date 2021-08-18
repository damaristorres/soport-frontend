import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstantesEditComponent } from './estantes-edit/estantes-edit.component';
import { EstantesListComponent } from './estantes-list/estantes-list.component';

const routes: Routes = [
//   { path: '', component: EstantesListComponent },
//   { path: 'nuevo', component: EstantesEditComponent },
//   { path: ':id', component: EstantesEditComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstantesRoutingModule { }
