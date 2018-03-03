import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  private equipoProyecto:Equipo[] = [];
  private equipoActual:Equipo[] = [];

  private equipo:Equipo[] = [
    {
      nombre: "Paz Ayala",
      area: "Diseño",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/paz",
      estado: false
    },
    {
      nombre: "Diego Vilches",
      area: "Diseño",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/diego",
      estado: true
    },
    {
      nombre: "Josue Alarcon",
      area: "Diseño",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/josue",
      estado: true
    },
    {
      nombre: "Helene Schmelzer",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/helene",
      estado: false
    },
    {
      nombre: "Carla Perez",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/carla",
      estado: false
    },
    {
      nombre: "Francis Soto",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/francis",
      estado: true
    },
    {
      nombre: "Victor Meza",
      area: "Electronica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/victor",
      estado: true
    },
    {
      nombre: "Francisco Sanchez",
      area: "Informatica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/francisco",
      estado: false
    },
    {
      nombre: "Sergio Abarca",
      area: "Informatica",
      descripcion: "lorenakjahjahkjahahakjhajkahjkahkjahakjhajkah",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/sergio",
      estado: true
    },
    {
      nombre: "Macarena Valenzuela",
      area: "Dirección",
      descripcion: "Diseñadora Industrial de la Universidad Tecnológica Metropolitana de Chile. El 2011 se especializa en Gestión Estratégica en Diseño y proyectos en la Universidad de Buenos Aires. Sus intereses se enfocan en el mundo del emprendimiento, trabajo colaborativo, proyectos con impacto y el uso de tecnologías como medio para la obtención de resultados.",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/macarena",
      estado: true
    },
    {
      nombre: "Hector Torres",
      area: "Dirección",
      descripcion: "Doctor en Gestión del Diseño y TICs por la Universidad Politécnica de Valencia, España y Magister en Diseño Industrial por la Universidad Jaume I, Castellón, España. Ha orientado su actividad de I+D+i en el área de innovación y tecnologías digitales; entornos inteligentes y Smart Cities; y estudio de comunicación entre usuarios y entornos interactivos.",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/hector",
      estado: true
    },
    {
      nombre: "Hugo Durney",
      area: "Dirección",
      descripcion: "Académico universitario, docente e investigador en las áreas de Ingeniería Electrónica, Telecomunicaciones y Procesamiento Digital de Señales, con más de 15 años de experiencia vinculado al ámbito de educación superior incluyendo docencia, I+D+i y gestión directiva central universitaria.",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/hector",
      estado: true
    },
    {
      nombre: "Victor Escobar",
      area: "Dirección",
      descripcion: "Académico e investigador en Ingeniería Informática. Doctor en Informática por la Universidad de Granada, dentro del programa “ Diseño, Análisis y Aplicaciones en Sistemas Inteligentes”, España.",
      imagen: "http://via.placeholder.com/700x450",
      linkedin: "http://www.linkedin.com/hector",
      estado: true
    }
  ];

  constructor() {
  }

  getEquipo():Equipo[]{
    for(let i = 0; i < this.equipo.length; i++){
      if(this.equipo[i].estado){
        this.equipoActual.push(this.equipo[i]);
      }
    }
    return this.equipoActual;
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
  estado: boolean;
}
