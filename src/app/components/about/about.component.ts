import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../service/equipo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [`.borde{
    border: 0.1em solid gray;
  }
`]
})
export class AboutComponent implements OnInit {

  equipo:Equipo[] = [];

  constructor(private _equipoService:EquipoService ) { }

  ngOnInit() {
    this.equipo = this._equipoService.getEquipo();
  }

}
