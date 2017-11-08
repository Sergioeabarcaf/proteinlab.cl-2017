import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { ProyectosService } from './service/proyectos.service';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProyectoComponent,
    ProyectosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
