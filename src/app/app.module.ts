import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DepositoModule } from './@core/domain/deposito/deposito.module';
import { EstantesModule } from './@core/domain/estantes/estantes.module';
import { MercaderiaModule } from './@core/domain/mercaderia/mercaderia.module';
import { SharedModule } from './@core/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DepositoModule,
    EstantesModule,
    MercaderiaModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, ConfirmationService],
})
export class AppModule {}
