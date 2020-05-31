import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { webToken } from 'src/app/shared/constants/app.paths';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private authService: AuthenticationService){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
        const userLogged = localStorage.getItem(webToken) != null;
       
        return userLogged === route.data.isLogged;
    }
}