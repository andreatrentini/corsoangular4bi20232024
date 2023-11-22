import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { IAirport } from '../i-airport';

@Component({
  selector: 'app-airport-table',
  templateUrl: './airport-table.component.html',
  styleUrls: ['./airport-table.component.css']
})
export class AirportTableComponent {

  airports!: IAirport[];

  constructor(private dataService: DataService) { }

  getAirports() {
    this.dataService.getAirports('/assets/airports.json').subscribe((airports: IAirport[]) => {
      this.airports = airports;
      console.log(this.airports);
    });
  }

}
