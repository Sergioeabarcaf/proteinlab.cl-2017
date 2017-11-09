import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService, private router:Router ) { }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
  }

  verProyecto( idx:number ){
    this.router.navigate( ['/proyecto',idx] )
  }

}
