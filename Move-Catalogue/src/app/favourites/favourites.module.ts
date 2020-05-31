import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteFilmsComponent } from './components/favourite-films/favourite-films.component';
import { CatalogueModule } from '../catalogue/catalogue.module';



@NgModule({
  declarations: [FavouriteFilmsComponent],
  imports: [
    CommonModule,
    CatalogueModule
  ],
  exports: [FavouriteFilmsComponent]
})
export class FavouritesModule { }
