import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class KmomService {

  constructor(private http: HttpClient) { }

  getReports(kmom) {
    return this.http.get('http://localhost:1337/reports/week/' + kmom);
  }
}
