import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private baseUrl = 'http://localhost:3000/api/houses';

  constructor(private http: HttpClient) { }

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
}
