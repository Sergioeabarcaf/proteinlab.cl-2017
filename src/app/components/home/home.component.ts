import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { EquipoService, Equipo } from '../../service/equipo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  proyectosAll:Proyecto[] = [];
  equipo:Equipo[] = [];

  constructor( private _proyectosService:ProyectosService, private _equipoService:EquipoService ) { }

  ngOnInit() {
    this.proyectosAll = this._proyectosService.getProyectoLimit(3);
    this.equipo = this._equipoService.getEquipo();
  }

}
