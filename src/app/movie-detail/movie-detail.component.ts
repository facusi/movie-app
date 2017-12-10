import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Movie } from '../movie';
import { LoadMovieService } from '../load-movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  movie:Movie;
  isAdult = false;

  constructor(
    private loadMovieService: LoadMovieService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.loadMovieService.getMovie(params.get('id')))
      .subscribe(movie => {
        this.movie = movie;
        if(this.movie.mpaaRating.type === "M18" || 		this.movie.mpaaRating.type === "R21") {
						this.isAdult = true;
				} else {
						this.isAdult = false;
				}
      });
  }

  goBack(): void {
    this.location.back();
  }

  onEditMovieDetails(movie: Movie) {
    this.router.navigate(['/edit', movie._id]);
  }
}
