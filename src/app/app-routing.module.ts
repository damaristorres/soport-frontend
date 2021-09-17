import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercaderiaListComponent } from './@core/domain/mercaderia/mercaderia-list/mercaderia-list.component';

const routes: Routes = [
  {path:'mercadoria', component: MercaderiaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
