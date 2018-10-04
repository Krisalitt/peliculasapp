import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: any): any {
    let url = 'assets/img/noimage.png';
    if (value) {
      url = `http://image.tmdb.org/t/p/w300${value}`;
    }
    return url;
  }

}
