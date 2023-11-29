import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { IArtist } from '../i-artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {

  artists!: IArtist[];

  constructor(private spotifyService: SpotifyService) { }

  search(artistName: HTMLInputElement) {
    this.spotifyService.searchArtist(artistName.value).subscribe((data: any) => {
      console.log(data);
      this.artists = data.artists.items;
      console.log(this.artists);
    });
  }
}
