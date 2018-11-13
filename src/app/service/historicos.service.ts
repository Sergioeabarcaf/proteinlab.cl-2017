import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HistoricosService {

  public equipoHistorico: Equipo[] = [];

  constructor(private http: HttpClient) { }

  getEquipoHistorico() {
    this.http.get('https://webproteinlab.firebaseio.com/equipo/historico.json').subscribe((equipo: Equipo[]) => {
      this.equipoHistorico = equipo;
    });
    return this.equipoHistorico;
  }
}
