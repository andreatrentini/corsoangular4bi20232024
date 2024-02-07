import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-albums-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './albums-card.component.html',
  styleUrl: './albums-card.component.css'
})
export class AlbumsCardComponent {
  @Input() album: any;
}
