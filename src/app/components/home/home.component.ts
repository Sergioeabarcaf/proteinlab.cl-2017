import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../service/proyectos.service';
import { EquipoService, Equipo } from '../../service/equipo.service';
import { EggService } from '../../service/egg.service';
import { HistoricosService } from '../../service/historicos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  equipo:Equipo[] = [];
  historico:boolean = false;
  equipoHistorico:any[] = [];

  constructor( private _proyectosService:ProyectosService, private _equipoService:EquipoService, private _eggService:EggService, private _historicosService:HistoricosService ) { }

  ngOnInit() {
    this.equipo = this._equipoService.getEquipo();
  }

  egg(nombre:string){
    this._eggService.names.push(nombre)
    if(this._eggService.names.length == this.equipo.length){
      if(this._eggService.validarOrden()){
        this.equipoHistorico = this._historicosService.getEquipoHistorico();
        this.historico = true;
      }
      else{
        console.error("NOOOOOO!!! perdiste tu oportunidad de conocer la historia profunda de proteinlab")
      }
    }
  }

}
