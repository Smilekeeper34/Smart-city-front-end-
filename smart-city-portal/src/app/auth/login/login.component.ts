import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
}
