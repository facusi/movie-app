import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Movie } from './movie';

@Injectable()
export class LoadMovieService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private moviesUrl = 'http://localhost:3000/api/movies';  // URL to web api
  private movieUrl = 'http://localhost:3000/api/movie';  // URL to web api

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => {
                 console.log('response: ' + response.json());
                 return response.json() as Movie[]
               })
               .catch(this.handleError);
  }

  getMovie(id) {
    const url = `${this.movieUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Movie)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.movieUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteMovie(id: any): Promise<void> {
    const url = `${this.movieUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Movie> {
    return this.http
      .post(this.moviesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Movie)
      .catch(this.handleError);
  }

  update(movie: Movie): Promise<Movie> {
    const url = `${this.movieUrl}/${movie._id}`;
    return this.http
      .put(url, JSON.stringify(movie), {headers: this.headers})
      .toPromise()
      .then(() => movie)
      .catch(this.handleError);
  }

  updateMovie(movie: Movie, id: any): Promise<Movie> {
    const url = `${this.movieUrl}/${id}`;
    return this.http
      .put(url, JSON.stringify(movie), {headers: this.headers})
      .toPromise()
      .then(() => movie)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
