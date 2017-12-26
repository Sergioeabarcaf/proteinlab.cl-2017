import { Injectable } from '@angular/core';

@Injectable()
export class ProyectosService {

  private proyectos:Proyecto[] = [
    {
      nombre:"Posicionamiento Outdoor/Indoor",
      descripcion:"Proyecto colaborativo de carácter internacional en posicionamiento outdoor/indoor entre el Centre Tecnològic de Telecomunicacions de Catalunya (CTCC), España y Proteinlab UTEM. Proteinlab UTEM trabaja en el concepto, diseño y desarrollo de nuevos productos, aplicaciones y servicios orientados a usuarios finales basados en tecnologías de posicionamiento desarrolladas por el CTTC. El proyecto aborda un reto social: Permitir el acceso asequible a todo el potencial de las señales del sistema global de navegación por satélite (GNSS) civiles y se basa en un avance tecnológico que está alcanzando la madurez, el software definido por radio en dispositivos de bajo coste, junto con un diseño de producto sensible al contexto, centrado en el usuario y un ecosistema de innovación abierta liderado por una comunidad de usuarios y desarrolladores a travéz de un enfoque 'Bootom Up'. La implementación de este proyecto en Chile permitirá evaluar las diferentes capas técnicas, sociales y economicas de la tecnología en entornos reales y permitirá abordar retos sociales como la inclusión digital, contribuyendo a hacer mas asequible la tecnologia GNSS para usos civiles. Este proyecto aborda el diseño e implementación de dos prototipos experimentles de posicionamiento interior y exterior que permitirán evaluar la integración de tecnologías inteligentes y de diseño de productos, asi como el testeo de su interacción con usuarios reales. Los resultados del proyecto permitirán el diseño de aplicaciones y nuevos productos en diversos contextos tales como: Smart Cities, e-inclusion y e-Health o bien en contextos sociales, comercio, producción, servicios basados en localización (LBS)",
      categoria:"Investigacion",
      imagen1:"http://via.placeholder.com/700x450",
      imagen2:"http://via.placeholder.com/700x450",
      imagen3:"http://via.placeholder.com/700x450",
      imagenGrupal:"http://via.placeholder.com/700x450",
      integrantes:"Helene Schmelzer,Sergio Abarca",
      partner:"CTTC",
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
