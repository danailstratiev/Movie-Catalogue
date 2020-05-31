import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './films/film/details/details.component';
import { MovieCastComponent } from './movieCast/movie-cast/movie-cast.component';
import { MovieReviewsComponent } from './movieReviews/movie-reviews/movie-reviews.component';


const routes: Routes = [
  {
      path: 'films',
      children:[        
        {
            path: 'film/details/:id',
            pathMatch: 'full',
            component: DetailsComponent
        }       
      ],      
  },
  {
    path: 'movie-cast/:id',
    pathMatch: 'full',
    component: MovieCastComponent
  },
  {
    path: 'movie-reviews/:id',
    pathMatch: 'full',
    component: MovieReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CatalogueRoutingModule { }
