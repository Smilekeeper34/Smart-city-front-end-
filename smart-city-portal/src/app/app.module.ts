import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashtestComponent } from './common/dashtest/dashtest.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResidentDashboardComponent } from './billing/resident/resident-dashboard/resident-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashtestComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    ResidentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
