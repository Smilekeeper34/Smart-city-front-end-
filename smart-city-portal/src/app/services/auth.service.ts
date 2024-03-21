//Auth Service

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map ,catchError,throwError, tap, of} from 'rxjs';

import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserService } from './user.service';

interface DecodedToken {
  customer?: {
    customer_id_string?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient, private userService: UserService) {}

  login(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData).pipe(
      tap((response: any) => {
        const token = response.token;
        const customer = response.customer;

        if (customer) {
          const userDetails = {
            customerNum:customer.customerId,
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
        }

        localStorage.setItem('token', token);

        return response;
      }),
      catchError((error) => throwError(error))
    );
  }

  signOut() {
   
    localStorage.clear();
    this.userService.setUser(null); 
  }
  getDecodedToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found in local storage');
    }
  
    try {
      const decoded: any = jwtDecode(token);
      return decoded;
    } catch (error) {
      throw new Error('Error decoding token: ' + error.message);
    }  
  }
  
  isLoggedIn(): Observable<boolean> {
    const user = localStorage.getItem('token');
    const isLoggedIn = user && !this.isTokenExpired(); 
    return of(isLoggedIn); 
  }

  isTokenExpired(): boolean {
    const expirationDate = this.getTokenExpirationDate() * 1000;
    let dateNow = new Date().getTime();
    if (expirationDate === null) {
      sessionStorage.clear();
      localStorage.clear();
      return true;
    }
    if (dateNow < Number(expirationDate)) {
      return false;
    } else {
      sessionStorage.clear();
      localStorage.clear();
      return true;
    }
  }

  getUserEmail() {
    const user = this.getDecodedToken().user;

    return user;
  }

  getUserRoles() {
    const userRoles = this.getDecodedToken().roles;
    return userRoles;
  }

  getTokenExpirationDate() {
    const dateToExpire = this.getDecodedToken().exp;
    return dateToExpire;
  }
}
