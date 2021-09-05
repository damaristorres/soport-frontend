import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@NgModule({
  exports: [PrimeNgModule],
  declarations: [
    MenuBarComponent
  ],
})
export class SharedModule {}
