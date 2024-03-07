

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  private apiUrl = 'http://localhost:3000/api/billing/getAll';

  constructor(private http: HttpClient) {}

  getAllBillingDetails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
