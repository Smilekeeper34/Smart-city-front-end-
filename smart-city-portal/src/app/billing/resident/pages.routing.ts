import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/common/layout/layout.component';
import { ResidentDashboardComponent } from './resident-dashboard/resident-dashboard.component';
import { ResidentProfileComponent } from './resident-profile/resident-profile.component';
import { ResidentBillingComponent } from './resident-billing/resident-billing.component';
import { ResidentBillInvoiceComponent } from './resident-bill-invoice/resident-bill-invoice.component';
import { ResidentBillPaymentsComponent } from './resident-bill-payments/resident-bill-payments.component';
import { ResidentConfigurationsComponent } from './resident-configurations/resident-configurations.component';

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
            {
                path: 'billing',
                component: ResidentBillingComponent,
              },
            {
                path: 'invoice',
                component: ResidentBillInvoiceComponent,
              },
            {
                path: 'payments',
                component: ResidentBillPaymentsComponent,
              },
            {
                path: 'config',
                component: ResidentConfigurationsComponent,
              },
        ]
    },
];
export const PagesRoutes = RouterModule.forChild(routes);