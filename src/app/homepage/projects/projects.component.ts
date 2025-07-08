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
      description: 'The task management app streamlines collaboration by making it easy to create, assign, and track tasks.',
      imageUrl: '/assets/projects/DABubble.png',
      link: 'https://dabubble.stefan-horning.com/',
      technologies: ['Angular', 'Ts', 'CSS', 'HTML', 'firebase'],
      githubLink: 'https://github.com/Stefan-Horning/DABubble'
    },
    {
      title: 'Osteomedica',
      description: 'This live project delivers cutting-edge digital experiences through an iterative process, powered by a PHP-based CMS that ensures flexibility, creativity, and ongoing improvement.',
      imageUrl: '/assets/projects/osteo.png',
      link: 'https://www.swetlana-makeupartist.de/',
      technologies: ['Angular', 'Ts','HTML','SQL', 'php'],
      githubLink: 'https://github.com/Stefan-Horning/DABubble'
    },
    {
      title: 'Makeupartist',
      description: 'This is a live project that combines design and coding to create functional and visually appealing digital solutions. It’s an evolving effort, continuously refined through feedback and new ideas.',
      imageUrl: '/assets/projects/makeup.png',
      link: 'https://www.swetlana-makeupartist.de/',
      technologies: ['Angular', 'Ts', 'CSS', 'HTML'],
      githubLink: 'https://github.com/Stefan-Horning/DABubble'
    },
    {
      title: 'El Pollo Loco',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      imageUrl: '/assets/projects/PolloLoco.png',
      link: 'https://www.swetlana-makeupartist.de/',
      technologies: ['Js', 'CSS', 'HTML'],
      githubLink: 'https://github.com/Stefan-Horning/DABubble'
    }

  ]
}
