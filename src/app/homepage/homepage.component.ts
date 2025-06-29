import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavComponent,WelcomeComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

}
