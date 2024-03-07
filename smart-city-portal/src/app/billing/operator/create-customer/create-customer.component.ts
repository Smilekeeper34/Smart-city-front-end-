import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: [''],
      streetName: [''],
      suburbName: [''],
      city: [''],
      state: [''],
      zipCode: ['00000'],
      country: ['Zimbabwe'],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [''],
      password: ['', Validators.required],
      gender: [''],
      nationalID: [''],
      occupation: [''],
      emergencyContactName: [''],
      emergencyContactNumber: [''],
      preferredCommunicationMethod: [''],
      billingPreference: [''],
    });
  }

  onSubmit(): void {
    
    if (this.customerForm.valid) {
      const customerData = this.customerForm.value;
      this.customerService.createCustomer(customerData).subscribe(
        (response) => {
          console.log('Customer created successfully:', response);
          this.customerForm.reset();
         
        },
        (error) => {
          console.error('Error creating customer:', error);
      
        }
      );
    }
  }

  clear():void {
    this.customerForm.reset();
  }

}
