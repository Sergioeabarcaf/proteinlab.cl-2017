import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyecto/:id', component: ProyectoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
