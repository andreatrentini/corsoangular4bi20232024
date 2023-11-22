import { Injectable } from '@angular/core';
import { LogMessage } from './log-message';
import { Subject } from 'rxjs';
import { ILogMessage } from './i-log-message';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logMessages: LogMessage[] = [];
  private logSubject = new Subject<LogMessage>();
  logObservable = this.logSubject.asObservable();

  add(message: string) {
    const logMessage = new LogMessage(message);
    this.logMessages.push(logMessage);
    console.log(this.logMessages);
    this.logSubject.next(logMessage);
  }

  getAllLogs(): LogMessage[] {
    return this.logMessages.slice();
  }

  save() {
    localStorage.setItem('logMessages', JSON.stringify(this.logMessages));
  }

  load() {
    const logMessagesJSON = localStorage.getItem('logMessages');
    if (logMessagesJSON) {
      let loadedMessages = JSON.parse(logMessagesJSON);
      this.logMessages = loadedMessages.map((message: ILogMessage) => {
        return new LogMessage(message.message, new Date(message.date));
      });
    }
  }

  delete() {
    localStorage.removeItem('logMessages');
    this.logMessages = [];
  }

  constructor() { }
}
