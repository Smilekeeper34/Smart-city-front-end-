// registration.service.ts
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable,
  catchError,
  filter,
  switchMap,
  tap,
  throwError,
  timer,
} from 'rxjs';
import { Customer } from '../tools/interfaces/customer';
import { DataShareService } from './DataShareService.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = 'http://localhost:3000/auth/register/basic';
  private baseUrl = 'http://localhost:3000/api/customer';

  constructor(
    private http: HttpClient,
    private dataShareService: DataShareService,
    private userService: UserService
  ) {}

  register(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData).pipe(
      switchMap((response: any) => {
        if (response.success) {
          const token = response.token;
          const customer = response.customer;

          const userDetails = {
            customerNum: customer.customerId,
            customerId: customer.customer_id_string,
            firstName: customer.firstName,
            lastName: customer.lastName,
            streetName: customer.streetName,
            suburbName: customer.suburbName,
            city: customer.city,
            state: customer.state,
            zipCode: customer.zipCode,
            country: customer.country,
            otherAddressDetails: customer.otherAddressDetails,
            contactNumber: customer.contactNumber,
            email: customer.email,
            dateOfBirth: customer.dateOfBirth,
            registrationDate: customer.registrationDate,
            password: customer.password,
            gender: customer.gender,
            nationalID: customer.nationalID,
            occupation: customer.occupation,
            emergencyContactName: customer.emergencyContactName,
            emergencyContactNumber: customer.emergencyContactNumber,
            preferredCommunicationMethod: customer.preferredCommunicationMethod,
            isActive: customer.isActive,
            isVIP: customer.isVIP,
            residentialType: customer.residentialType,
            numberOfOccupants: customer.numberOfOccupants,
            monthlyIncome: customer.monthlyIncome,
            billingPreference: customer.billingPreference,
            waterUsageAlert: customer.waterUsageAlert,
            userEngagementOptIn: customer.userEngagementOptIn,
            lastBillingDate: customer.lastBillingDate,
            lastPaymentDate: customer.lastPaymentDate,
            userFeedbackOptIn: customer.userFeedbackOptIn,
            landownerProperties: customer.landownerProperties,
            createdAt: customer.createdAt,
            updatedAt: customer.updatedAt,
          };

          this.userService.setUser(userDetails);
          localStorage.setItem('token', token);
          console.log(response);
          return this.fetchCustomer();
        } else {
          return throwError(() => new Error('Registration failed'));
        }
      }),
      catchError((error) => throwError(() => error))
    );
  }

  fetchCustomer() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.dataShareService.customerId$.pipe(
      filter((customerId) => customerId !== null),
      switchMap((customerId) =>
        this.http.get<Customer>(`${this.baseUrl}/${customerId}`, { headers })
      ),
      catchError(this.handleError)
    );
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.dataShareService.customerId$.pipe(
      filter((customerId) => customerId !== null),
      switchMap((customerId) => {
        return this.http.put(`${this.baseUrl}/${customerId}`, customer).pipe(
          tap((updatedCustomer) =>
            console.log('Updated Customer Payload:', updatedCustomer)
          ),
          catchError(this.handleError)
        );
      })
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Backend connection error:', error.error);
    } else {
      console.error(
        'Backend returned code:',
        error.status,
        'body:',
        error.error
      );
    }
    return throwError('An error occurred. Please try again later.'); // Re-throw as an Observable
  }
}
