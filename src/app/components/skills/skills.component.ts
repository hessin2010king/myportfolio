import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  isModalOpen = false;
  selectedSkill: any = null;

  skills = [
    { id: 'angular', title: 'Angular', description: 'Building SPAs with Angular, focusing on performance and maintainability.' },
    { id: 'laravel', title: 'PHP & Laravel', description: 'Robust backend systems with PHP and Laravel for APIs and performance.' },
    { id: 'mysql', title: 'MySQL', description: 'Designing optimized databases with advanced queries and data integrity.' },
    { id: 'git', title: 'Git & GitHub', description: 'Version control and collaboration using Git and GitHub for projects.' },
    { id: 'docker', title: 'Docker', description: 'Learning Docker to containerize applications and manage environments for seamless deployment.' },
    { id: 'aws', title: 'AWS', description: 'Familiar with AWS services, including EC2 and S3, for cloud deployments and management.' }
  ];

  openPopup(skillId: string) {
    this.selectedSkill = this.skills.find(skill => skill.id === skillId);
    this.isModalOpen = true;
  }

  closePopup() {
    this.isModalOpen = false;
    this.selectedSkill = null;
  }
}
