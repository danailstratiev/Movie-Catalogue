import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import IFilm from '../models/film';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators';
import ICast from '../models/cast';
import { filmsUrl, apiKey, popularPath, creditsPath, reviewsPath, recommendationsPath, apiQueryString } from 'src/app/shared/constants/app.paths';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  library: IFilm[];
  film: IFilm;
  filmCast: any;


  constructor(
    private httpClient: HttpClient
  ) { }
 
  getById(id?: number): Observable<IFilm> {
    return this.httpClient.get<IFilm>(`
    ${filmsUrl}${id}${apiKey}
    `)
    .pipe(
      tap((result) => {
        this.film = (result);
      })
    );
  }

 loadFilms(pageNum:number):any{
  return this.httpClient.get<any>(`${filmsUrl}${popularPath}${apiKey}${apiQueryString}${pageNum}`);
 }
 
 loadCast(id:string):any{
  return this.httpClient.get<any>(`${filmsUrl}${id}${creditsPath}${apiKey}`)
  ;
 }

 loadReviews(id:string):any{
  return this.httpClient.get<any>(`${filmsUrl}${id}${reviewsPath}${apiKey}`)
  ;
 }
 
 loadRecommendations(id:string):any{
  return this.httpClient.get<any>(`${filmsUrl}${id}${recommendationsPath}${apiKey}`)
  ;
 }
}


