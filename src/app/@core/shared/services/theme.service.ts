import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode: boolean;
  themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const theme: string = localStorage.getItem('theme') || '';
    this.darkMode = theme === 'dark';
  }

  setTheme(darkMode: boolean) {
    const theme = darkMode ? 'dark' : 'light';
    this.darkMode = darkMode;
    localStorage.setItem('theme', theme);
    this.themeLink.href = `${theme}.css`;
  }
}
