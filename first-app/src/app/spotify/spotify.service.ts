import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from './i-token';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  clientId: string = 'f412d48b9461494e9ec79dc2ed651967';
  clientSecret: string = 'e07fc0bc7fea4b79ac7290f7ef34c9e6';
  tokenBearer!: IToken;
  tokenDefined: boolean = false;

  private tokenSubject = new Subject<IToken>();
  tokenObservable = this.tokenSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getToken() {
    const body = new HttpParams()
    .set('grant_type', 'client_credentials')
    .set('client_id', this.clientId)
    .set('client_secret', this.clientSecret);

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    this.httpClient.post<IToken>('https://accounts.spotify.com/api/token', body.toString(), {headers}).subscribe((data: IToken) => {
      this.tokenBearer  = data;      
      if (!this.tokenDefined) {
       interval((this.tokenBearer.expires_in - 60) * 1000).subscribe(() => {
         this.getToken();
       });
      }
      this.tokenDefined = true;
      console.log(this.tokenBearer)
    });
  }

  searchArtist(artist: string) {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.tokenBearer.access_token);    

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {headers});
  }
}
