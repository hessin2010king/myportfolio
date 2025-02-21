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
      image: "assets/profile.jpg",
      images: [
        "assets/profile.jpg",
        "assets/projects/eventoria2.jpg"
      ],
      demo: "https://eventoria.com"
    },
    {
      name: "Alex-Library",
      description: "A digital library management system.",
      image: "assets/projects/alexlibrary.jpg",
      images: [
        "assets/projects/alexlibrary1.jpg",
        "assets/projects/alexlibrary2.jpg"
      ],
      demo: "https://alexlibrary.com"
    },
    {
      name: "Clinico",
      description: "Landing template for clinic's purposes.",
      image: "assets/projects/clinico.jpg",
      images: [
        "assets/projects/clinico1.jpg",
        "assets/projects/clinico2.jpg"
      ],
      demo: "https://clinico-two.vercel.app/"
    },
    {
      name: "Dynamic Portfolio",
      description: "A dynamic portfolio system allowing easy edits without coding.",
      image: "assets/projects/portfolio.jpg",
      images: [
        "assets/projects/portfolio1.jpg",
        "assets/projects/portfolio2.jpg"
      ],
      demo: "https://dynamicportfolio.com"
    },
    {
      name: "EquiHub",
      description: "A platform connecting investors and startups.",
      image: "assets/projects/equihub.jpg",
      images: [
        "assets/projects/equihub1.jpg",
        "assets/projects/equihub2.jpg"
      ],
      demo: "https://equihub.com"
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
