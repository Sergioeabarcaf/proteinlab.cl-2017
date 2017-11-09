import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent {

  proyecto:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _proyectoService: ProyectosService, private route:Router) {
    this.activatedRoute.params.subscribe( params => {
      this.proyecto = this._proyectoService.getProyecto( params['id']);
    })
   }

   regresar(){
     this.route.navigate(['/proyectos'])
   }

}
