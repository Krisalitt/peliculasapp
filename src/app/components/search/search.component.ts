import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  movies: any[] = [];
  constructor(private _peliService: PeliculasService) {
  }

  searchMovie(termino: string) {
    this._peliService.searchMovie(termino)
      .subscribe((data: any) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  }
}
