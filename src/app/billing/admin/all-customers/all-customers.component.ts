import { Component,OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';


interface Customer {
  customer_id_string: string;
  customerId: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  streetName: string;
  suburbName: string;
  city: string;
  // Add more properties as needed
}

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit{


  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchAllCustomers();
  }

  fetchAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data.customers;
      },
      (error) => {
        // console.error('Error fetching customers:', error);
      }
    );
  }

  deleteCustomer(customerId: string): void {
    this.customerService.deleteCustomer(customerId).subscribe(
      (response) => {
        // console.log('Customer deleted successfully:', response);
        this.fetchAllCustomers();
        
      },
      (error) => {
        // console.error('Error deleting customer:', error);
        
      }
    );
  }
}
