import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomEmitterService {

  numberEmitter = new Observable<number>(emitter => {
    let timer = interval(1000).subscribe(numeroDiVolte => {
      let numero = Math.floor(Math.random() * 100);
      console.log(numero);
      if (numero < 10) {
        timer.unsubscribe();
        emitter.error('Errore');
      } else {
        if (numero > 90) {
          timer.unsubscribe();
          emitter.complete();        
        } else {
          emitter.next(numero);
        }
      }
    })
  });

  constructor() { }
}
