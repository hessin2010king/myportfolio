import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme'; // Key for saving the theme in localStorage

  constructor() {
    const savedTheme = localStorage.getItem(this.THEME_KEY) || 'light'; // Retrieve the saved theme, default to 'light'
    this.setTheme(savedTheme); // Set the theme on initial load
  }

  // Set the theme and update the document body class
  setTheme(theme: string): void {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem(this.THEME_KEY, 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem(this.THEME_KEY, 'light');
    }
  }

  // Toggle the theme between light and dark
  toggleTheme(): void {
    const isDarkMode = document.body.classList.contains('dark-mode');
    this.setTheme(isDarkMode ? 'light' : 'dark');
  }

  // Get the current theme from localStorage
  getTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || 'light';
  }
}
