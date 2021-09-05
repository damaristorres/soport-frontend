import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MercaderiaModule } from './@core/domain/mercaderia/mercaderia.module';
import { DepositoModule } from './@core/domain/deposito/deposito.module';
import { EstantesModule } from './@core/domain/estantes/estantes.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeNgModule } from './@core/shared/prime-ng/prime-ng.module';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MercaderiaModule,
    DepositoModule,
    EstantesModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    MenubarModule,
    CardModule,
  ],
  bootstrap: [AppComponent],
  providers: [MessageService, ConfirmationService],
})
export class AppModule {}
