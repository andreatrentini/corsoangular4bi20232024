import { Component, Input } from '@angular/core';
import { AlbumsCardComponent } from '../albums-card/albums-card.component';

@Component({
  selector: 'app-albums-card-grid',
  standalone: true,
  imports: [AlbumsCardComponent],
  templateUrl: './albums-card-grid.component.html',
  styleUrl: './albums-card-grid.component.css'
})
export class AlbumsCardGridComponent {
  @Input() albumList:any;
}
