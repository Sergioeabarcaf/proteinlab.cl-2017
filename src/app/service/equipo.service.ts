import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  private equipo:Equipo[] = [
    {
      nombre: "Diego Vilches",
      cargo: "Diseño",
      imagen: "assets/img/equipo/diegoVilchez70.jpg",
      linkedin: "https://cl.linkedin.com/in/diego-vilches-183290a8",
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
      linkedin: "https://www.linkedin.com/in/francis-soto-pacheco-43b40556/",
    },
    {
      nombre: "Victor Meza",
      cargo: "Electronica",
      imagen: "assets/img/equipo/victorMeza70.jpg",
      linkedin: "https://www.linkedin.com/in/victormezaherrera/",
    },
    {
      nombre: "Sergio Abarca",
      cargo: "Informatica",
      imagen: "assets/img/equipo/sergioAbarca70.jpg",
      linkedin: "https://www.linkedin.com/in/sergioeabarcaf",
    },
    {
      nombre: "Macarena Valenzuela",
      cargo: "Dirección",
      imagen: "assets/img/equipo/macarenaValenzuela70.jpg",
      linkedin: "https://cl.linkedin.com/in/macarena-valenzuela-zubiaur-223b772b",
    },
    {
      nombre: "Hector Torres",
      cargo: "Dirección",
      imagen: "assets/img/Recurso2.svg",
      linkedin: "https://www.linkedin.com/in/proteinlab/",
    },
    {
      nombre: "Hugo Durney",
      cargo: "Dirección",
      imagen: "assets/img/Recurso2.svg",
      linkedin: "https://www.linkedin.com/in/hugo-durney-wasaff-9141368/",
    },
    {
      nombre: "Victor Escobar",
      cargo: "Dirección",
      imagen: "assets/img/Recurso2.svg",
      linkedin: "https://cl.linkedin.com/in/victor-escobar-jeria-91549925",
    },
    {
      nombre: "Pamela Armstrong",
      cargo: "Dirección",
      imagen: "assets/img/equipo/Pamela_Armstrong.jpg",
      linkedin: "https://www.linkedin.com/in/pamela-armstrong-543a0a31/",
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
