import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class KmomService {

  constructor(private http: HttpClient) { }

  getReports(kmom) {
    return this.http.get('https://me-api.mangepongjs.me/reports/week/' + kmom);
  }
}
