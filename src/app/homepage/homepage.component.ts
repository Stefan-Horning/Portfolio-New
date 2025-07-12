import { Component, HostListener, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { experienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent, WelcomeComponent, AboutComponent, CommonModule, ProjectsComponent,experienceComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isVisible = true;
  private lastScrollTop = 0;

  ngOnInit(): void {
    this.lastScrollTop = window.pageYOffset; // Verhindert Flackern beim ersten Scroll
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > this.lastScrollTop + 5) {
      this.isVisible = false; // Runter scrollen
    } else if (currentScroll < this.lastScrollTop - 5) {
      this.isVisible = true;  // Hoch scrollen
    }

    this.lastScrollTop = Math.max(currentScroll, 0); 
  }
}