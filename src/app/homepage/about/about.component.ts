import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  technologies1 = [
    'Angular',
    'Ts',
    'HTML',
  ];
  technologies2 = [
    '',
    'Git',
    'Python',
    'Django',
  ];
}
