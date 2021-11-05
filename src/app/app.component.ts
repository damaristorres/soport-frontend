import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './@core/shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private ngConfig: PrimeNGConfig, private authService: AuthService) {
    this.ngConfig.ripple = true;
  }

  isLogger(): Boolean{
    return this.authService.userLogged();
  }

  salir(){
    this.authService.logout();
  }
}
