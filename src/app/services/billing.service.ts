

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  private apiUrl = 'http://localhost:3000/api/billing/getAll';
  private invoiceUrl ='http://localhost:3000/api/billing/invoice/';
  private postUrl ='http://localhost:3000/api/billing/generate';
  private deleteUrl = 'http://localhost:3000/api/billing/';

  constructor(private http: HttpClient) {}

  getAllBillingDetails(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getInvoiceData(invoiceNumber: string): Observable<any> {
    return this.http.get<any>(`${this.invoiceUrl}${invoiceNumber}`);
  }
  generateInvoices(): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.postUrl, {}, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  deleteByInvoiceNumber(invoiceNumber: string): Observable<any> {
    const url = `${this.deleteUrl}${invoiceNumber}`;    
    return this.http.delete(url).pipe(
    map(() => true), 
    catchError(this.handleError)
  );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
