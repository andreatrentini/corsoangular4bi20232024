import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
   constructor(private spotifyService: SpotifyService) {}

   ngOnInit(): void {
     this.spotifyService.getToken();
   }
}
