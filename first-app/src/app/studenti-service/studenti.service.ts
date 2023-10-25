import { Injectable } from '@angular/core';
import { IStudente } from '../common/studente.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  studenti: IStudente[] = [{nome: 'Andrea', cognome: 'Trentini', classe: '4Bi'}];

  add(studente: IStudente):void  {
    this.studenti.push(studente);
  }

  delete(index: number): void {
    this.studenti.splice(index, 1);
  }

  constructor() { }
}
