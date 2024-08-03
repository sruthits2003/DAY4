import { Component } from '@angular/core';
import { Carousel3Component } from "../../unit/carousel3/carousel3.component";
import { LayoutComponent } from "../../unit/layout/layout.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Carousel3Component, LayoutComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
