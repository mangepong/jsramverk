import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

    register(email, password) {
        return this.http.post(`http://localhost:1337/register`, {email: email, password: password});
    }

    login(email, password) {
          return this.http.post(`http://localhost:1337/login`, {email: email, password: password})
              .pipe(map(user => {
                  localStorage.setItem('user', JSON.stringify(user));
                  return user;
              }));
      }
    logout() {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }

    post(title, text) {

        let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': JSON.parse(localStorage.getItem("user")).jwt_token });
        let options = { headers: headers };

        return this.http.post(`http://localhost:1337/reports`, {title: title, text: text}, options);
    }
}
