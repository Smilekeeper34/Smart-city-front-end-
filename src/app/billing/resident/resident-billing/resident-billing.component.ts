import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';

interface Billing {
  billID: number;
  customerId: number;
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
  totalAmount:string;
}
@Component({
  selector: 'app-resident-billing',
  templateUrl: './resident-billing.component.html',
  styleUrls: ['./resident-billing.component.scss']
})


export class ResidentBillingComponent {
  billings: Billing[] = [];
  constructor(private billingService: BillingService,private router: Router) {}
  ngOnInit() {
    // Assuming you fetch the data from a service
    this.billingService.getAllBillingDetails().subscribe(
      (data) => {
        // Assuming data contains an array of billings
        this.billings = data.billings;
      },
      (error) => {
        console.error('Error fetching billings:', error);
      }
    );
  }
  // Pagination properties
  currentPage = 1;
  itemsPerPage = 10; 
  get totalItems(): number {
    return this.billings.length; 
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get paginatedBillings(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.billings.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
  getByInvoice(invoiceNumber: string): void {
    this.router.navigate(['/invoice', invoiceNumber]);
  }
}
