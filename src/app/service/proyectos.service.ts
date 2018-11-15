import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';

@Injectable()
export class ProyectosService {

  public proyectosPropios: Proyecto[] = [];
  public proyectosVinculacion: Proyecto[] = [];
  public proyectosApoyo: Proyecto[] = [];
  public loadingpropio = true;
  public loadingvinculacion = true;
  public loadingapoyo = true;

  public proyecto: Proyecto;

  constructor(private http: HttpClient) {
    this.getProyectosApoyo();
    this.getProyectosPropios();
    this.getProyectosVinculacion();
  }

  getProyectosPropios() {
    return new Promise( (resolve, reject) => {
      if (this.proyectosPropios.length === 0) {
       this.http.get('https://webproteinlab.firebaseio.com/proyectos/propio.json').subscribe((proyectos: Proyecto[]) => {
         this.proyectosPropios = proyectos;
         this.proyectosPropios = this.randomArray(this.proyectosPropios);
         this.loadingpropio = false;
         console.log(`loading propio ${ this.loadingpropio }`);
         resolve();
       });
      }else {
        this.proyectosPropios = this.randomArray(this.proyectosPropios);
        resolve();
      }
    });
  }

  getProyectosVinculacion() {
    return new Promise( (resolve, reject) => {
      if (this.proyectosVinculacion.length === 0) {
       this.http.get('https://webproteinlab.firebaseio.com/proyectos/vinculacion.json').subscribe((proyectos: Proyecto[]) => {
         this.proyectosVinculacion = proyectos;
         this.proyectosVinculacion = this.randomArray(this.proyectosVinculacion);
         this.loadingvinculacion = false;
         console.log(`loading vinculacion ${ this.loadingvinculacion }`);
         resolve();
       });
      }else {
        this.proyectosVinculacion = this.randomArray(this.proyectosVinculacion);
        resolve();
      }
    });
  }

  getProyectosApoyo() {

    return new Promise( (resolve, reject) => {
      if (this.proyectosApoyo.length === 0) {
       this.http.get('https://webproteinlab.firebaseio.com/proyectos/apoyo.json').subscribe((proyectos: Proyecto[]) => {
         this.proyectosApoyo = proyectos;
         this.proyectosApoyo = this.randomArray(this.proyectosApoyo);
         this.loadingapoyo = false;
         console.log(`loading apoyo ${ this.loadingapoyo }`);
         resolve();
       });
      }else {
        this.proyectosApoyo = this.randomArray(this.proyectosApoyo);
        resolve();
      }
    });
  }

  randomArray(array: Proyecto[]) {
    let rand = 0;
    let aux: Proyecto;
    for (let i = 0; i < array.length; i++) {
      rand = Math.floor(Math.random() * array.length);
      aux = array[i];
      array[i] = array[rand];
      array[rand] = aux;
    }
    return array;
  }

  getProyecto( topic: string, idx: string ) {
    if (topic === 'propio') {
      if (this.proyectosPropios.length === 0) {
        this.getProyectosPropios().then( () => {
          this.proyecto = this.proyectosPropios.filter(proyecto => proyecto.id === idx)[0];
        });
      } else {
        this.proyecto = this.proyectosPropios.filter(proyecto => proyecto.id === idx)[0];
      }
     }
    if (topic === 'vinculacion') {
      if (this.proyectosVinculacion.length === 0) {
        this.getProyectosVinculacion().then( () => {
          this.proyecto = this.proyectosVinculacion.filter(proyecto => proyecto.id === idx)[0];
        });
      } else {
        this.proyecto = this.proyectosVinculacion.filter(proyecto => proyecto.id === idx)[0];
      }
     }
    if (topic === 'apoyo') {
      if (this.proyectosApoyo.length === 0) {
        this.getProyectosApoyo().then( () => {
          this.proyecto = this.proyectosApoyo.filter(proyecto => proyecto.id === idx)[0];
        });
      } else {
        this.proyecto = this.proyectosApoyo.filter(proyecto => proyecto.id === idx)[0];
      }
     }
  }
}
