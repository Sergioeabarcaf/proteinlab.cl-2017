import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

  private proyectos:Proyecto[] = [
    {
      nombre:"proyecto1",
      descripcion:"Cacha que chuta el descueve apitutao yapa sale rayar la papa andar a pata apiñarse. Cachero bronca iñipiñi pillín picada el descueve hacer gancho en la pitilla levantao de raja latero apagar tele. Bacán compa promo cuático chuta doblao apestao pinganilla tula flaite aguja patiperro dale chela. Seco nica pasao a gladiolo, patiperro chanta guata hacer chupete charquicán cafiche vender la pescá chamullento marepoto filo. Echarse al pollo cachero sacar pica rayar la papa talla. Caleta pinganilla carrete chuta, jarana apitutao pancorazo nica mina quina arrugón. Como husca chucha chispeza ni ahí luca Perro muerto copete el descueve paquear ene marepoto comprar terreno tata. Uña y mugre guacala quina, embarrarla un palo colao tuto. Caleta es un cacho estar pal gato estar flor, pije atao apañar bronca cuático piyama de palo kilterri chomba chulongo pagar el piso te creo. Apagar tele polola tusunami me estai...? puchito Apiñarse po pucha, tocando el violín chorear buche nica como piojo aguja pa",
      categoria:"Textil",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Diego Vilchez,Helene Schmelzer,Carla Perez",
      partner:"Soy el dueño 1",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      nombre:"proyecto2",
      descripcion:"Este es un generador de texto simulado para distintos usos, estilo Lorem Ipsum pero con alma chilena. Cacha que chuta el descueve apitutao yapa sale rayar la papa andar a pata apiñarse. Cachero bronca iñipiñi pillín picada el descueve hacer gancho en",
      categoria:"iot",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Victor Meza,Francisco Sanchez,Josue Alarcon",
      partner:"Soy el dueño 2",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto3",
      descripcion:"Este es un generador de texto simulado para distintos usos, estilo Lorem Ipsum pero con alma chilena. Cacha que chuta el descueve apitutao yapa sale rayar la papa andar a pata apiñarse. Cachero bronca iñipiñi pillín picada el descueve hacer gancho enelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      categoria:"SmartCities",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Sergio Abarca,Francis Soto,Paz Ayala",
      partner:"Soy el dueño 3",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto4",
      descripcion:"Este es un generador de texto simulado para distintos usos, estilo Lorem Ipsum pero con alma chilena. Cacha que chuta el descueve apitutao yapa sale rayar la papa andar a pata apiñarse. Cachero bronca iñipiñi pillín picada el descueve hacer gancho en",
      categoria:"iot",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Victor Meza,Sergio Abarca,Josue Alarcon,Francis Soto,Francisco Sanchez",
      partner:"Soy el dueño 4",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto5",
      descripcion:"Este es un generador de texto simulado para distintos usos, estilo Lorem Ipsum pero con alma chilena. Cacha que chuta el descueve apitutao yapa sale rayar la papa andar a pata apiñarse. Cachero bronca iñipiñi pillín picada el descueve hacer gancho en",
      categoria:"Textil",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Paz Ayala,Carla Perez,Helene Schmelzer",
      partner:"Soy el dueño 5",
      partnerIMG:"http://via.placeholder.com/450x450",
      partnerMSJ:"blajlaklaklaklak"
    },
    {
      nombre:"proyecto6",
      descripcion:"Este es un generador de texto simulado para distintos usos, estilo Lorem Ipsum pero con alma chilena. Cacha que chuta el descueve apitutao yapa sale rayar la papa andar a pata apiñarse. Cachero bronca iñipiñi pillín picada el descueve hacer gancho en",
      categoria:"iot",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Victor Meza,Paz Ayala",
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

   getProyectoLimit( x:number ){
     let limit:Proyecto[] = [];
     for(let i=0;i<x;i++){
       limit[i] = this.proyectos[i];
     }
     return limit;
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
  integrantes: string;
  partner: string;
  partnerIMG: string;
  partnerMSJ: string;
}
