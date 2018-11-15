import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../service/proyectos.service';
import { EquipoService } from '../../service/equipo.service';
import { EggService } from '../../service/egg.service';
import { HistoricosService } from '../../service/historicos.service';
import { Equipo } from '../../interfaces/equipo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  historico = false;
  equipoHistorico: any[] = [];

  constructor( private _proyectosService: ProyectosService,
               protected _equipoService: EquipoService,
               private _eggService: EggService,
               protected _historicosService: HistoricosService,
               private _proyectoService: ProyectosService) {
               }

  ngOnInit() {}

  egg(nombre: string) {
    this._eggService.names.push(nombre);
    if (this._eggService.names.length === this._equipoService.equipo.length) {
      if (this._eggService.validarOrden()) {
        this.equipoHistorico = this._historicosService.getEquipoHistorico();
        this.historico = true;
      }else {
        console.error('NOOOOOO!!! perdiste tu oportunidad de conocer la historia profunda de proteinlab');
      }
    }
  }

}
