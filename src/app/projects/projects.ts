import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {

  projects = [
    {
      title: 'MERN Fashion E-Commerce Platform',
      description: 'A full-featured fashion e-commerce application with product browsing, cart, checkout, and admin management.',
      tech: ['MERN Stack', 'Vite', 'Stripe', 'Cloudinary', 'Admin', 'Vercel'],
      images: ['/Modeva1.png','/Modeva2.png','/Modeva3.png','/Modeva4.png','/Modeva5.png'],
      liveUrl: 'https://modeva-frontend.vercel.app',
      repoUrl: 'https://github.com/Maneesh-Madhavan/Modeva-Ecommerce.git',
      currentIndex: 0
    },
    {
      title: 'Realtime Whiteboard & Chat Application',
      description: 'An interactive realtime whiteboard where multiple users can join rooms, chat, and draw together instantly. Built with realtime socket communication and optimized for collaboration.',
      tech: [ 'MERN Stack',
      'Socket.IO',
      'Realtime Drawing',
      'Room-based Chat',
      'Render Deployment'],
      images: ['/Smate2.png','/Smate1.png','/Smate3.png'],
      liveUrl: 'https://sketchmate-frontend.onrender.com',
      repoUrl: 'https://github.com/Maneesh-Madhavan/Project.git',
      currentIndex: 0
    },
    {
      title: 'MERN Blog Platform',
      description: 'A modern blog platform with authentication, post creation, editing, and responsive reading experience. Designed with performance and clean content presentation in mind.',
      tech: ['MERN Stack',
      'Authentication',
      'CRUD Operations',
      'Responsive UI',
      'Vercel Deployment'],
      images: ['/blog1.png','/blog2.png','/blog3.png','/blog4.png'],
      liveUrl: 'https://insightblog-mernblog.vercel.app',
      repoUrl: 'https://github.com/Maneesh-Madhavan/Blog-MERN.git',
      currentIndex: 0
    }
  ];

   isModalOpen = false;
  modalImages: string[] = [];
  modalIndex = 0;

  openImageModal(project: any, index: number) {
    this.modalImages = project.images;
    this.modalIndex = index;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  prevModalImage() {
    this.modalIndex =
      this.modalIndex > 0 ? this.modalIndex - 1 : this.modalImages.length - 1;
  }

  nextModalImage() {
    this.modalIndex =
      this.modalIndex < this.modalImages.length - 1 ? this.modalIndex + 1 : 0;
  }

  openLive(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  openRepo(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

