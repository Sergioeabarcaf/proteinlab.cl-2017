import { Component } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent{

  proyectosVinculacion:Proyecto[] = [];
  proyectosPropios:Proyecto[] = [];
  proyectosApoyo:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService, private router:Router ) {
    this.proyectosVinculacion = this._proyectosService.getProyectos( "vinculacion" );
    this.proyectosPropios = this._proyectosService.getProyectos( "propios" );
    this.proyectosApoyo = this._proyectosService.getProyectos( "apoyo" );

  }

  verProyecto( idx:number ){
    this.router.navigate( ['/proyecto',idx] )
  }

}
