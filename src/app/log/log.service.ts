import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {

    constructor(private http: HttpClient) { }

    getLogs() {
      return this.http.get('https://me-api.mangepongjs.me/log');
    }
}
