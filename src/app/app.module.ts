import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { FourzerofourComponent } from './components/fourzerofour/fourzerofour.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { AppCookieServiceService } from './services/app-cookie-service.service';
import { JwtService } from './services/jwt.service';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FourzerofourComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AppCookieServiceService, JwtService],
  bootstrap: [AppComponent],
})
export class AppModule {}
