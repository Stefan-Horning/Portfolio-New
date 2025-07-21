import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() parentIsVisible: boolean = true;
  menuOpen = false;
  isMobile = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.checkViewportWidth();
    window.addEventListener('resize', this.checkViewportWidth.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentIsVisible'] && changes['parentIsVisible'].currentValue === false) {
      this.closeMenu();
    }
  }

  checkViewportWidth() {
    this.isMobile = window.innerWidth < 700;
    if (!this.isMobile) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.closeMenu();
  }
}
