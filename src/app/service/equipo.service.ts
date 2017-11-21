import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  private equipoProyecto:Equipo[] = [];

  private equipo:Equipo[] = [
    {
      nombre: "Paz Ayala",
      area: "Diseño",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/paz"
    },
    {
      nombre: "Diego Vilchez",
      area: "Diseño",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/diego"
    },
    {
      nombre: "Josue Alarcon",
      area: "Diseño",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/josue"
    },
    {
      nombre: "Helene Schmelzer",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/helene"
    },
    {
      nombre: "Carla Perez",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/carla"
    },
    {
      nombre: "Francis Soto",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/francis"
    },
    {
      nombre: "Victor Meza",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/victor"
    },
    {
      nombre: "Francisco Sanchez",
      area: "Informatica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/francisco"
    },
    {
      nombre: "Sergio Abarca",
      area: "Informatica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/sergio"
    },
    {
      nombre: "Macarena Valenzuela",
      area: "Dirección",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/macarena"
    },
    {
      nombre: "Hector Torres",
      area: "Dirección",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/hector"
    }
  ];

  constructor() {
  }

  getEquipo():Equipo[]{
    return this.equipo;
  }

  getIntegrante( nombre:string ):Equipo[]{
    let integrantes:any = nombre.split(",");
    for(let aux=0;aux<integrantes.length;aux++){
      for(let i=0;i<this.equipo.length;i++){
        if(integrantes[aux]==this.equipo[i].nombre){
          this.equipoProyecto[aux] = this.equipo[i];
        }
      }
    }
    return this.equipoProyecto;
  }

}

export interface Equipo{
  nombre: string;
  area: string;
  descripcion: string;
  imagen: string;
  linkedin: string;
}
