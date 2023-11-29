import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { interval } from 'rxjs';
import { IToken } from '../i-token';

@Component({
  selector: 'app-spotify-container',
  templateUrl: './spotify-container.component.html',
  styleUrls: ['./spotify-container.component.css']
})
export class SpotifyContainerComponent implements OnInit, OnDestroy {  

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getToken();    
  }

  ngOnDestroy(): void {
    
  }
}