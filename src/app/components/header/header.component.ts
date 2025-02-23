import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  currentTheme: string = 'light'; // Default theme

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      this.currentTheme = 'light';
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }
}

