import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataShareService } from 'src/app/services/DataShareService.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { Customer } from 'src/app/tools/interfaces/customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finish-reg',
  templateUrl: './finish-reg.component.html',
  styleUrls: ['./finish-reg.component.scss'],
})
export class FinishRegComponent implements OnInit {
  customerId: number;
  customer: Customer | null = null;
  isSaving = false;
  customerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    private router: Router,
    private dataShareService: DataShareService
  ) {}

  ngOnInit() {
    this.dataShareService.customerId$.subscribe((customerId) => {
      if (customerId) {
        this.customerId = customerId;
        this.fetchCustomerData();
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  initializeForm() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(this.customer?.firstName, Validators.required),
      lastName: new FormControl(this.customer?.lastName, Validators.required),
      streetName: new FormControl(this.customer?.streetName),
      suburbName: new FormControl(this.customer?.suburbName),
      city: new FormControl(this.customer?.city || 'Smart City'),
      state: new FormControl(this.customer?.state || 'Smart State'),
      zipCode: new FormControl(this.customer?.zipCode || '00000', [
        Validators.pattern(/\d+/),
      ]),
      country: new FormControl(this.customer?.country || 'ZIM'),
      accountType: new FormControl(this.customer?.accountType),
      contactNumber: new FormControl(this.customer?.contactNumber, [
        Validators.pattern(/\d+/),
      ]),
      email: new FormControl(this.customer?.email, [Validators.email]), // Email validator
      dateOfBirth: new FormControl(this.customer?.dateOfBirth),
      gender: new FormControl(this.customer?.gender),
      nationalID: new FormControl(this.customer?.nationalID),
      occupation: new FormControl(this.customer?.occupation),
      emergencyContactName: new FormControl(
        this.customer?.emergencyContactName
      ),
      emergencyContactNumber: new FormControl(
        this.customer?.emergencyContactNumber,
        [Validators.pattern(/\d+/)]
      ),
      preferredCommunicationMethod: new FormControl(
        this.customer?.preferredCommunicationMethod
      ),
      residentialType: new FormControl(this.customer?.residentialType),
      numberOfOccupants: new FormControl(this.customer?.numberOfOccupants, [
        Validators.min(1),
      ]), // Ensure at least one
      monthlyIncome: new FormControl(this.customer?.monthlyIncome, [
        Validators.min(0),
      ]),
      billingPreference: new FormControl(this.customer?.billingPreference),
      waterUsageAlert: new FormControl(this.customer?.waterUsageAlert), // Default to false if not provided
      userEngagementOptIn: new FormControl(this.customer?.userEngagementOptIn || false) ,
      lastBillingDate: new FormControl(this.customer?.lastBillingDate),
      lastPaymentDate: new FormControl(this.customer?.lastPaymentDate),
      userFeedbackOptIn: new FormControl(this.customer?.userFeedbackOptIn),
    });
  }

  fetchCustomerData() {
    if (!this.customerId) {
      console.error('customerId is missing. Cannot fetch customer data.');
      return;
    }

    this.registrationService.fetchCustomer().subscribe((customer) => {
      this.customer = customer;
      console.log(customer);
      this.initializeForm();
    });
  }

  saveInformation() {
    this.isSaving = true;

    this.registrationService.updateCustomer(this.customer).subscribe({
      next: () => {
        this.isSaving = false;
        Swal.fire({
          icon: 'success',
          title: 'Saved!',
          text: 'Customer information updated successfully.',
        });

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error saving customer data:', error);
        this.isSaving = false;
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'There was a problem saving your information. Please try again.',
        });
      },
    });
  }

  clear(): void {
    this.customerForm.reset();
  }
}
