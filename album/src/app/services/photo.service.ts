import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PhotoService {
  constructor(private http: Http) {
  }

  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map((response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getAlbumPhotos(albumId: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
      .map((response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}
