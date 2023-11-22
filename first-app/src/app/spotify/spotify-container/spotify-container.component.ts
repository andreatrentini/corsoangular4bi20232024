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

  tokenObserver: any;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getToken();
    this.tokenObserver = this.spotifyService.tokenObservable.subscribe((data: IToken) => {
      interval((data.expires_in - 100) * 1000).subscribe(() => {
        this.spotifyService.getToken();
      });
    });   
  }

  ngOnDestroy(): void {
    this.tokenObserver.unsubscribe();
  }
}