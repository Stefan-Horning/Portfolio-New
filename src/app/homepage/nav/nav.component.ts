import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true, 
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnChanges {
  @Input() parentIsVisible: boolean = true; // Neue Input-Eigenschaft
  menuOpen = false; // Standardmäßig geschlossen

 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentIsVisible'] && changes['parentIsVisible'].currentValue === false) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}