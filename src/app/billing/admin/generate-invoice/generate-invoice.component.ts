import { Component } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';

interface Billing {
  billID: number;
  customerId: number;
  houseId: number;
  billingDate: string;
  createdAt: string;
  discountAmount: string;
  dueDate: string;
  invoiceNumber: string;
  lateFee: string;
  notes: string;
  paymentMethod: string;
  paymentStatus: string;
  promoCode: string;
  taxAmount: string;
  totalBillAmount: string;
}

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss'],
})
export class GenerateInvoiceComponent {
  billings: Billing[] = [];
  constructor(private billingService: BillingService) {}

  onSubmit() {
    this.billingService.generateInvoices().subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Invoices generated successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.error('Error generating invoices:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        // Handle error
      }
    );
  }
  deleteInvoice(invoiceNumber: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this invoice!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.billingService.deleteByInvoiceNumber(invoiceNumber).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'The invoice has been deleted.', 'success');
            this.viewInvoices(); 
          },
          error: (error) => {
            Swal.fire(
              'Error!',
              'There was a problem deleting the invoice.',
              'error'
            );
          },
        });
      }
    });
  }

  viewInvoices() {
    this.billingService.getAllBillingDetails().subscribe(
      (data) => {
        this.billings = data.billings;
      },
      (error) => {
        console.error('Error fetching billings:', error);
      }
    );
  }
}
