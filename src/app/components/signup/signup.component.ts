import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppCookieServiceService } from 'src/app/services/app-cookie-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { SignupPayload } from 'src/app/types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user$ = new BehaviorSubject<SignupPayload | null>(null);
  loading = false;

  constructor(
    private authService: AuthService,
    private cookService: AppCookieServiceService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    this.loading = true;
    this.authService.signup(form.value).subscribe((data) => {
      this.loading = false;
      const response = data as {
        error: string | null;
        token?: string;
        message?: string | null;
      };
      if (response.error) {
        alert(response.message);
      } else {
        this.cookService.set('token', (data as SignupPayload).token);
        this.user$.next(data as SignupPayload);
        this.router.navigateByUrl('/user');
      }
    });
  }
}
