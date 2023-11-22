import { Component } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-emitter',
  templateUrl: './log-emitter.component.html',
  styleUrls: ['./log-emitter.component.css']
})
export class LogEmitterComponent {

  // Inietto il servizio nel costruttore del componente
  constructor(private logService: LogService) { }

  log(message: string) {
    this.logService.add(message);
  }

}
