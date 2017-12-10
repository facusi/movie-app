import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { LoadMovieService } from './load-movie.service';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/moviegrid',
        pathMatch: 'full'
      },
      {
        path: 'moviegrid',
        component: MovieGridComponent
      },
      {
        path: 'detail/:id',
        component: MovieDetailComponent
      },
      {
        path: 'edit/:id',
        component: EditMovieComponent
      },
      {
        path: 'new',
        component: NewMovieComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    MovieGridComponent,
    MovieDetailComponent,
    EditMovieComponent,
    NewMovieComponent
  ],
  providers: [LoadMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
