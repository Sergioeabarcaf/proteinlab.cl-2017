import { Component } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent{

  proyectosVinculacion:Proyecto[] = [];
  proyectosPropios:Proyecto[] = [];
  proyectosApoyo:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService, private router:Router ) {
    this.proyectosApoyo = this._proyectosService.getProyectosApoyo();
    this.proyectosVinculacion = this._proyectosService.getProyectosVinculacion();
    this.proyectosPropios = this._proyectosService.getProyectosPropios();
  }

  verProyecto( id:string ){
    this.router.navigate( ['/proyecto',id] )
  }

}
