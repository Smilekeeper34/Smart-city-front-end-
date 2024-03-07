import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/services/billing.service';

interface BillingDetail {
  description: string;
  quantity: number;
  totalAmount: number;
  // Add other properties if needed
}

@Component({
  selector: 'app-resident-bill-invoice',
  templateUrl: './resident-bill-invoice.component.html',
  styleUrls: ['./resident-bill-invoice.component.scss'],
})
export class ResidentBillInvoiceComponent implements OnInit {
  billings: any[] = [];

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.loadBillingDetails();
  }

  loadBillingDetails() {
    this.billingService.getAllBillingDetails().subscribe(
      (data) => {
        this.billings = data.billings;
        console.log('Billing Details:', this.billings);
      },
      (error) => {
        console.error('Error fetching billing details:', error);
      }
    );
  }
}
