import { Injectable } from '@angular/core';
import { LogMessage } from './log-message';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logMessage: LogMessage[] = [];

  constructor() { }
}
