import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  movies: any[7] = [];
  constructor(private _pelService: PeliculasService) {
    _pelService.getPopulares()
      .subscribe(
        (data: any) => {
          for (let i = 0; i < 7; i++) {
            this.movies[i] = data.results[i];
          }
          // this.movies = data.results;
          console.log(this.movies);
      });
   }
}
