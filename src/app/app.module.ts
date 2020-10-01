import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KmomComponent } from './kmom/kmom.component';
import { KmomService } from './kmom/kmom.service';
import { RegisterService } from './register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { LogoutComponent } from './logout/logout.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from "@angular/forms";
import { PickerModule } from '@ctrl/ngx-emoji-mart';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KmomComponent,
    RegisterComponent,
    LoginComponent,
    ReportsComponent,
    LogoutComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    PickerModule
  ],
  providers: [
      KmomService,
      RegisterService,
      FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
