import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: "Eventoria",
      description: "An event management platform with multi-role functionality.",
      image: "assets/projects/eventoria.png",
      images: [
        "assets/projects/eventoria1.png",
        "assets/projects/eventoria2.png",
        "assets/projects/eventoria3.png",
        "assets/projects/eventoria4.png",
        "assets/projects/eventoria5.png",
        "assets/projects/eventoria6.png"
      ],
      demo: "https://events-app-black-seven.vercel.app/home"
    },
    {
      name: "Alex-Library",
      description: "A digital library management system.",
      image: "assets/projects/alexlibrary.png",
      images: [
        "assets/projects/alexlibrary.jpg",
        "assets/projects/alexlibrary2.jpg"
      ],
      demo: "https://master--alexlibrary.netlify.app/home"
    },
    {
      name: "Clinico",
      description: "Landing template for clinic's purposes.",
      image: "assets/projects/clinico.jpg",
      images: [
        "assets/projects/clinico.jpg",
        "assets/projects/clinico2.jpg"
      ],
      demo: "https://clinico-two.vercel.app/"
    },
    {
      name: "EquiHub",
      description: "A platform connecting investors and startups.",
      image: "assets/projects/equihub.png",
      images: [
        "assets/projects/equihub.jpg",
        "assets/projects/equihub2.jpg"
      ],
      demo: "https://equihub.co"
    }
  ];

  isSliderOpen = false;
  currentImage = "";
  imageIndex = 0;
  currentImages: string[] = [];

  openSlider(images: string[]) {
    this.isSliderOpen = true;
    this.currentImages = images;
    this.imageIndex = 0;
    this.currentImage = images[this.imageIndex];
  }

  closeSlider() {
    this.isSliderOpen = false;
  }

  nextImage() {
    this.imageIndex = (this.imageIndex + 1) % this.currentImages.length;
    this.currentImage = this.currentImages[this.imageIndex];
  }

  prevImage() {
    this.imageIndex = (this.imageIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.currentImage = this.currentImages[this.imageIndex];
  }

  openDemoLink(url: string) {
    window.open(url, '_blank');
  }
}
