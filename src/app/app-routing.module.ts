import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FourzerofourComponent } from './components/fourzerofour/fourzerofour.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '**', component: FourzerofourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
