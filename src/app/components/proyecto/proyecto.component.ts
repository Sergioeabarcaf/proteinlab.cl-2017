import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { EquipoService } from '../../service/equipo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent {

  proyecto:any = {};
  equipo:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _proyectoService: ProyectosService, private _equipoService: EquipoService, private route:Router) {
    this.activatedRoute.params.subscribe( params => {
      this.proyecto = this._proyectoService.getProyecto( params['id']);
      this.equipo = this._equipoService.getIntegrante(this.proyecto.integrantes);
    })
   }

   regresar(){
     this.route.navigate(['/proyectos'])
   }

}
