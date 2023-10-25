import { Component } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studenti-service-form',
  templateUrl: './studenti-service-form.component.html',
  styleUrls: ['./studenti-service-form.component.css']
})
export class StudentiServiceFormComponent {

  constructor(private studentiService: StudentiService) {}

  aggiungiStudente(inputNome: HTMLInputElement, inputCognome: HTMLInputElement, inputClasse:HTMLInputElement): void {
    let nuovoStudente: IStudente = {
      nome: inputNome.value,
      cognome: inputCognome.value,
      classe: inputClasse.value,
    };
    inputNome.value = '';
    inputCognome.value = '';
    inputClasse.value = '';

    this.studentiService.add(nuovoStudente);
  }
}
