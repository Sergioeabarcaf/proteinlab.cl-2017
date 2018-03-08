import { Component } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent{

  proyectos:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService, private activatedRoute:ActivatedRoute, private router:Router ) {
    this.activatedRoute.params.subscribe( params => {
      this.proyectos = this._proyectosService.getProyectos( params['categoria']);
    })

  }

  verProyecto( idx:number ){
    this.router.navigate( ['/proyecto',idx] )
  }

}
