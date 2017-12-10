import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Movie';
import { LoadMovieService } from '../load-movie.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {
  selectedMovie: Movie;
  movies: Movie[];

  constructor(private movieService: LoadMovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => {
        this.movies = movies;
        console.log('movies loaded: ' + movies);
     });
  }

  onSelectMovie(movie: Movie) {
    this.router.navigate(['/detail', movie._id]);
  }

}
