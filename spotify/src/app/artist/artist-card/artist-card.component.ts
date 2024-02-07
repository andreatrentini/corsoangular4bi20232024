import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {
  @Input() artist: any;

  constructor(private router: Router) {}

  goToAlbums(artistId: string) {
    this.router.navigate(['albums', artistId]);
  }
}
