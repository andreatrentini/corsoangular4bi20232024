import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  artistId!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.artistId = params['id'];
    })    
  }

  cambiaArtista(idArtista: string) {
    this.router.navigate(['albums',idArtista]);
  }
}
