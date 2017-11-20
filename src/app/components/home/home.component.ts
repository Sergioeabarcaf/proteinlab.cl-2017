import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`.carousel-item {
						  height: 35em;
						}
						#queHacemos{
							padding-top: 1em;
						}
`]
})
export class HomeComponent implements OnInit {

  proyectos:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService ) { }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
  }

}
