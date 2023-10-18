import { Component } from '@angular/core';
import { Studente } from 'src/app/common/studente.class';

@Component({
  selector: 'app-studente-parent',
  templateUrl: './studente-parent.component.html',
  styleUrls: ['./studente-parent.component.css']
})
export class StudenteParentComponent {
  studenti: Studente[] = [];  

  aggiungiStudente(studente: Studente): void {
    this.studenti.push(studente);
    console.log(this.studenti);
  }

  elimina(i:number): void {
    this.studenti.splice(i, 1);
  }
}
