import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarItemsService } from '../../services/menubar-items.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [],
})
export class MenuBarComponent implements OnInit {
  menuItems: MenuItem[] = this.menuItemsService.items;

  constructor(
    private menuItemsService: MenubarItemsService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme(this.themeService.darkMode);
  }
}
