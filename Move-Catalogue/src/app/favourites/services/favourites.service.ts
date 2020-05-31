import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import IFilm from 'src/app/catalogue/films/models/film';
import { crudApiUrl, crudApiKey } from 'src/app/shared/constants/app.paths';
import { tap, take } from 'rxjs/internal/operators';
import { HttpService } from 'src/app/shared/http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  films:IFilm[];

  constructor(private http: HttpClient) { }


  loadFavourites(localId?: string):any{
    return this.http.get<IFilm[]>(`${crudApiUrl}/favorites/${localId}.json?key=${crudApiKey}`);
   }

  add(localId:any, film: any): any {
    return this.http.put<any>(`${crudApiUrl}/favorites/${localId}/${film.id}.json?key=${crudApiKey}`, JSON.stringify(film));
  }

  remove(localId:any, film: any): any {
    return this.http.delete<any>(`${crudApiUrl}/favorites/${localId}/${film.id}.json?key=${crudApiKey}`);
  }

  updateNote(localId:any, film: any, personalNote:any): any {
    return this.http.patch<any>(`${crudApiUrl}/favorites/${localId}/${film.id}.json?key=${crudApiKey}`, JSON.stringify(personalNote));
  }
}
