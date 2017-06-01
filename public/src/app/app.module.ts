import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { CreateService } from './create/create.service';
import { ViewComponent } from './view/view.component';
import { ViewService } from './view/view.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService, 
    DashboardService,
    CreateService,
    ViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
