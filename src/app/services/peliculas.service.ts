import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '87e089adb74f6a896637dcbf04753774';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { console.log('conecta3'); }

  getPopulars() {

    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(
        res => res.json()
      ));
  }

  getPopularsKids() {

    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(
        res => res.json()
      ));
  }

  getTheaterNow() {

    const hasta = new Date();
    const desde = new Date();
    const desdestr = `${desde.getFullYear()}-${desde.getMonth()}-${desde.getDay()}`;
    const hastastr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDay()}`;
    // /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdestr}&primary_release_date.lte=${hastastr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this.jsonp.get(url)
      .pipe(map(
        res => res.json()
      ));
  }

  searchMovie(texto: string) {

    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(
        res => res.json()
      ));
  }

  getMovie(id: string) {
    // movie/383498?api_key=87e089adb74f6a896637dcbf04753774&language=es
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this.jsonp.get(url)
      .pipe(map(
        res => res.json()
      ));
  }



}
