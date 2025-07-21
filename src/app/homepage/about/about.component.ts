import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Die Arrays sind bereits so dupliziert, dass jeder Satz zweimal vorhanden ist.
  // Das ist ideal für die ruckelfreie Animation, die wir unten im CSS definieren.
  technologies1 = [
    'Angular',
    'Ts',
    'HTML',
    'sass', // Dupliziert für Animation
    'CSS',
    'Js',
  ];
  technologies2 = [
    'Python',
    'Django',
    'SQL',
    'API',
    'Scrum',
    'Git',
  ];
  
  private resizeObserver: ResizeObserver | undefined;

  ngOnInit() {
    this.resizeObserver = new ResizeObserver(() => {
      this.runAnimations();
    });
  }

  ngAfterViewInit() {
    this.runAnimations();
    const firstElement = document.querySelector('.first-tech-stack');
    const secondElement = document.querySelector('.secound-tech-stack');
    if (firstElement) this.resizeObserver?.observe(firstElement);
    if (secondElement) this.resizeObserver?.observe(secondElement);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  private runAnimations() {
    const element = document.querySelector('.first-tech-stack');
    if (element) {
      const height = element.scrollHeight / 2;
      element.animate([
        { transform: 'translateY(0)' },
        { transform: `translateY(calc(-${height}px - 4px))` }
      ], {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      });
    }

    const secondElement = document.querySelector('.secound-tech-stack');
    if (secondElement) {
      const height = secondElement.scrollHeight / 2;
      secondElement.animate([
        { transform: `translateY(calc(-${height}px - 4px))` },
        { transform: 'translateY(0)' }
      ], {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      });
    }
  }

}