import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Stripe } from '@capacitor-community/stripe';

@Component({
  selector: 'app-resident-bill-payments',
  templateUrl: './resident-bill-payments.component.html',
  styleUrls: ['./resident-bill-payments.component.scss']
})
export class ResidentBillPaymentsComponent implements OnInit{

  constructor() {
    Stripe.initialize({
      publishableKey: 'pk_test_51OuECp09L8fLaOX5xYqXLyDxl99wp6WQ1HVF2eDESle72TEzGs9FwNXCBmMgI5rHWlq4cdIT2TVqZ1nV6x7Fplyo00N15w806l',
    });
  }
  @Output() paymentMethodEvent = new EventEmitter<string>();
  method = '';

  form = new FormGroup({
    method:new FormControl('stripe')
  })

  emitEvent(method: string) {
    this.paymentMethodEvent.emit(method);
    this.method = method;
    console.log(method)
  }

  ngOnInit(): void {
    this.paymentMethodEvent.emit('stripe');
  }
}
