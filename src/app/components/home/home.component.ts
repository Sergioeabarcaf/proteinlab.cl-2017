import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  proyectosAll:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService ) { }

  ngOnInit() {
    this.proyectosAll = this._proyectosService.getProyectoLimit(3);
  }

}
