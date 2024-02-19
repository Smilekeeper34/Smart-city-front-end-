import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss'],
})
export class AdminCreateComponent implements OnInit {
  responseMessage: string | null = null;
  errorMessage: string | null = null;
  isLoading = false;

  // Use TypeScript type for form values
  createUserForm: FormGroup;

  constructor(private adminService: AdminService) {
    this.createUserForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit() {
    // You can do any additional initialization here if needed
  }

  createUser() {
    this.isLoading = true;
    this.responseMessage = null;
    this.errorMessage = null;

    this.adminService.createUser(this.createUserForm.value).subscribe(
      (data) => this.handleSuccessResponse(data),
      (error) => this.handleError(error)
    );
  }

  private handleSuccessResponse(data: any) {
    // Process successful response (e.g., display success message)
    console.log('User created successfully:', data);
    this.responseMessage = 'User created successfully!';
    this.isLoading = false;
    this.createUserForm.reset;
  }

  private handleError(error: any) {
    // Handle errors using error message from service
    this.errorMessage = error;
    this.isLoading = false;
  }
}
