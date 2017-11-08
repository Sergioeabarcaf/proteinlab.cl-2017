import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: []
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService ) { }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
    console.log(this.proyectos);
  }

}
