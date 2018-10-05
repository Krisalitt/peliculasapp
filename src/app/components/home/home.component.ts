import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  movies: any[7] = [];
  moviesKids: any[7] = [];
  moviestheater: any[7] = [];
  loading = true;
  constructor(private _pelService: PeliculasService, private _route: Router) {
    _pelService.getPopulars()
      .subscribe(
        (data: any) => {
          // console.log(data);
          for (let i = 0; i < 7; i++) {
            this.movies[i] = data.results[i];
          }
        });
    _pelService.getPopularsKids()
      .subscribe(
        (data: any) => {
          // console.log(data);
          for (let i = 0; i < 7; i++) {
            this.moviesKids[i] = data.results[i];
          }
        }
      );
    _pelService.getTheaterNow()
      .subscribe(
        (data: any) => {
          for (let i = 0; i < 7; i++) {
            this.moviestheater[i] = data.results[i];
            this.loading = false
          }
        }
      );
  }

  goToMovie(id: string) {
    this._route.navigate(['movie', id, 'home']);
  }
}
