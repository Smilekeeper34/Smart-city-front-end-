import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PagesRoutes } from './billing/resident/pages.routing';
import { AppComponent } from './app.component';
import { DashtestComponent } from './common/dashtest/dashtest.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { ResidentDashboardComponent } from './billing/resident/resident-dashboard/resident-dashboard.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { ResidentProfileComponent } from './billing/resident/resident-profile/resident-profile.component';
import { NavComponent } from './common/nav/nav.component';
import { LayoutComponent } from './common/layout/layout.component';
import { SettingTabComponent } from './common/setting-tab/setting-tab.component';
import { ResidentBillingComponent } from './billing/resident/resident-billing/resident-billing.component';
import { ResidentBillInvoiceComponent } from './billing/resident/resident-bill-invoice/resident-bill-invoice.component';
import { ResidentBillPaymentsComponent } from './billing/resident/resident-bill-payments/resident-bill-payments.component';
import { ResidentConfigurationsComponent } from './billing/resident/resident-configurations/resident-configurations.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { AdminCreateComponent } from './billing/admin/admin-create/admin-create.component';
import { CreateTarriffsComponent } from './billing/admin/create-tarriffs/create-tarriffs.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { CreateCustomerComponent } from './billing/operator/create-customer/create-customer.component';
import { AllCustomersComponent } from './billing/admin/all-customers/all-customers.component';
import { LoaderComponent } from './common/loader/loader.component';
import { TarriffTableComponent } from './billing/admin/tarriff-table/tarriff-table.component';
import { AuthGuard } from './services/auth.guard';
import { FinishRegComponent } from './auth/finish-reg/finish-reg.component';
import { BrowserModule } from '@angular/platform-browser';
import { StripePaymentComponent } from './billing/resident/stripe-payment/stripe-payment.component';
import { PaymentMethodsComponent } from './common/payment-methods/payment-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    DashtestComponent,
    LoginComponent,
    HeaderComponent,
    ResidentDashboardComponent,
    SidenavComponent,
    ResidentProfileComponent,
    NavComponent,
    LayoutComponent,
    SettingTabComponent,
    ResidentBillingComponent,
    ResidentBillInvoiceComponent,
    ResidentBillPaymentsComponent,
    ResidentConfigurationsComponent,
    HomepageComponent,
    AdminCreateComponent,
    CreateTarriffsComponent,
    PaginationComponent,
    CreateCustomerComponent,
    AllCustomersComponent,
    LoaderComponent,
    TarriffTableComponent,
    FinishRegComponent,
    StripePaymentComponent,
    PaymentMethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
