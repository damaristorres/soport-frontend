import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MenubarItemsService {
  items: MenuItem[] = [
    {
      label: 'Computadoras',
      icon: 'pi pi-desktop',
      routerLink: ['computadoras'],
    },
    {
      label: 'Depositos',
      icon: 'pi pi-inbox',
      routerLink: ['depositos'],
    },
    {
      label: 'Estantes',
      icon: 'pi pi-inbox',
      routerLink: ['estantes'],
    },
    {
      label: 'Mercaderias',
      icon: 'pi pi-inbox',
      routerLink: ['mercaderias'],
    },
    {
      label: 'Usuarios',
      icon: 'pi pi-user',
      routerLink: ['usuarios'],
    },

  ];
}
