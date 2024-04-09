import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { sideData } from 'src/app/common/sidenav/sideData'; 

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    const user = this.userService.getUser();
    const menuItem = sideData.find(item => item.link === url); 

    console.log("URL:", url);
    console.log("User account type:", user ? user.accountType : "User not found");
    console.log("Roles specified in sideData:", menuItem ? menuItem.role : "Menu item not found");

    if (!menuItem || !menuItem.role || !user) {
      console.log("Access denied: Menu item not found or user not logged in");
      this.router.navigate(['/unauthorized']);
      return false;
    }

    if (menuItem.role.includes(user.accountType)) {
      console.log("Access granted");
      return true;
    }

    console.log("Access denied: User does not have required role");
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
