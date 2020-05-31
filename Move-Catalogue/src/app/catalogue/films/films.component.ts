import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IFilm from './models/film';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public pageNumber:number;
  public films:Observable<IFilm[]>;
  public library:IFilm[];

  constructor(private filmService: FilmService) 
  { 
    this.pageNumber = 1
  }

  ngOnInit(): void {
    this.filmService.loadFilms(this.pageNumber).subscribe(x => this.library = x.results);
  }

  loadMoreFilms():void{
    this.pageNumber++;
    this.filmService.loadFilms(this.pageNumber).subscribe(x => this.library = x.results);
  }
  loadLessFilms():void{
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.filmService.loadFilms(this.pageNumber).subscribe(x => this.library = x.results);
    }
  }
}
