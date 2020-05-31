import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../films/services/film.service';
import { baseUrl, smallProfileSize, smallPosterSize } from 'src/app/shared/constants/app.paths';
import IFilm from '../../films/models/film';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {
  fullCast: any;
  smallProfileSize:string;
  baseUrl:string;
  selectedFilm:IFilm; 
  smallPosterSize:string;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    this.baseUrl = baseUrl,
    this.smallProfileSize = smallProfileSize;
    this.smallPosterSize = smallPosterSize;
  }

  ngOnInit(): void {
    this.filmService.getById(this.route.snapshot.params.id).subscribe(() => 
      this.selectedFilm = this.filmService.film
    );

    this.filmService.loadCast(this.route.snapshot.params.id).subscribe(result => 
      this.fullCast = result.cast
    );
  }
}
