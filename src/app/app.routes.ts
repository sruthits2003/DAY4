import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"department",component:DepartmentComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
];
