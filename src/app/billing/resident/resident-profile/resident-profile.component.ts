import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-resident-profile',
  templateUrl: './resident-profile.component.html',
  styleUrls: ['./resident-profile.component.scss']
})
export class ResidentProfileComponent {
  user: any; 
  editMode = false;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}
  
  ngOnInit() {
    this.userService.getUser();
    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User object:', this.user);
    });
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Assuming 'customer' is the property containing the customer details
    const updatedDetails = this.user.customer;

    // Make a PUT request to update the user details
    this.http.put(`http://localhost:3000/api/customer/${updatedDetails.customerNum}`, updatedDetails)
      .subscribe(
        (response) => {
          console.log('User details updated successfully', response);
        },
        (error) => {
          console.error('Error updating user details', error);
        }
      );

    // Exit edit mode
    this.editMode = false;
  }
  
}
