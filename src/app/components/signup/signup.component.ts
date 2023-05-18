import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  getValue(value: NgModel) {
    console.log(value);
  }
}
