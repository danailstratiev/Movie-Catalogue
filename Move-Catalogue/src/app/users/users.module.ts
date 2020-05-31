import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule
  ],
  exports: []
})
export class UsersModule { }
