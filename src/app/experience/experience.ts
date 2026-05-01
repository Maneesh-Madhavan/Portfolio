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
        'Developed scalable Angular modules for enterprise Manufacturing Execution System (MES) workflows and transaction processing.',
        'Built complex dashboards, multi-column data tables, and large reactive forms with advanced validations and dynamic controls.',
        'Implemented RxJS (BehaviorSubject) state management and socket-based real-time communication for live machine data streaming.',
        'Integrated Angular frontend with Node.js and .NET RESTful APIs, including Machine Data and weighing machine integrations.',
        'Led UI revamp initiatives, translating Figma designs into pixel-perfect, responsive Angular components with accessibility compliance.',
        'Implemented JWT authentication and RBAC; collaborated with backend teams to optimize APIs and supported CI/CD pipelines using Jenkins in Agile environments.'
      ]
    }
  ];
}
