import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  navList: string[] = ['features', 'privacy & safety', 'mobile app', 'about'];
}
