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
  invoiceData: any;

  constructor(private billingService: BillingService) {}

  ngOnInit(): void {
    this.loadInvoiceData('INV-7078');
  }

  loadInvoiceData(invoiceNumber: string): void {
    this.billingService.getInvoiceData(invoiceNumber).subscribe(data => {
      console.log(data);
      this.invoiceData = data;
    });
  }
}
