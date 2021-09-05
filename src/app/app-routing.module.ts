import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'depositos',
    loadChildren: async () =>
      (await import('./@core/domain/deposito/deposito.module')).DepositoModule,
  },
  {
    path: 'estantes',
    loadChildren: async () =>
      (await import('./@core/domain/estantes/estantes.module')).EstantesModule,
  },
  {
    path: 'mercaderias',
    loadChildren: async () =>
      (await import('./@core/domain/mercaderia/mercaderia.module'))
        .MercaderiaModule,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
