import { Injectable } from '@angular/core';

@Injectable()
export class HistoricosService {

  private equipoHistorico:any[] = [
    {
      nombre: "Paz Ayala",
      cargo: "Diseño",
      imagen: "assets/img/historicos/pazAyala.jpg"
    },
    {
      nombre: "Cristian Becerra",
      cargo: "Informática",
      imagen: "assets/img/historicos/cristianBecerra.jpg"
    },
    {
      nombre: "Francisco Sanchez",
      cargo: "Informática",
      imagen: "assets/img/historicos/franciscoSanchez.jpg"
    },
    {
      nombre: "Helene Schmelzer",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/heleneSchmelzer.jpg"
    },
    {
      nombre: "Marlene Lopez",
      cargo: "Diseño",
      imagen: "assets/img/historicos/marleneLopez.jpg"
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
      nombre: "Elisa halvorsen",
      cargo: "Diseño",
      imagen: "assets/img/historicos/elisaHalvorsen.jpg"
    },
    {
      nombre: "Rodrigo Muñoz",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/rodrigoMuñoz.jpg"
    },
    {
      nombre: "Carla Pérez",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/carlaPErez.jpg"
    },
    {
      nombre: "Recsi Salas",
      cargo: "Diseño",
      imagen: "assets/img/historicos/recsiSalas.jpg"
    },
    {
      nombre: "Andrea Ordenes",
      cargo: "Dirección",
      imagen: "assets/img/historicos/andreaOrdenes.jpg"
    },
    {
      nombre: "Alejandro Collao",
      cargo: "Electrónica",
      imagen: "assets/img/historicos/alejandroCollao.jpg"
    }

  ];

  constructor() { }

  getEquipoHistorico():any[]{
    return this.equipoHistorico
  }


}
