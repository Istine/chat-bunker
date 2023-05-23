import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FourzerofourComponent } from './components/fourzerofour/fourzerofour.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [{ path: 'chat', component: ChatComponent }],
  },
  { path: '**', component: FourzerofourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
