import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { log } from 'util';
import { UserRequestModel } from '../models/authentication.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public emailRegex:RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
    document.getElementById('myAccount').style.display = '';
  }

  submitLoginForm(email:string, password:string) :void{
    let loginModel:UserRequestModel = {
        email,
        password
    }    
    document.getElementById('myAccount').style.display = 'none';

    this.authService.authenticate(loginModel);
  }
}
