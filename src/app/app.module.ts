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
import { ChatComponent } from './components/chat/chat.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { SocketIOService } from './services/socket-io.service';
import { StoreModule } from '@ngrx/store';
import { chatReducer } from './store/reducers/chat.reducer';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FourzerofourComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    UserComponent,
    ChatComponent,
    MessageBoxComponent,
    EllipsisPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ online: chatReducer }),
  ],
  providers: [
    AuthService,
    AppCookieServiceService,
    JwtService,
    SocketIOService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
