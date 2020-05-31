import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/password-match';
import { UserService } from 'src/app/users/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public emailRegex:RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;
  form:FormGroup;
  
  constructor(private userService: UserService, private router: Router) { }
 
  handleSubmit({ email, passwords: { password } }):void {
    event.preventDefault();
    this.userService.register(email, password).subscribe(() => {
      this.router.navigate(['/signin']);
    }, console.error);
  }

  ngOnInit(): void {
  }
}