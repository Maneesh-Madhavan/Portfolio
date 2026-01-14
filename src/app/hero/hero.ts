import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: true,                 
  imports: [MatToolbarModule, MatCardModule, MatButtonModule,MatIconModule] 
})
export class HeroComponent {
    downloadResume() {
    // Create an invisible <a> element and trigger download
    const link = document.createElement('a');
    link.href = '/ManeeshResume.pdf'; // public folder path
    link.download = 'ManeeshResume.pdf';
    link.click();
  }
}
