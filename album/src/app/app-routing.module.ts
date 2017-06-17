import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component'
import {UsersComponent} from './users/users.component'
import {UserComponent} from './users/user/user.component'
import {AlbumsComponent} from './albums/albums.component'
import {AlbumComponent} from './albums/album/album.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './posts/post/post.component'
import {PhotosComponent} from './photos/photos.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children: [
      { path: ':id', component: UserComponent }
    ]
  },
  { path: 'albums', component: AlbumsComponent,
    children: [
      { path: ':id', component: AlbumComponent }
    ]
  },
  { path: 'posts', component: PostsComponent},
  { path: 'posts/:id', component: PostComponent},
  { path: 'photos', component: PhotosComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
