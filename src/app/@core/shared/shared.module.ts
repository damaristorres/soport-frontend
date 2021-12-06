import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableSkeletonComponent } from './components/table-skeleton/table-skeleton.component';
import { TooltipModule } from 'primeng/tooltip';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  imports: [
    PrimeNgModule, 
    CommonModule, 
    TooltipModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  exports: [PrimeNgModule, MenuBarComponent, TableSkeletonComponent],
  declarations: [MenuBarComponent, TableSkeletonComponent, BusquedaComponent],
})
export class SharedModule {}
