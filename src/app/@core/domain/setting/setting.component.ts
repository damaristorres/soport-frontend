import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  items: MenuItem[]=[];
  displayCambiarContrasena:boolean=false;

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Configuraciones',
        items:[
          {
            label: 'Cambiar contraseña',
            icon: 'fas fa-key',
            command:() => this.displayPage("change-password")
          },
        ] 
      },
      {
        items:[
          {
            label: 'Opción 2',
            icon: 'fas fa-key',
          },
        ] 
      },
      {
        items:[
          {
            label: 'Opción 3',
            icon: 'fas fa-key',
          },
        ] 
      },
  ];
  }

  displayPage(page:string){
    this.displayFalse();
    page=="change-password"? this.displayCambiarContrasena=true:false;
  }

  displayFalse(){
    this.displayCambiarContrasena=false;
  }

}
