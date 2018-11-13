import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProyectosService {

  public proyectosPropios: Proyecto[] = [];
  public proyectosVinculacion: Proyecto[] = [];
  public proyectosApoyo: Proyecto[] = [];
  public loading = true;

  constructor(private http: HttpClient) {}

  getProyectosPropios(): Proyecto[] {
    if (this.proyectosPropios.length === 0) {
     this.http.get('https://webproteinlab.firebaseio.com/proyectos/propio.json').subscribe((proyectos: Proyecto[]) => {
       this.proyectosPropios = proyectos;
       this.proyectosPropios = this.randomArray(this.proyectosPropios);
     });
    }else {
      this.proyectosPropios = this.randomArray(this.proyectosPropios);
    }
    return null;
  }

  getProyectosVinculacion(): Proyecto[] {
    if (this.proyectosVinculacion.length === 0) {
     this.http.get('https://webproteinlab.firebaseio.com/proyectos/vinculacion.json').subscribe((proyectos: Proyecto[]) => {
       this.proyectosVinculacion = proyectos;
       this.proyectosVinculacion = this.randomArray(this.proyectosVinculacion);
     });
    }else {
      this.proyectosVinculacion = this.randomArray(this.proyectosVinculacion);
    }
    return null;
  }

  getProyectosApoyo(): Proyecto[] {
    if (this.proyectosApoyo.length === 0) {
     this.http.get('https://webproteinlab.firebaseio.com/proyectos/apoyo.json').subscribe((proyectos: Proyecto[]) => {
       this.proyectosApoyo = proyectos;
       this.proyectosApoyo = this.randomArray(this.proyectosApoyo);
     });
    }else {
      this.proyectosApoyo = this.randomArray(this.proyectosApoyo);
    }
    return null;
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
}
