import { Component,OnInit ,HostListener} from '@angular/core';
import { sideData } from './sideData';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems: any = sideData;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {}
  isActive(link: string): boolean {
    return this.router.isActive(link, false); 
  }
  changeRouter(link: any) {
    this.router.navigate([`${link}`]);
  }
  checkActiveRouter(route: string): boolean {
    return route === this.router.url;
  }
  hasAccess(menuItem: any): boolean {
    const user = this.userService.getUser();
    return user && menuItem.role.includes(user.accountType);
  }
}
