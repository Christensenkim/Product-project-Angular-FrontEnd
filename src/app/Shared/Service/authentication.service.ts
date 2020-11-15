import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<boolean>{
    this.logout();
    return this.http.post<any>('https://localhost:44317/api/token', {userName, password})
      .pipe(map(response => {
      const token = response && response.token;

      if (token){
        localStorage.setItem('currentUser', JSON.stringify({userName, token}));
        return true;
      }else{
        return false;
      }
    }));
  }

  getToken(): string {
    debugger;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser)
    {
      debugger;
      return currentUser && currentUser.token;
    }else {
      return null;
    }
  }

  getUsername(): string{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser && currentUser.username;
    } else {
      return null;
    }
  }

  logout(): void{
    localStorage.removeItem('currentUser');
  }
}
