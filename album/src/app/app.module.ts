import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {AlbumsComponent} from './albums/albums.component';
import {CommentsComponent} from './comments/comments.component';
import {UsersComponent} from './users/users.component';
import {PhotosComponent} from './photos/photos.component';
import {TodosComponent} from './todos/todos.component';
import {UserComponent} from './users/user/user.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AlbumComponent} from './albums/album/album.component';
import {PostComponent} from './posts/post/post.component';
import {PhotoService} from "./services/photo.service";
import {AlbumService} from "./services/album.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    AlbumsComponent,
    CommentsComponent,
    UsersComponent,
    PhotosComponent,
    TodosComponent,
    UserComponent,
    NotfoundComponent,
    AlbumComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhotoService,AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
