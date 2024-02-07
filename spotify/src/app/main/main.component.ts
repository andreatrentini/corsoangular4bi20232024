import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {

  // Proprietà usata per modificare l'applicazione in base alla presenza nel servizio del token
  tokenOK: boolean = false;

  // Observer che si metterà ad ascoltare il servizio per vedere se il token è arrivato
  // Dichiaramo una proprietà di tipo Subscription per poter chiedere la sottoscrizione
  // quando il componente verrà distrutto (es. esco dall'app)
  private tokenOkObserver = new Subscription();

   constructor(private spotifyService: SpotifyService) {}

   ngOnInit(): void {
    // Metto l'observer in ascolto di messaggi (next()) da parte del Subject del servizio Spotify
    this.tokenOkObserver = this.spotifyService.tokenArrived.subscribe((arrived: boolean) => {
      // TokenOK divverà true solo quando verrà eseguito il metodo next nel servizio
      this.tokenOK = arrived;
    })
     this.spotifyService.getToken();
   }

   ngOnDestroy(): void {
    // Termino l'osservazione del subject del servizio Spotify quando distruggo il component
    // Importante!!! Se non lo faccio l'bserver continuerà a occupare risorse (memoria/clacolo)
    // anche quando esco dall'applicazione
     this.tokenOkObserver.unsubscribe();
   }
}
