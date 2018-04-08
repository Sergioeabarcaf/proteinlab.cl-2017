import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  public rand:number = 0;
  public aux:Equipo = null;
  public desord:Equipo[] = [];

  private nombres:string[] = [];

  private equipo:Equipo[] = [
    {
      nombre: "Diego Vilches",
      cargo: "Diseño",
      imagen: "assets/img/equipo/diegoVilchez.jpg",
      linkedin: "https://cl.linkedin.com/in/diego-vilches-183290a8",
    },
    {
      nombre: "Josué Alarcón",
      cargo: "Diseño",
      imagen: "assets/img/equipo/josueAlarcon.jpg",
      linkedin: "https://www.linkedin.com/in/josu%C3%A9-alarcon-837712142/",
    },
    {
      nombre: "Francis Soto",
      cargo: "Electrónica",
      imagen: "assets/img/equipo/francisSoto.jpg",
      linkedin: "https://www.linkedin.com/in/francis-soto-pacheco-43b40556/",
    },
    {
      nombre: "Víctor Meza",
      cargo: "Electrónica",
      imagen: "assets/img/equipo/victorMeza.jpg",
      linkedin: "https://www.linkedin.com/in/victormezaherrera/",
    },
    {
      nombre: "Sergio Abarca",
      cargo: "Informática",
      imagen: "assets/img/equipo/sergioAbarca.jpg",
      linkedin: "https://www.linkedin.com/in/sergioeabarcaf",
    },
    {
      nombre: "Macarena Valenzuela",
      cargo: "Dirección",
      imagen: "assets/img/equipo/macarenaValenzuela.jpg",
      linkedin: "https://cl.linkedin.com/in/macarena-valenzuela-zubiaur-223b772b",
    },
    {
      nombre: "Héctor Torres",
      cargo: "Dirección",
      imagen: "assets/img/equipo/hectorTorres.jpg",
      linkedin: "https://www.linkedin.com/in/proteinlab/",
    },
    {
      nombre: "Hugo Durney",
      cargo: "Investigación",
      imagen: "assets/img/equipo/hugoDurney.jpg",
      linkedin: "https://www.linkedin.com/in/hugo-durney-wasaff-9141368/",
    },
    {
      nombre: "Víctor Escobar",
      cargo: "Investigación",
      imagen: "assets/img/equipo/victorEscobar.jpg",
      linkedin: "https://cl.linkedin.com/in/victor-escobar-jeria-91549925",
    },
    {
      nombre: "Pamela Armstrong",
      cargo: "Asesor externo",
      imagen: "assets/img/equipo/pamelaAmstrong.jpg",
      linkedin: "https://www.linkedin.com/in/pamela-armstrong-543a0a31/",
    },
    {
      nombre: "Carlos Cáceres",
      cargo: "Asesor externo",
      imagen: "assets/img/equipo/carlosCaceres.jpg",
      linkedin: "https://www.linkedin.com/in/carlos-c%C3%A1ceres-inostroza-7b269420/",
    }
  ];

  constructor() {
  }

  getEquipo():Equipo[]{
    this.desord.splice(0,this.desord.length);
    for(let i=0; i < this.equipo.length; i++){
      this.desord.push(this.equipo[i]);
    }
    for(let a=0; a < this.desord.length; a++){
      this.rand = Math.floor(Math.random() * this.desord.length);
      this.aux = this.desord[a];
      this.desord[a] = this.desord[this.rand];
      this.desord[this.rand] = this.aux;
    }
    return this.desord
  }

  getNames():string[]{
    this.nombres.splice(0,this.nombres.length)
    for(let n=0; n < this.equipo.length; n++){
      this.nombres.push(this.equipo[n].nombre);
    }
    return this.nombres
  }
}

export interface Equipo{
  nombre: string;
  cargo: string;
  imagen: string;
  linkedin: string;
}
