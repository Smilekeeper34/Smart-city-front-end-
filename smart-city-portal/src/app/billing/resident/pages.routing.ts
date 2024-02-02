import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/common/layout/layout.component';
import { ResidentDashboardComponent } from './resident-dashboard/resident-dashboard.component';
import { ResidentProfileComponent } from './resident-profile/resident-profile.component';

const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,

        children :[
            {
                path: 'dashboard',
                component: ResidentDashboardComponent,
              },
            {
                path: 'profile',
                component: ResidentProfileComponent,
              },
        ]
    },
];
export const PagesRoutes = RouterModule.forChild(routes);