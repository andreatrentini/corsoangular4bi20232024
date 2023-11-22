import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAirport } from './i-airport';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAirports(url: string): Observable<IAirport[]> {
    return this.httpClient.get<IAirport[]>(url);
  }
}
