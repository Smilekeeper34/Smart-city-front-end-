
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/api/customer';

  constructor(private http: HttpClient) {}

  createCustomer(customerData: any): Observable<any> {
    const url = `${this.apiUrl}/createCustomer`;
    return new Observable((observer) => {
      this.http.post(url, customerData).subscribe(
        (response) => {
          Swal.fire('Success', 'Customer created successfully!', 'success');
          observer.next(response);
          observer.complete();
        },
        (error) => {
          Swal.fire('Error', 'Error creating customer', 'error');
          observer.error(error);
        }
      );
    });
  }
}
