import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KmomComponent } from './kmom/kmom.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reports/week/:id', component: KmomComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'log', component: LogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
