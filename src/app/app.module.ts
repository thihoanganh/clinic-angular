import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedGuard } from './guards/logged-guard.service';
import { AdminLoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AdminModule
   
  ],
  providers: [
    LoginService,
    RegisterService,
    LoggedGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
