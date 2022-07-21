import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './@core/domain/setting/change-password/change-password.component';
import { DashboardComponent } from './@core/domain/dashboard/dashboard.component';
import { AuthGuard } from './@core/domain/guards/auth.guard';
import { LoginComponent } from './@core/domain/login/login.component';
import { RegisterComponent } from './@core/domain/register/register.component';
import { AppModule } from './app.module';
import { SettingComponent } from './@core/domain/setting/setting.component';
import { UsuarioComponent } from './@core/domain/usuario/usuario-list/usuario.component';
import { ComputadoraListComponent } from './@core/domain/computadora/computadora-list/computadora-list.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},

  { path: '', component: ComputadoraListComponent, canActivate:[AuthGuard]},
  { path: 'setting', component: SettingComponent, canActivate:[AuthGuard]},
  { path: 'usuarios', component: UsuarioComponent, canActivate:[AuthGuard]},

   { path: 'depositos', loadChildren: async () =>
       (await import('./@core/domain/deposito/deposito.module')).DepositoModule, canActivate:[AuthGuard],
   },

  { path: 'estantes',  loadChildren: async () =>
      (await import('./@core/domain/estantes/estantes.module')).EstantesModule, canActivate:[AuthGuard],
  },

  { path: 'mercaderias', loadChildren: async () =>
      (await import('./@core/domain/mercaderia/mercaderia.module')).MercaderiaModule, canActivate:[AuthGuard],
  },

  { path: 'computadora', loadChildren: async () =>
      (await import('./@core/domain/computadora/computadora.module')).ComputadoraModule, canActivate:[AuthGuard],
  },
  { path: 'colaborador', loadChildren: async () =>
      (await import('./@core/domain/colaborador/colaborador.module')).ColaboradorModule, canActivate:[AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
