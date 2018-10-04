import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(private _peliService: PeliculasService) {
    this._peliService.searchMovie('batman')
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  searchMovie(termino: string) {
    console.log(termino);
  }

}
