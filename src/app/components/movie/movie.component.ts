import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styles: []
})
export class MovieComponent {
    movie: any = {};
    pagBack = '';
    classProgressArr: string[] = ['bg-danger', 'bg-success', 'bg-warning'];
    classProgress: string;
    progressFill: {};
    loading = true;
    constructor(private _peliService: PeliculasService,
        private _router: ActivatedRoute) {
        _router.params.subscribe(
            (param: any) => {
                this.pagBack = `/${param['pag']}`;
                _peliService.getMovie(param['id'])
                    .subscribe(
                        (data: any) => {
                            // console.log(data);
                            this.movie = data;
                            this.setStyleProgressBar();
                            this.loading = false;
                        });
            });
    }

    setStyleProgressBar() {
        if (this.movie.vote_average >= 0 && this.movie.vote_average <= 3.3) {
            this.classProgress = this.classProgressArr[0];
        } else if (this.movie.vote_average > 3.3 && this.movie.vote_average <= 6.6) {
            this.classProgress = this.classProgressArr[1];
        } else {
            this.classProgress = this.classProgressArr[2];
        }

        this.progressFill = { 'width': `${this.movie.vote_average * 10}%` };
        // this.progressFill = { 'width': '10%' };
    }

}
