import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './unit/card/card.component';
import { DepartmentComponent } from "./pages/department/department.component";
import { CarouselComponent } from "./unit/carousel/carousel.component";
import { AccordionComponent } from "./unit/accordion/accordion.component";
import { Carousel2Component } from './unit/carousel2/carousel2.component';
import { Carousel3Component } from './unit/carousel3/carousel3.component';
import { LayoutComponent } from './unit/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardComponent, DepartmentComponent, CarouselComponent, AccordionComponent,Carousel2Component,Carousel3Component,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
