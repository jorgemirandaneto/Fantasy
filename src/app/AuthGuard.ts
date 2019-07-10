import { Injectable, EventEmitter, Output } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private jwtHelper: JwtHelper, private router: Router) { }

    canActivate() {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            // logged in so return true
       
            console.log(true);
            return true;
        }
        // not logged in so redirect to login page with the return url

        this.router.navigate(['Login']);
        return false;
    }
}