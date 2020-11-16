import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  login(userName: string, password: string): Observable<boolean>{
    return this.http.post<any>('https://productprojekt.azurewebsites.net/api/token', {userName, password})
      .pipe(map(response => {
      const token = response.token;

      if (token){
        localStorage.setItem('currentUser', JSON.stringify({username: userName, token: token}));
        return true;
      }else{
        return false;
      }
    }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser)
    {
      return currentUser.token;
    }else {
      return null;
    }
  }

  getUsername(): string{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.username;
    } else {
      return null;
    }
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('login');
  }
}
