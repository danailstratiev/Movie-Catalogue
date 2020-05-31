import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import { DetailsComponent } from './films/film/details/details.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { MovieCastComponent } from './movieCast/movie-cast/movie-cast.component';
import { MovieReviewsComponent } from './movieReviews/movie-reviews/movie-reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilmsComponent, FilmComponent, DetailsComponent, MovieCastComponent, MovieReviewsComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FilmsComponent, FilmComponent, DetailsComponent, MovieCastComponent]
})
export class CatalogueModule { }
