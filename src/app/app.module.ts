import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

// rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { ProyectosService } from './service/proyectos.service';
import { EquipoService } from './service/equipo.service';
import { EggService } from './service/egg.service';
import { HistoricosService } from './service/historicos.service';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'tap': { posThreshold: 500, interval: 100 } // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectoComponent,
    ProyectosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ProyectosService,
    EquipoService,
    EggService,
    HistoricosService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
