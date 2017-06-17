import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {PhotoService} from "./photo.service";
import {Album} from "../models/album";
@Injectable()
export class AlbumService {
  private album: Album[] = [];

  constructor(private http: Http,
              private photoService: PhotoService) {
  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
      .map((response: Response) => {
          const data = response.json();
          for (let item of data) {
            let key = new Album();
            key.id = item.id;
            key.userId = item.userId;
            key.title = item.title;
            this.photoService.getAlbumPhotos(item.id)
              .subscribe(
                (data) => key.photos = data,
                (error) => console.log(error)
              );
            this.album.push(key);
          }
          return this.album;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}

