import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumService:AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
