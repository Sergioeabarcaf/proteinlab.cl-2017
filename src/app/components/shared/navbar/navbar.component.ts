import { Component, OnInit } from '@angular/core';
import { Proyecto , ProyectosService } from '../../../service/proyectos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  proyectos:Proyecto[] = [];

  constructor( private _proyectosService:ProyectosService, private router:Router ) { }

  ngOnInit() {
    this.proyectos = this._proyectosService.getProyectos();
  }

  verProyecto( idx:number ){
    this.router.navigate( ['/proyecto',idx] )
  }

}
