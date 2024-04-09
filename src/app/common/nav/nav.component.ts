import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private billingService: BillingService
  ) {}

  ngOnInit() {
    // Check if user data exists in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      // If not, subscribe to the user observable
      this.userService.user$.subscribe((user) => {
        this.user = user;
        console.log('User object:', this.user);
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(user));
      });
    }
  }

  signOut() {
    // Clear user data from local storage
    localStorage.removeItem('user');
    
    // Sign out and navigate to login page
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
  getByInvoice(invoiceNumber: string): void {
    this.router.navigate(['/invoice', invoiceNumber]);
  }
}
