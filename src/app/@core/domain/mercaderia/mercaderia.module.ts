import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercaderiaEditComponent } from './mercaderia-edit/mercaderia-edit.component';
import { MercaderiaListComponent } from './mercaderia-list/mercaderia-list.component';
import { MercaderiaRoutingModule } from './mercaderia-routing.module';

@NgModule({
  declarations: [MercaderiaEditComponent, MercaderiaListComponent],
  imports: [CommonModule, MercaderiaRoutingModule],
})
export class MercaderiaModule {}
