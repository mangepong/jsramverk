import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KmomComponent } from './kmom/kmom.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reports/week/:id', component: KmomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
