import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { DataShareService } from './DataShareService.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private baseUrl = 'http://localhost:3000/api/houses';

  constructor(private http: HttpClient , private dataShareService: DataShareService) { }

  createHouse(houseData: any, customerId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you're using JWT for authentication
    });
    const body = { ...houseData, customerId };
    return this.http.post(`${this.baseUrl}/createHouse`, body, { headers });
  }

  getAllHouses(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you're using JWT for authentication
    });
    return this.http.get(`${this.baseUrl}/getAll`, { headers });
  }
  getHousesByCustomerId(customerId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${this.baseUrl}/getHousesByCustomerId/${customerId}`, { headers });
  }
  
}
