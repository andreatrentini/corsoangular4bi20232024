import { Component, Input } from '@angular/core';
import { ArtistCardComponent } from '../artist-card/artist-card.component';

@Component({
  selector: 'app-artist-card-grid',
  standalone: true,
  imports: [ArtistCardComponent],
  templateUrl: './artist-card-grid.component.html',
  styleUrl: './artist-card-grid.component.css'
})
export class ArtistCardGridComponent {
  @Input() artistList: any;
}
