import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../services/photo.service";
import {Photo} from "../models/photo";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  constructor(private photoService: PhotoService) {}
  private photos: Photo[] = [];
  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        (data) => this.photos = data,
        (error) => console.log(error)
      );
  }
}
