import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../service/equipo.service';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  equipo:Equipo[] = [];
  proyectos:Proyecto[] = [];

  constructor(private _proyectosService:ProyectosService, private _equipoService:EquipoService ) { }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
    this.equipo = this._equipoService.getEquipo();
    console.log(this.proyectos);
    console.log(this.equipo);
  }

}
