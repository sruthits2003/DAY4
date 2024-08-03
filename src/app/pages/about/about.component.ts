import { Component } from '@angular/core';
import { Carousel2Component } from "../../unit/carousel2/carousel2.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Carousel2Component],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
