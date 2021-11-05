import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TableSkeletonComponent } from './components/table-skeleton/table-skeleton.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [PrimeNgModule, CommonModule, TooltipModule],
  exports: [PrimeNgModule, MenuBarComponent, TableSkeletonComponent],
  declarations: [MenuBarComponent, TableSkeletonComponent],
})
export class SharedModule {}
