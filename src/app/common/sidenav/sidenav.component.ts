import { Component,OnInit ,HostListener} from '@angular/core';
import { sideData } from './sideData';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems: any = sideData;
  constructor(private router: Router) { }

  ngOnInit() {}
  changeRouter(link: any) {
    this.router.navigate([`${link}`]);
  }
  checkActiveRouter(route: string): boolean {
    return route === this.router.url;
  }
}
