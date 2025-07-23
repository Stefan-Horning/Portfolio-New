import { Component } from '@angular/core';
import { Experience } from '../../interface/expereince.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class experienceComponent {
  experiences: Experience[] = [
    {
      company: 'Berufskolleg Uerdingen',
      companyLogo: 'assets/logos/bku.png',
      title: 'Abitur – Mathematics & Computer Science',
      startDate: '8/2023',
      endDate: 'Present',
      description: 'Currently pursuing my German Abitur with a specialization in Math and Computer Science.',
      icon: 'assets/icons/school.svg',
      link: 'https://www.bkukr.de/'
    },
    {
      company: 'Grant Thornton AG',
      companyLogo: 'assets/logos/GT.png',
      title: 'Cybersecurity Intern',
      startDate: '06/2025',
      endDate: '08/2025',
      description: 'Currently completing an internship in cybersecurity, focusing on IT forensics, security guidelines, and risk assessment. Gaining hands-on experience in analyzing security incidents, understanding regulatory compliance, and supporting the development of internal IT security policies.',
      icon: 'assets/icons/IT-Sicherheit.svg',
      link: 'https://www.grantthornton.de/'
    },
    {
      company: 'NextLevel GmbH',
      companyLogo: 'assets/logos/Nextlevels.png',
      title: 'Frontend Developer intern',
      startDate: '06/2024',
      endDate: '11/2024',
      description: 'Developed Angular-based web applications and gained hands-on experience in building dynamic and modular user interfaces.',
      icon: 'assets/icons/Frontend.svg',
      link: 'https://next-levels.de/'
    },
    {
      company: 'Developer Akademie',
      companyLogo: 'assets/logos/DA.png', 
      title: 'Frontend Developer student ',
      startDate: '11/2022',
      endDate: '02/2024',
      description: 'Completed a practical training program focused on Angular, TypeScript, and UI/UX design principles.',
      icon: 'assets/icons/akademie.svg',
      link: 'https://developerakademie.com/'
    }
  ];

}
