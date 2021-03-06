import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AltaRomaComponent } from './components/alta-roma/alta-roma.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proyecto/:topic/:id', component: ProyectoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'altaroma', component: AltaRomaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
