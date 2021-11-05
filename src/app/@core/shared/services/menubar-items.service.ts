import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MenubarItemsService {
  items: MenuItem[] = [
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
  ];
}
