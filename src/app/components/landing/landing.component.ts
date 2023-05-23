import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppCookieServiceService } from 'src/app/services/app-cookie-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  form: any;
  loading: boolean = false;

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
    this.authService.login(this.form.value).subscribe((res) => {
      console.log('response:', res);
      this.loading = false;
    });
  }
}
