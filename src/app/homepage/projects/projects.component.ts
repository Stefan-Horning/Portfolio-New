import { Component } from '@angular/core';
import { Project } from '../../interface/projects.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'DABubble',
      description: 'A collaborative tool that makes it easy to create, assign, and track tasks in real-time. Designed to boost productivity and streamline team workflows.',
      imageUrl: '/assets/projects/DABubble.png',
      link: 'https://dabubble.stefan-horning.com/',
      technologies: ['Angular', 'Ts', 'CSS', 'HTML', 'firebase'],
    },
    {
      title: 'Osteomedica',
      description: 'A live digital platform built on a PHP-based CMS. It supports flexible development and is shaped through continuous iteration, feedback, and creativity.',
      imageUrl: '/assets/projects/osteo.png',
      link: 'https://osteomedica-toenisvorst.de/',
      technologies: ['Angular', 'Ts','HTML','SQL', 'php'],
    },
    {
      title: 'Makeupartist',
      description: 'A hands-on project that blends design and development to create functional digital solutions. Continuously refined with input and new ideas.',
      imageUrl: '/assets/projects/makeup.png',
      link: 'https://www.swetlana-makeupartist.de/',
      technologies: ['Angular', 'Ts', 'CSS', 'HTML'],
    },
    {
      title: 'El Pollo Loco',
      description: 'A simple, object-oriented game where you help Pepe collect coins and poison bottles to defeat the menacing killer chicken in a playful adventure.',
      imageUrl: '/assets/projects/PolloLoco.png',
      link: 'https://stefan-horning.com/PolloLoco/index.html',
      technologies: ['Js', 'CSS', 'HTML'],
    }

  ]
}
