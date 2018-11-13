import { Component } from '@angular/core';
import { ProyectosService } from '../../service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  proyecto: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _proyectoService: ProyectosService,
              private route: Router) {
    // this.activatedRoute.params.subscribe( params => {
    //   this.proyecto = this._proyectoService.getProyecto( params['id']);
    // });
   }

   regresar() {
     this.route.navigate(['/proyectos']);
   }

}
