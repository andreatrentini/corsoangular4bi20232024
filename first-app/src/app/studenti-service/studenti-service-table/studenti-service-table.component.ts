import { Component, OnInit } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { IStudente } from 'src/app/common/studente.interface';

@Component({
  selector: 'app-studenti-service-table',
  templateUrl: './studenti-service-table.component.html',
  styleUrls: ['./studenti-service-table.component.css']
})
export class StudentiServiceTableComponent implements OnInit {

  studenti!: IStudente[];

  constructor(private studentiService: StudentiService) {}

  ngOnInit(): void {
    this.studenti = this.studentiService.studenti;
  }

}
