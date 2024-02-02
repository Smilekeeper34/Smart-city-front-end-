import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PagesRoutes } from './billing/resident/pages.routing';
import { AppComponent } from './app.component';
import { DashtestComponent } from './common/dashtest/dashtest.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResidentDashboardComponent } from './billing/resident/resident-dashboard/resident-dashboard.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { ResidentProfileComponent } from './billing/resident/resident-profile/resident-profile.component';
import { NavComponent } from './common/nav/nav.component';
import { LayoutComponent } from './common/layout/layout.component';
import { SettingTabComponent } from './common/setting-tab/setting-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    DashtestComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    ResidentDashboardComponent,
    SidenavComponent,
    ResidentProfileComponent,
    NavComponent,
    LayoutComponent,
    SettingTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutes,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
