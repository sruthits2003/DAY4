import { Component } from '@angular/core';
import { CarouselComponent } from "../../unit/carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
