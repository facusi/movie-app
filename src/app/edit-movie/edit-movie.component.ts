import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../Movie';
import { LoadMovieService } from '../load-movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  movieId;
  audiences = ['PG','PG13','NC16','M18','R21'];
  languages = ['English', 'Hindi', 'Mandarin', 'Tamil', 'Korean'];
  userratings = ['1', '2', '3', '4', '5'];

  constructor(private movieService: LoadMovieService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
    this.movieId = params['id'];
    this.movieService.getMovie(this.movieId).then(
      movie => {
        this.movie = movie;
      });
    // this.movieService.getMovie(this.movieId)
    // 		.subscribe(movie => {
    //             	this.movie = movie;
    //             	console.log('movie loaded: '+ movie);
    //     	});
    });
  }

  onSubmitMovieDetails(updatedMmovie) {
    console.log('Update Movie:'+updatedMmovie);
    this.movieService.updateMovie(updatedMmovie, this.movieId)
      .then(movie => {
          const link = ['/'];
          this.router.navigate(link);
      });
  }

  onDeleteMovie() {
    this.movieService.deleteMovie(this.movieId)
      .then(movie => {
        const link = ['/'];
        this.router.navigate(link);
      });
  }
}
