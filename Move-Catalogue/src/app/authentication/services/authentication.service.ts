import { Injectable, Output, EventEmitter } from '@angular/core';
import { webToken, userId, authApiUrl, authKey, authQuery } from 'src/app/shared/constants/app.paths';
import { UserRequestModel } from '../models/authentication.model';
import { take } from 'rxjs/internal/operators';
import IUser from 'src/app/users/models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedUser:any;

  constructor(
    private http: HttpService,
    private router: Router
  ) 
  {}

  private userState: IUser = null;
  
  @Output() public userChanged: EventEmitter<IUser | null> = new EventEmitter();

  set user(user: IUser | null) {
      this.userState = user;
      this.userChanged.emit(this.userState);
  }

  get user():IUser {
      return this.userState;
  }

  authenticate(model: UserRequestModel): void {
    this.http.post(`${authApiUrl}${authQuery}${authKey}`, 
        JSON.stringify(model)).pipe(take(1)).subscribe(response => {
        localStorage.setItem(webToken, response.idToken);
        localStorage.setItem(userId, response.localId);
        window.location.reload();
        this.router.navigate(['films']);
    });
  }

  login(email:string, password:string):void{
    localStorage.setItem('loggedUser', JSON.stringify({email, password}));
    this.loggedUser = {email, password};
    (document.getElementById('signOut').style.display = '');
    window.location.reload();
    this.router.navigate(['films']);
  }

  logout():void{
    event.preventDefault();
    localStorage.removeItem(webToken);
    localStorage.removeItem(userId);
    this.loggedUser = null;    
    (document.getElementById('signOut').style.display = 'none');
    window.location.reload();
  }

  getToken(): string {
    return localStorage.getItem(webToken);
  }

  getUserId(): string {
    return localStorage.getItem(userId);
  }
}
