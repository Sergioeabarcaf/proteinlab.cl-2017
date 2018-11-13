import { Component } from '@angular/core';
import { ProyectosService } from '../../service/proyectos.service';
import { Router } from '@angular/router';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {


  constructor( protected _proyectosService: ProyectosService, private router: Router ) {
    this._proyectosService.getProyectosApoyo();
    this._proyectosService.getProyectosVinculacion();
    this._proyectosService.getProyectosPropios();
  }

  verProyecto( id: string ) {
    this.router.navigate( ['/proyecto', id]);
  }

}
