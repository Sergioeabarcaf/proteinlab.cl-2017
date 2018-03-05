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
            #contact a{
              color: grey;
              text-decoration: none;
            }
`]
})
export class HomeComponent implements OnInit {

  proyectosAll:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService ) { }

  ngOnInit() {
    this.proyectosAll = this._proyectosService.getProyectoLimit(3);
  }

}
