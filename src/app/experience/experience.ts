import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  imports: [MatCardModule,CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
   experiences = [
    {
      role: 'Angular Developer',
      company: 'Intelizest Consulting Pvt. Ltd.',
      duration: 'Jan 2024 – Present',
      summary:
        'Working as an Angular Developer on a large-scale enterprise Manufacturing Execution System (MES) focused on smart factory transformation. Joined as an intern and became a core contributor to a critical production system.',
      points: [
        'Developed complex, data-driven Angular applications for production, inventory, quality, and resource planning modules.',
        'Built large-scale forms with advanced validations for production orders, material movement, and traceability workflows.',
        'Integrated real-time machine and sensor data into dashboards for live production monitoring.',
        'Optimized UI performance for high-frequency data updates using efficient change detection strategies.',
        'Collaborated closely with backend APIs and services to implement end-to-end workflows.',
        'Contributed to scalable and maintainable frontend architecture following enterprise standards.'
      ]
    }
  ];
}
