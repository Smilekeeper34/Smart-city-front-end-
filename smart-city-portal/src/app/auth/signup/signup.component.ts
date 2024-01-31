import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactNumber: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      this.registrationService.register(formData).subscribe(
        response => {
          console.log('Registration successful', response);
          console.log(formData);
            // Clear the form
        this.registrationForm.reset();
        alert('Registration successful!');
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
