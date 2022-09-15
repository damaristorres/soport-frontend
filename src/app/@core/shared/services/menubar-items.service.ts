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
      routerLink: ['computadora'],
    },
    {
      label: 'Notebook',
      icon: 'pi pi-tablet',
      routerLink: ['notebook'],
    },
    {
      label: 'Teléfonos',
      icon: 'pi pi-phone',
      routerLink: ['telefono'],
    },
    {
      label: 'Monitores',
      icon: 'pi pi-desktop',
      routerLink: ['monitor'],
    },
    {
      label: 'UPS',
      icon: 'pi pi-inbox',
      routerLink: ['ups'],
    },
    {
      label: 'Teclados',
      icon: 'pi pi-th-large',
      routerLink: ['teclado'],
    },
    {
      label: 'Otros',
      icon: 'pi pi-globe',
      routerLink: ['otros'],
    },

  ];
}
