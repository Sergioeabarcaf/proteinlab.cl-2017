import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  private equipo:Equipo[] = [];

  constructor() { }

}

export interface Equipo{
  nombre: string;
  area: string;
  descripcion: string;
  imagen1: string;
  linkedin: string;
}
