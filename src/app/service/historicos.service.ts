import { Injectable } from '@angular/core';

@Injectable()
export class HistoricosService {

  private equipoHistorico:any[] = [
    {
      nombre: "Paz Ayala",
      cargo: "Diseño",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Cristian Becerra",
      cargo: "Informática",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Francisco Sanchez",
      cargo: "Informática",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Helene Schmelzer",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Marlene Lopez",
      cargo: "Diseño",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Raul Higueras",
      cargo: "Diseño",
      imagen: "assets/img/historicos/raulHigueras.jpg"
    },
    {
      nombre: "Jose Miranda",
      cargo: "Diseño",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Elisa ",
      cargo: "Diseño",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Rodrigo Muñoz",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    },
    {
      nombre: "Carla Pérez",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/joseMiranda.jpg"
    }

  ];

  constructor() { }

  getEquipoHistorico():any[]{
    return this.equipoHistorico
  }


}
