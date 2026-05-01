import { Component, HostListener, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, MatTooltipModule]
})
export class Navbar implements OnInit {
  activeSection = 'hero';
  isDarkMode = false;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      // Default to light
      document.body.removeAttribute('data-theme');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    if (this.isDarkMode) {
      document.body.setAttribute('data-theme', theme);
    } else {
      document.body.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }

  // Scroll smoothly to section
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'about', 'experience', 'projects'];
    let closestSection = sections[0];
    let minDistance = Infinity;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Offset by ~56px to account for the sticky navbar
        let distance = Math.abs(rect.top - 56);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }
    });

    this.activeSection = closestSection;
  }
}
