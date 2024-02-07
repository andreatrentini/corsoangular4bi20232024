import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artist-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './artist-search-bar.component.html',
  styleUrl: './artist-search-bar.component.css'
})
export class ArtistSearchBarComponent {
  @Output() searchArtist = new EventEmitter<string>();

  searchArtistClick(artistName: HTMLInputElement):void {
    if (artistName.value != '') {
      this.searchArtist.emit(artistName.value);
    }
  }
}
