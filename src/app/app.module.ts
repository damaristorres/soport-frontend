import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MercaderiaModule } from './@core/domain/mercaderia/mercaderia.module';
import { DepositoModule } from './@core/domain/deposito/deposito.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MercaderiaModule,
    DepositoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
