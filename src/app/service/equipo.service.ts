import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  private equipo:Equipo[] = [
    {
      nombre: "Diego Vilches",
      cargo: "Diseño",
      imagen: "assets/img/equipo/diegoVilchez70.jpg",
      linkedin: null,
    },
    {
      nombre: "Josue Alarcon",
      cargo: "Diseño",
      imagen: "assets/img/equipo/josueAlarcon70.jpg",
      linkedin: null,
    },
    {
      nombre: "Francis Soto",
      cargo: "Electronica",
      imagen: "assets/img/equipo/francisSoto70.jpg",
      linkedin: null,
    },
    {
      nombre: "Victor Meza",
      cargo: "Electronica",
      imagen: "assets/img/equipo/victorMeza70.jpg",
      linkedin: null,
    },
    {
      nombre: "Sergio Abarca",
      cargo: "Informatica",
      imagen: "assets/img/equipo/sergioAbarca70.jpg",
      linkedin: null,
    },
    {
      nombre: "Macarena Valenzuela",
      cargo: "Dirección",
      imagen: "assets/img/equipo/macarenaValenzuela70.jpg",
      linkedin: null,
    },
    {
      nombre: "Hector Torres",
      cargo: "Dirección",
      imagen: "assets/img/Recurso2.svg",
      linkedin: null,
    },
    {
      nombre: "Hugo Durney",
      cargo: "Dirección",
      imagen: "assets/img/Recurso2.svg",
      linkedin: null,
    },
    {
      nombre: "Victor Escobar",
      cargo: "Dirección",
      imagen: "assets/img/Recurso2.svg",
      linkedin: null,
    },
    {
      nombre: "Pamela Armstrong",
      cargo: "Dirección",
      imagen: "assets/img/equipo/Pamela_Armstrong.jpg",
      linkedin: null,
    }
  ];

  constructor() {
  }

  getEquipo():Equipo[]{
    return this.equipo;
  }
}

export interface Equipo{
  nombre: string;
  cargo: string;
  imagen: string;
  linkedin: string;
}
