import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarItemsService } from './@core/shared/services/menubar-items.service';
import { ThemeService } from './@core/shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: MenuItem[] = this.menuItemsService.items;
  constructor(
    private menuItemsService: MenubarItemsService,
    public themeService: ThemeService
  ) {
    this.themeService.setTheme(this.themeService.darkMode);
  }
}
