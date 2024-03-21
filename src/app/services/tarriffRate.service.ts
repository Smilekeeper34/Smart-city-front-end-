import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class tariffRateService {

  private apiUrl = 'http://localhost:3000/api/tariffRates/getAll';
  private postUrl = 'http://localhost:3000/api/tariffRates';
  private deleteUrl = 'http://localhost:3000/api/tariffRates'; 

  constructor(private http: HttpClient) {}

  getTariffs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTariff(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.postUrl, data, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTariff(tariffID: number): Observable<any> {
    const url = `${this.deleteUrl}/${tariffID}`;
    const headers = new HttpHeaders({'accept': 'application/json'});
    
    return this.http.delete(url, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    // Handle error logic here
    return throwError(error);
  }
}
