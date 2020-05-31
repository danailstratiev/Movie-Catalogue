import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import IFilm from 'src/app/catalogue/films/models/film';

@Component({
  selector: 'app-favourite-films',
  templateUrl: './favourite-films.component.html',
  styleUrls: ['./favourite-films.component.scss']
})
export class FavouriteFilmsComponent implements OnInit {
  userId:string;
  favouriteFims:IFilm[];

  constructor(
    private favouritesService: FavouritesService,
    private authService: AuthenticationService
    ) {
    this.userId = authService.getUserId(); 
    }

  ngOnInit(): void {
    this.favouritesService.loadFavourites(this.userId)
    .subscribe(result => this.favouriteFims = Object.values(result)
    );
  }

}
