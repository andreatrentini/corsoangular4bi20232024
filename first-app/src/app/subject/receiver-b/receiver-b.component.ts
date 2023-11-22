import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogMessage } from '../log-message';
import { LogService } from '../log.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-receiver-b',
  templateUrl: './receiver-b.component.html',
  styleUrls: ['./receiver-b.component.css']
})
export class ReceiverBComponent implements OnInit, OnDestroy {
  logMessage!: LogMessage;
  logMessages!: LogMessage[];

  logObserver: any;

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logObserver = this.logService.logObservable.subscribe((log: LogMessage) => {
      this.logMessage = log;
      timer(3000).subscribe(() => {
        this.logMessage = null as any;
      });
    });
  }

  ngOnDestroy(): void {
    this.logObserver.unsubscribe();
  }

  getAllLogs() {
    this.logService.add('Log visualizzati');
    this.logMessages = this.logService.getAllLogs();
  }

}
