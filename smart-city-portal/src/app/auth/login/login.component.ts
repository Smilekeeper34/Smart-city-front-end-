import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/DataShareService.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';
import Swal from 'sweetalert2';

interface RegistrationFormData {
  firstName:string;
  lastName:string;
  contactNumber: string;
  email: string;
  password: string;
}

interface RegistrationResponse {
  success: boolean;
  customerID?: number; 
  token?: string;
  error?: string; // For error messages from the backend
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  registrationForm: FormGroup;
  errorMessage: string;
  showSignInForm: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private registrationService: RegistrationService,
    private dataShareService : DataShareService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactNumber: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
  
      this.authService.login(formData).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome!', 
            confirmButtonText: 'Proceed to Dashboard'
          }).then(() => {
            console.log('Login successful', response); 
            this.loginForm.reset();
            this.router.navigate(['/dashboard']);
            this.errorMessage = '';
          });
        },
        error => {
          let errorMessage = 'An error occurred during login'; // Default error
          if (error.status === 401) {
            errorMessage = 'Incorrect username or password';
          } else if (error.status === 404) {
            errorMessage = 'User not found';
          } 
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: errorMessage 
          });
        }
      );
    }
  }
  

  Register() {
    if (this.registrationForm.valid) {
      const formData: RegistrationFormData = this.registrationForm.value;

      this.registrationService.register(formData).subscribe(
        (response: RegistrationResponse) => {
          if (response.success) {
            const customerId = response.customerID; 

            Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: 'Welcome! Please proceed to finish your registration.', 
            }).then(() => {              
              this.registrationForm.reset();
              this.showSignInForm = true; 
              console.log('customerID: ',customerId);
              this.dataShareService.updateCustomerId(customerId);
              this.router.navigate(['/finishReg']); // Redirect with ID
            });

          } else {
            // Registration Error from Backend
            let errorMessage = response.error || 'An unknown error occurred during registration'; // Use error from backend if available
            Swal.fire({
              icon: 'error',
              title: 'Registration Failed',
              text: errorMessage
            });
          }
        },
        error => {
          let errorMessage = ''; 
          if (error.status === 400) {
            errorMessage = 'Bad Request. Please review your form information.';
          } else if (error.status === 401) {
            errorMessage = 'Unauthorized. This might mean a username is already taken.';
          }

          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: errorMessage
          })
        }
      );
    }
  }
  
}
