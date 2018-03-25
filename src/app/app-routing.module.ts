import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './page/home/home.component';
import { ReviewComponent } from './page/review/review.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'review', component: ReviewComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
