import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MercaderiaModule } from './@core/domain/mercaderia/mercaderia.module';
import { DepositoModule } from './@core/domain/deposito/deposito.module';
import { EstantesModule } from './@core/domain/estantes/estantes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MercaderiaModule,
    DepositoModule,
    EstantesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
