import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authApiUrl, firebaseApiKey, signUpQuery } from 'src/app/shared/constants/app.paths';
import { UserRequestModel } from 'src/app/authentication/models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  register(email: string, password: string) {
    const userModel:UserRequestModel = { email, password };
    return this.http.post(`${authApiUrl}${signUpQuery}${firebaseApiKey}`,
    userModel);
  }
}
