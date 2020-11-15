import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../Service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, private authservice: AuthenticationService) {
  }

  canActivate(): boolean{
    if (this.authservice.getToken()){
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }

}
