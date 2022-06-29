import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercaderiaEditComponent } from './mercaderia-edit/mercaderia-edit.component';
import { MercaderiaListComponent } from './mercaderia-list/mercaderia-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     { path: '', component: MercaderiaListComponent },
  //     { path: 'form', component: MercaderiaEditComponent },
  //     { path: 'form/:id', component: MercaderiaEditComponent },
  //   ],
  // },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercaderiaRoutingModule {}
