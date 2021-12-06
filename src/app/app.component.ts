import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './@core/shared/services/auth.service';
import { SettingComponent } from './@core/domain/setting/setting.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(ConfiguracionesComponent) conf!: SettingComponent;
  displayConfiguraciones:boolean = false;

  constructor(private ngConfig: PrimeNGConfig, private authService: AuthService) {
    this.ngConfig.ripple = true;
  }

  isLogger(): Boolean{
    return this.authService.userLogged();
  }

  displayConfig(){
    this.displayConfiguraciones=true;
    this.conf.displayFalse();
  }

  salir(){
    this.authService.logout();
  }
}
function ConfiguracionesComponent(ConfiguracionesComponent: any) {
  throw new Error('Function not implemented.');
}

