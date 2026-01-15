import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class Navbar {
  activeSection = 'hero';

  // Scroll smoothly to section
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

@HostListener('window:scroll', [])
onWindowScroll() {
  const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
  let closestSection = sections[0];
  let minDistance = Infinity;

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();

      let distance = Math.abs(rect.top);

      // Special handling for Contact: highlight only if at least 50% visible
      if (id === 'contact') {
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (visibleHeight < rect.height / 2) {
          // Skip highlighting Contact if less than 50% visible
          return;
        }
        distance = 0; // force it as closest if 50%+ visible
      }

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = id;
      }
    }
  });

  this.activeSection = closestSection;
}


}
