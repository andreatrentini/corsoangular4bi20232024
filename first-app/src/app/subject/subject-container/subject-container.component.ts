import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-subject-container',
  templateUrl: './subject-container.component.html',
  styleUrls: ['./subject-container.component.css']
})
export class SubjectContainerComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.load();
  }

}
