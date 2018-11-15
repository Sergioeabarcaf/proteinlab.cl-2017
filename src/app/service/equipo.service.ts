import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EquipoService {

  public nombres: string[] = [];
  public equipo: Equipo[] = [];

  constructor(private http: HttpClient) {
    this.getEquipo();
  }

  getEquipo() {
    this.http.get('https://webproteinlab.firebaseio.com/equipo/actual.json').subscribe((equipo: Equipo[]) => {
      this.equipo = equipo;
    });
    return null;
  }

  getNames(): string[] {
    if (this.nombres.length === 0) {
      for (let n = 0; n < this.equipo.length; n++) {
        this.nombres.push(this.equipo[n].nombre);
      }
    }
    return this.nombres;
  }
}
