import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { ProyectosService } from './service/proyectos.service';
import { EquipoService } from './service/equipo.service';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { P200Pipe } from './pipes/p200.pipe';
import { P30Pipe } from './pipes/p30.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProyectoComponent,
    ProyectosComponent,
    NavbarComponent,
    FooterComponent,
    P200Pipe,
    P30Pipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProyectosService,
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
