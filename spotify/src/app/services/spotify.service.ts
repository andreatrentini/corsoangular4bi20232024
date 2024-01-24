import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from '../interfaces/i-token';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId: string = '0b44308620914be19b260abd79d730ba';
  private clientSecret: string = '070063699b854a33bd2d40ea3aac358e';

  private token!: IToken;

  private firstToken: boolean = true;
  
  constructor(private httpClient: HttpClient) { }

  getToken(): void {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
      
    let body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);
    
    let url = 'https://accounts.spotify.com/api/token';

    this.httpClient.post<IToken>(url, body.toString(), {headers: headers}).subscribe((dati: IToken) => {
      this.token = {...dati, authorization: dati.token_type + ' ' + dati.access_token};
      
      //this.token.authorization = 'Bearer ' + this.token.access_token;

      if (this.firstToken) {
        this.firstToken = false;
        interval((this.token.expires_in -5) * 1000).subscribe(() => {
          this.getToken();
        })
      }
      console.log(this.token);
    })
  }

  searchArtist(name: string): Observable<any> {
    /*
    curl --request GET \
    --url 'https://api.spotify.com/v1/search?q=imagine+dragons&type=artist' \
    --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
    */

    let url = 'https://api.spotify.com/v1/search?q=' + name + '&type=artist';

    let headers = new HttpHeaders()
      .set('Authorization', this.token.authorization )

    return this.httpClient.get(url, {headers: headers});

  }

}
