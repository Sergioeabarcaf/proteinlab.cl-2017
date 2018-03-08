import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  verProyecto( categoria:string ){
    this.router.navigate( ['/proyectos',categoria] )
  }

}
