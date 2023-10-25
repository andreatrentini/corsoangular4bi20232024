import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomEmitterService {

  numberEmitter = new Observable<number>(emitter => {
    setInterval(() => {
      let numero = Math.random();
      emitter.next(numero);
      if (numero < 0.1) {
        emitter.complete();
      }
    }, 1000)
  });

  constructor() { }
}
