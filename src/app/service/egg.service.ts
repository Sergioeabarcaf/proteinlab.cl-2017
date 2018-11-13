import { Injectable } from '@angular/core';
import { EquipoService } from './equipo.service';

@Injectable()
export class EggService {
  public nameSort: string[] = [];
  public names: string[] = [];

  constructor(private _equipoService: EquipoService) {
    this.nameSort = this._equipoService.getNames().sort();
  }

  validarOrden(): boolean {
    for (let i = 0; i < this.nameSort.length; i++) {
      if (this.nameSort[i] != this.names[i]) {
        return false;
      }
    }
    return true;
  }


}
