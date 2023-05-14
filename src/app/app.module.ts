import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { FourzerofourComponent } from './components/fourzerofour/fourzerofour.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, FourzerofourComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
