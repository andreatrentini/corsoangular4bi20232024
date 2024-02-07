import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { AlbumsCardGridComponent } from './albums-card-grid/albums-card-grid.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumsCardGridComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  artistId!: string;
  artist: any;
  albums: any;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.artistId = params['id'];
      this.spotifyService.getArtistAlbums(this.artistId).subscribe(data => {
        console.log(data);
        this.artist = data.items[0].artists[0];
        this.albums = data.items;
      })
    })    
  }

  cambiaArtista(idArtista: string) {
    this.router.navigate(['albums',idArtista]);
  }
}
