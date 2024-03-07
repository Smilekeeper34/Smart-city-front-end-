import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class tariffRateService {

    private apiUrl = 'http://localhost:3000/api/tariffRates/getAll';

  constructor(private http: HttpClient) {}

  getTariffs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
    
  }