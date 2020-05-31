import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouritesModule } from './favourites/favourites.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CatalogueModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    FavouritesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
