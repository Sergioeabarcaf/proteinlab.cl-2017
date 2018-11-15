import { Component } from '@angular/core';
import { ProyectosService } from '../../service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  constructor(private activatedRoute: ActivatedRoute,
              protected _proyectoService: ProyectosService,
              private route: Router) {
    this.activatedRoute.params.subscribe( params => {
      this._proyectoService.getProyecto( params['topic'], params['id']);
    });
   }

   regresar() {
     this.route.navigate(['/proyectos']);
   }

}
