import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/DataShareService.service';
import { HouseService } from 'src/app/services/house.service';
import { tariffRateService } from 'src/app/services/tarriffRate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-resident-dashboard',
  templateUrl: './resident-dashboard.component.html',
  styleUrls: ['./resident-dashboard.component.scss']
})
export class ResidentDashboardComponent {
  user: any; 
  tariffs: any[];
  houses: any[];

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private tarriff: tariffRateService,
    private houseService: HouseService, // Inject HouseService
    private dataShareService: DataShareService
    
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User object:', this.user);
  
      // Check if the user object is available
      if (this.user && this.user.customerId) {
        // Call the method to fetch houses by customer ID
        this.houseService.getHousesByCustomerId(this.user.customerId).subscribe((houses) => {
          this.houses = houses;
          console.log('Fetched houses:', this.houses); // Log the fetched houses
        });
      } else {
        console.error('Customer ID is not available.');
      }
    });
  
    this.tarriff.getTariffs().subscribe((data) => {
      if (data.success) {
        this.tariffs = data.tariffs;
      }
    });
  }

  fetchHousesByCustomerId() {
    if (this.user && this.user.customerId) {
      this.houseService.getHousesByCustomerId(this.user.customerId).subscribe((houses) => {
        this.houses = houses;
        console.log('Fetched houses:', this.houses);
      });
    } else {
      console.error('Customer ID is not available.');
    }
  }
  
}
