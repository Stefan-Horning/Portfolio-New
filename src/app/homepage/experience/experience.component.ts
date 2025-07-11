import { Component } from '@angular/core';
import { Experience } from '../../interface/expereince.interface';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class experienceComponent {
  experiences: Experience[] = [
    {
      company: 'Berufskolleg Uerdingen',
      companyLogo: 'bk.png',
      title: 'High School Diploma – Focus on Mathematics & Computer Science',
      startDate: '2023',
       endDate: '2026',
      description: 'Currently pursuing my German Abitur with a specialization in Math and Computer Science.',
      icon: 'assets/icons/school.svg'
    },
    {
      company: 'Grant Thornton AG',
      companyLogo: 'assets/icons/GT.png',
      title: 'Cybersecurity Intern',
      startDate: '2025-06-25',
      endDate: '2025-08-22',
      description: 'Currently completing an internship in cybersecurity, focusing on IT forensics, security guidelines, and risk assessment. Gaining hands-on experience in analyzing security incidents, understanding regulatory compliance, and supporting the development of internal IT security policies.',
      icon: 'assets/icons/IT-Sicherheit.svg'
    },
    {
      company: 'NextLevel GmbH',
      companyLogo: 'assets/icons/freelance.png',
      title: 'Frontend Developer intern',
      startDate: '2024-6-8',
      endDate: '2024-11-01',
      description: 'Developed Angular-based web applications and gained hands-on experience in building dynamic and modular user interfaces.',
      icon: 'assets/icons/Frontend.svg'
    },
    {
      company: 'Developer Akademie',
      companyLogo: 'assets/icons/DA.png', 
      title: 'Frontend Developer student ',
      startDate: '2022-11',
      endDate: '2023-02',
      description: 'Completed a practical training program focused on Angular, TypeScript, and UI/UX design principles.',
      icon: 'assets/icons/internship.svg'
    }
  ];

}
