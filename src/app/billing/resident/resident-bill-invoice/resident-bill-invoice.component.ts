import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-resident-bill-invoice',
  templateUrl: './resident-bill-invoice.component.html',
  styleUrls: ['./resident-bill-invoice.component.scss'],
})
export class ResidentBillInvoiceComponent implements OnInit {
  invoiceNumber: string;
  invoiceData: any;

  constructor(
    private route: ActivatedRoute,
    private billingService: BillingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.invoiceNumber = params['invoiceNumber']; // Assuming 'invoiceNumber' is the route parameter
      this.loadInvoiceData(this.invoiceNumber);
    });
  }

  loadInvoiceData(invoiceNumber: string): void {
    this.billingService.getInvoiceData(invoiceNumber).subscribe(data => {
      console.log(data);
      this.invoiceData = data;
    });
  }
}
