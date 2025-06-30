import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent,WelcomeComponent,AboutComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

}
