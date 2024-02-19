import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = 'http://localhost:3000/api/admin/create'; 

  constructor(private http: HttpClient) {}

  createUser(userData: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer YOUR_API_TOKEN' 
    });

    const options = { headers };

    return this.http.post<any>(this.apiUrl, userData, options)
      .pipe(
        catchError(error => {
          const errorMessage = error.error?.message || 'Error creating user. Please try again later.';
          return throwError(errorMessage);
        })
      );
  }
}
