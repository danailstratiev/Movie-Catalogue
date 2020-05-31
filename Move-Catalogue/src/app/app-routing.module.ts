import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './catalogue/films/films.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { RegisterComponent } from './authentication/register/register.component';
import { FavouriteFilmsComponent } from './favourites/components/favourite-films/favourite-films.component';
import { DetailsComponent } from './catalogue/films/film/details/details.component';


const routes: Routes = [
  {path: 'films', component: FilmsComponent},
  {
    path: 'signin', 
    component: LoginComponent,
    canActivate: [AuthGuard],
    data:{
      isLogged:false
    }
  },
  {
    path: 'signup', 
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data:{
      isLogged:false
    }
  },
  {
    path: 'favourites/:id',
    pathMatch: 'full',
    component: FavouriteFilmsComponent,
    canActivate: [AuthGuard],
    data:{
      isLogged:true
    },
    children:[        
      {
          path: 'film/details/:id',
          pathMatch: 'full',
          component: DetailsComponent
      }       
    ],     
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
