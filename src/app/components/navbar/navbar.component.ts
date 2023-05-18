import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navList: string[] = ['features', 'privacy & safety', 'mobile app', 'sign up'];

  transformLink(link: string) {
    if (link === 'sign up') return 'sign-up';
    return link;
  }
}
