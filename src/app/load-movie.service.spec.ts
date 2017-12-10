import { TestBed, inject } from '@angular/core/testing';

import { LoadMovieService } from './load-movie.service';

describe('LoadMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadMovieService]
    });
  });

  it('should be created', inject([LoadMovieService], (service: LoadMovieService) => {
    expect(service).toBeTruthy();
  }));
});
