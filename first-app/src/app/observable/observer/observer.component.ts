import { Component } from '@angular/core';
import { RandomEmitterService } from '../random-emitter.service';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent {

  numeri: number[] = [];
  stato: string = 'Non stai osservando';

  constructor(private randomService: RandomEmitterService) { }

  observer: any;

  osserva():void {
    this.stato = 'Stai osservando';
    this.observer = this.randomService.numberEmitter.subscribe({
      next: numero => {
        this.numeri.push(numero)
        this.stato = 'Stai ricevendo numeri.';
      },
      error: err => {
        this.stato = 'Errore';
        this.observer.unsubscribe();
      },
      complete: () => {
        this.stato = 'Hai smesso di osservare';
        this.observer.unsubscribe();
      }
    })
  }
    
}
