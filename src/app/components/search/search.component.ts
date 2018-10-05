import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  movies: any[] = [];
  searchP = '';
  constructor(private _peliService: PeliculasService,
    private _route: ActivatedRoute) {
    this._route.params
      .subscribe(
        (data: any) => {
          if (data['text']) {
            this.searchP = data['text'];
            // console.log(data['text']);
            this.searchMovie(this.searchP);
            // console.log(this.searchP);
          }
        }
      );
  }

  searchMovie(termino: string) {
    this._peliService.searchMovie(termino)
      .subscribe((data: any) => {
        this.movies = data.results;
        // console.log(this.movies);
      });
  }
}
