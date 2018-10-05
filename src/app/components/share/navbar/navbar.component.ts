import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private _route: Router) { }

  seachMovie(text: string) {
    console.log(text);
    this._route.navigate(['search', text]);
  }

}
