import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth/login'; 

  constructor(private http: HttpClient) {}

  login(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  // getDecodedToken() {
  //   const token = localStorage.getItem('token');
  //   const decoded: any = jwt_decode(token);
  //   return decoded;
  // }
  // isLoggedIn(): boolean {
  //   const user = localStorage.getItem('token');
  //   if (user && !this.isTokenExpired()) {
  //     return true;
  //   }
  //   return false;
  // }

  // isTokenExpired(): boolean {
  //       const expirationDate = this.getTokenExpirationDate()*1000;
  //       let dateNow = new Date().getTime();      
  //       if(expirationDate === null){
  //           sessionStorage.clear();
  //           localStorage.clear();
  //           return true;
  //       }
  //       if(dateNow < Number(expirationDate) ){
  //           return false;
  //       }
  //       else{
  //           sessionStorage.clear();
  //           localStorage.clear();
  //           return true;
  //       }
        
  //       }

  // getUserEmail() {
  //   const user = this.getDecodedToken().user;
   
  //   return user;
  //   }
    
  // getUserRoles() {
  //   const userRoles = this.getDecodedToken().roles;
  //   return userRoles;
  // }

  // getTokenExpirationDate() {
  //   const dateToExpire = this.getDecodedToken().exp;
  //   return dateToExpire;
  // }
}
