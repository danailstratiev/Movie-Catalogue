import { Component, OnInit } from '@angular/core';
import IFilm from '../../films/models/film';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../films/services/film.service';
import { baseUrl, smallProfileSize, smallPosterSize, largePoster } from 'src/app/shared/constants/app.paths';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss']
})
export class MovieReviewsComponent implements OnInit {
  smallProfileSize:string;
  baseUrl:string;
  selectedFilm:IFilm; 
  smallPosterSize:string;
  filmReviews:any;
  largePoster:string;
  
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    this.baseUrl = baseUrl,
    this.smallProfileSize = smallProfileSize;
    this.smallPosterSize = smallPosterSize;
    this.largePoster = largePoster;
  }

  ngOnInit(): void {
    this.filmService.getById(this.route.snapshot.params.id).subscribe(() => 
    this.selectedFilm = this.filmService.film
    );
    
    this.filmService.loadReviews(this.route.snapshot.params.id).subscribe(result => 
      this.filmReviews = result.results
    );
  }

}
