import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

  private proyectos:Proyecto[] = [
    {
      nombre:"proyecto1",
      descripcion:"jhakjhakahkjahjkahkajhakja",
      categoria:"Textil",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 1",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto2",
      descripcion:"jhakjhakahkjahjkahkajhakja",
      categoria:"iot",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 2",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto3",
      descripcion:"jhakjhakahkjahjkahkajhakja",
      categoria:"SmartCities",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 3",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto4",
      descripcion:"jhakjhakahkjahjkahkajhakja",
      categoria:"iot",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 4",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto5",
      descripcion:"jhakjhakahkjahjkahkajhakja",
      categoria:"Textil",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 5",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto6",
      descripcion:"jhakjhakahkjahjkahkajhakja",
      categoria:"iot",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 6",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    }
  ];

  constructor() {
    console.log("Servicio Proyectos listo")
   }

   getProyectos():Proyecto[]{
     return this.proyectos;
   }

   getProyecto( idx:string ){
     return this.proyectos[idx];
   }

}

export interface Proyecto{
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen1: string;
  imagen2: string;
  imagen3: string;
  imagenGrupal: string;
  partner: string;
  partnerIMG: string;
  partnerMSJ: string;
}
