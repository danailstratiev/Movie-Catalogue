import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';
import IFilm from '../../models/film';
import ICast from '../../models/cast';
import { baseUrl, defaultPosterSize, largePoster, profileParams, smallPosterSize } from 'src/app/shared/constants/app.paths';
import { FavouritesService } from 'src/app/favourites/services/favourites.service';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public selectedFilm:IFilm; 
  public baseUrl:string;
  public defaultPosterSize:string;
  public filmCast:any;
  public filmReviews:any;
  public recommendations:any
  public largePoster:string
  public profileParams:string;
  public smallPosterSize:string;
  public runTimeHours:number;
  public genres: any;
  public userId: string;
  public noteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private favouritesService: FavouritesService,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {
    this.baseUrl = baseUrl,
    this.defaultPosterSize = defaultPosterSize
    this.largePoster = largePoster;
    this.profileParams = profileParams;
    this.smallPosterSize = smallPosterSize;
    this.userId = this.authService.getUserId();
   }

  ngOnInit(): void {
    this.filmService.getById(this.route.snapshot.params.id).subscribe(() => 
    this.selectedFilm = this.filmService.film,
    );
   
    this.filmService.loadCast(this.route.snapshot.params.id).subscribe(result => 
      this.filmCast = result.cast.slice(0,10)
    );
    this.filmService.loadReviews(this.route.snapshot.params.id).subscribe(result => 
      this.filmReviews = result.results.slice(0,3)
    );
    this.filmService.loadRecommendations(this.route.snapshot.params.id).subscribe(result => 
      this.recommendations = result.results
    );
    this.filmService.getById(this.route.snapshot.params.id).subscribe(() => 
    this.runTimeHours = Math.floor(this.filmService.film.runtime/60)
    );
    this.filmService.getById(this.route.snapshot.params.id).subscribe(() => 
    this.genres = this.filmService.film.genres.map(genre => genre.name)
    );
    this.noteForm = this.fb.group({
      filmNote: ['']
    });
  }

  addToFavourites(userId:string, selectedFilm:any) {
    this.favouritesService.add(userId, selectedFilm).subscribe(response => {});
  }
  
  removeFromFavourites(userId:string, selectedFilm:any) {
    this.favouritesService.remove(userId, selectedFilm).subscribe(response => {});
  }

  openModal(){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  closeModal(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  submitNoteForm(userId:string, selectedFilm:any, personalNote: any) :void{
    let noteObj = {personalNote};
    this.favouritesService.updateNote(userId, selectedFilm, noteObj).subscribe(response => {});
    this.closeModal();
  }
}

