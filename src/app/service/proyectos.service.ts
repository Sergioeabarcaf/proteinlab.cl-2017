import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

  private proyectos:Proyecto[] = [
    {
      nombre:"proyecto1",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid",
      categoria:"Textil",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      partner:"Soy el dueño 1",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      nombre:"proyecto2",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
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
