import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarItemsService } from '../../services/menubar-items.service';
import { ThemeService } from '../../services/theme.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: []
})
export class MenuBarComponent implements OnInit {
  menuItems: MenuItem[] = this.menuItemsService.items;

  constructor(
    private menuItemsService: MenubarItemsService,
    public themeService: ThemeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.themeService.setTheme(this.themeService.darkMode);
  }

  salir(){
    this.authService.logout();
  }
}
