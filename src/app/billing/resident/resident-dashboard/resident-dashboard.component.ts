import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private tarriff: tariffRateService
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log('User object:', this.user);
    });

    this.tarriff.getTariffs().subscribe((data) => {
      if (data.success) {
        this.tariffs = data.tariffs;
      }
    });
  }
}
