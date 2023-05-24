import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppCookieServiceService } from 'src/app/services/app-cookie-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginPayload } from 'src/app/types';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  form: any;
  loading: boolean = false;
  user$ = new BehaviorSubject<LoginPayload | null>(null);

  constructor(
    private authService: AuthService,
    private cookService: AppCookieServiceService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.form.value).subscribe((data) => {
      this.loading = false;
      const response = data as {
        error: string | null;
        token?: string;
        message?: string;
      };
      if (response.error) {
        alert(response.error);
      } else {
        this.cookService.set('token', (data as LoginPayload).token);
        this.user$.next(data as LoginPayload);
        this.router.navigateByUrl('/user');
      }
    });
  }
}
