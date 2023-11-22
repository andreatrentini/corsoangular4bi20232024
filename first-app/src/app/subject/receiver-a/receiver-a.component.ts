import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogMessage } from '../log-message';
import { LogService } from '../log.service';

@Component({
  selector: 'app-receiver-a',
  templateUrl: './receiver-a.component.html',
  styleUrls: ['./receiver-a.component.css']
})
export class ReceiverAComponent implements OnInit, OnDestroy {

  logMessage!: LogMessage
  logObserver: any;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logObserver = this.logService.logObservable.subscribe((log: LogMessage) => {
      this.logMessage = log;
    });
  }; 

  ngOnDestroy(): void {
    this.logObserver.unsubscribe();
  }

  save() {
    this.logService.save();
    this.logService.add('Log salvato');
  }

  delete() {
    this.logService.delete();
    this.logService.add('Log eliminato');
  }

}
