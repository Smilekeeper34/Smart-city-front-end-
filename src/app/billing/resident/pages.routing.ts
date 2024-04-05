import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/common/layout/layout.component';
import { AuthGuard } from 'src/app/services/auth.guard';

import { AdminCreateComponent } from '../admin/admin-create/admin-create.component';
import { AllCustomersComponent } from '../admin/all-customers/all-customers.component';
import { CreateCustomerComponent } from '../operator/create-customer/create-customer.component';
import { CreateTarriffsComponent } from '../admin/create-tarriffs/create-tarriffs.component';
import { ResidentBillInvoiceComponent } from './resident-bill-invoice/resident-bill-invoice.component';
import { ResidentBillingComponent } from './resident-billing/resident-billing.component';
import { ResidentConfigurationsComponent } from './resident-configurations/resident-configurations.component';
import { ResidentDashboardComponent } from './resident-dashboard/resident-dashboard.component';
import { ResidentBillPaymentsComponent } from './resident-bill-payments/resident-bill-payments.component';
import { ResidentProfileComponent } from './resident-profile/resident-profile.component';
import { TarriffTableComponent } from '../admin/tarriff-table/tarriff-table.component';
import { GenerateInvoiceComponent } from '../admin/generate-invoice/generate-invoice.component';
import { AddHouseComponent } from './add-house/add-house.component';

const childRoutes: Routes = [
  { path: 'dashboard', component: ResidentDashboardComponent },
  { path: 'profile', component: ResidentProfileComponent },
  { path: 'billing', component: ResidentBillingComponent },
  { path: 'invoice', component: ResidentBillInvoiceComponent },
  { path: 'payments', component: ResidentBillPaymentsComponent },
  { path: 'config', component: ResidentConfigurationsComponent },
  { path: 'createadmin', component: AdminCreateComponent },
  { path: 'generate-invoice', component: GenerateInvoiceComponent },
  { path: 'add-house', component: AddHouseComponent },
  { path: 'createcustomer', component: CreateCustomerComponent },
  { path: 'createtarriff', component: CreateTarriffsComponent },
  { path: 'tarriffTable', component: TarriffTableComponent },
  { path: 'customers', component: AllCustomersComponent },
];

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: childRoutes,
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
