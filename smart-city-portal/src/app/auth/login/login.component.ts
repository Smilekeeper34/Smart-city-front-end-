import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';
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
    private registrationService: RegistrationService
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
        (response) => {
          console.log('Login successful', response);
          this.loginForm.reset();
          this.router.navigate(['/dashboard']);
          this.errorMessage = '';
        },
        (error) => {
          console.error('Login failed', error);
          // Handle login failure
          // Set error message based on the server response
          if (error.status === 401) {
            this.errorMessage = 'Incorrect username or password';
          } else if (error.status === 404) {
            this.errorMessage = 'User not found';
          } else {
            this.errorMessage = 'An error occurred during login';
          }
        }
      );
    }
  }

  Register() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      this.registrationService.register(formData).subscribe(
        response => {
          console.log('Registration successful', response);
          console.log(formData);
            // Clear the form
        this.registrationForm.reset();
        alert('Registration successful!');
        this.showSignInForm = true;
          // Handle successful registration, e.g., redirect to another page
        },
        error => {
          console.error('Registration failed', error);
          // Handle registration failure
          if (error.status === 400) {
            // Handle specific HTTP 400 Bad Request errors
            console.error('Bad Request:', error.error);
            // You might want to display error messages to the user
          } else if (error.status === 401) {
            // Handle specific HTTP 401 Unauthorized errors
            console.error('Unauthorized:', error.error);
            // You might want to redirect to a login page
          } else {
            // Handle other types of errors
            console.error('Unexpected error:', error);
            // You might want to display a generic error message to the user
          }
        }
      );
    }
  }
}
