import { Component } from '@angular/core';
import { ArtistSearchBarComponent } from './artist-search-bar/artist-search-bar.component';
import { ArtistCardGridComponent } from './artist-card-grid/artist-card-grid.component';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [ArtistSearchBarComponent, ArtistCardGridComponent],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  artistList: any;

  constructor(private spotifyService: SpotifyService) {}

  searchArtistOnSpotify(artistName: string): void {
    this.spotifyService.searchArtist(artistName).subscribe(data => {
      console.log(data);
      if (data.artists.items) {
        this.artistList = data.artists.items;
      }
    })
  }
}
