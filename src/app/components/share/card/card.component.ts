import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {
  @Input() movies: any[] = [];
  constructor(private _route: Router) {
  }

  goToMovie(id: string) {
    this._route.navigate(['movie', id]);
  }
}
